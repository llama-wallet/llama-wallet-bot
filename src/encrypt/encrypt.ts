import { DecryptError, DecryptGetError, EncryptError, EncryptPutError, KeyNotFound } from "@/constants"
import { toUint8Array } from "@/utils"

const VERSION = 1 as const
const SALT_LEN = 16
const IV_LEN = 12

const importPasswordKey = (password: ArrayBuffer): Promise<CryptoKey> => {
  return crypto.subtle.importKey("raw", password, "PBKDF2", false, ["deriveKey"])
}

const deriveAESKey = (
  passwordKey: CryptoKey,
  salt: Uint8Array,
  keyUsage: CryptoKey["usages"],
  iterations = 10000,
): Promise<CryptoKey> => {
  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations,
      hash: "SHA-256",
    },
    passwordKey,
    { name: "AES-GCM", length: 256 },
    false,
    keyUsage,
  )
}

const writeU32BE = (view: DataView, offset: number, value: number) => {
  view.setUint32(offset, value, false)
}

const readU32BE = (view: DataView, offset: number) => view.getUint32(offset, false)

async function encrypt(data: ArrayBuffer, password: ArrayBuffer, iterations = 10000): Promise<ArrayBuffer> {
  try {
    const salt = crypto.getRandomValues(new Uint8Array(SALT_LEN))
    const iv = crypto.getRandomValues(new Uint8Array(IV_LEN))

    const pwdKey = await importPasswordKey(password)
    const aesKey = await deriveAESKey(pwdKey, salt, ["encrypt"], iterations)

    const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, aesKey, data)
    const ct = toUint8Array(ciphertext)

    const totalLen = 1 + 4 + SALT_LEN + IV_LEN + ct.byteLength
    const out = new Uint8Array(totalLen)
    const dv = new DataView(out.buffer)

    let off = 0
    out[off++] = VERSION
    writeU32BE(dv, off, iterations)
    off += 4
    out.set(salt, off)
    off += SALT_LEN
    out.set(iv, off)
    off += IV_LEN
    out.set(ct, off)

    return out.buffer
  } catch (_) {
    throw EncryptError
  }
}

async function decrypt(encrypted: ArrayBuffer, password: ArrayBuffer): Promise<ArrayBuffer> {
  try {
    const buf = toUint8Array(encrypted)
    if (buf.byteLength < 1 + 4 + SALT_LEN + IV_LEN) throw DecryptError

    const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength)
    let off = 0

    const version = buf[off++]
    if (version !== VERSION) throw DecryptError

    const iterations = readU32BE(dv, off)
    off += 4

    const salt = buf.slice(off, off + SALT_LEN)
    off += SALT_LEN
    const iv = buf.slice(off, off + IV_LEN)
    off += IV_LEN
    const ct = buf.slice(off)

    const pwdKey = await importPasswordKey(password)
    const aesKey = await deriveAESKey(pwdKey, salt, ["decrypt"], iterations)

    const plain = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, aesKey, ct)
    return plain
  } catch (_) {
    throw DecryptError
  }
}

export async function putEncrypted(
  namespace: KVNamespace,
  key: string,
  data: ArrayBuffer,
  password: ArrayBuffer,
  iterations = 10000,
  options?: KVNamespacePutOptions,
): Promise<ArrayBuffer> {
  try {
    const encryptedData = await encrypt(data, password, iterations)

    await namespace.put(key, encryptedData, options)

    return encryptedData
  } catch (_) {
    throw EncryptPutError
  }
}

export async function getDecrypted(namespace: KVNamespace, key: string, password: ArrayBuffer): Promise<ArrayBuffer> {
  try {
    const kvEncryptedData = await namespace.get(key, "arrayBuffer")

    if (!kvEncryptedData) throw KeyNotFound

    const decryptedData = await decrypt(kvEncryptedData, password)

    return decryptedData
  } catch (_) {
    throw DecryptGetError
  }
}
