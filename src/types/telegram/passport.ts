export interface PassportFile {
  file_id: string
  file_unique_id: string
  file_size: number
  file_date: number
}

export interface EncryptedCredentials {
  data: string
  hash: string
  secret: string
}

export interface EncryptedPassportElement {
  type: string
  data?: string
  phone_number?: string
  email?: string
  files?: PassportFile[]
  front_side?: PassportFile
  reverse_side?: PassportFile
  selfie?: PassportFile
  translation?: PassportFile[]
  hash: string
}

export interface PassportData {
  data: EncryptedPassportElement[]
  credentials: EncryptedCredentials
}
