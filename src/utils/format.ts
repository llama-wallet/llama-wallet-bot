export const strToArrayBuffer = (s: string): ArrayBuffer =>
	new TextEncoder().encode(s).buffer as ArrayBuffer;

export const arrayBufferToStr = (b: ArrayBuffer): string =>
	new TextDecoder().decode(new Uint8Array(b));

export const toUint8Array = (buf: ArrayBuffer | Uint8Array): Uint8Array =>
	buf instanceof Uint8Array ? buf : new Uint8Array(buf);
