import { Chat } from "./chat"

export interface PhotoSize {
  file_id: string
  file_unique_id: string
  width: number
  height: number
  file_size?: number
}

export interface Audio {
  file_id: string
  file_unique_id: string
  duration: number
  performer?: string
  title?: string
  file_name?: string
  mime_type?: string
  file_size?: number
  thumbnail?: PhotoSize
}

export interface Document {
  file_id: string
  file_unique_id: string
  thumbnail?: PhotoSize
  file_name?: string
  mime_type?: string
  file_size?: number
}

export interface Story {
  chat: Chat
  id: number
}

export interface Animation {
  file_id: string
  file_unique_id: string
  width: number
  height: number
  duration: number
  thumbnail?: PhotoSize
  file_name?: string
  mime_type?: string
  file_size?: number
}

export interface File {
  file_id: string
  file_unique_id: string
  file_size?: number
  file_path?: string
}

export interface Video {
  file_id: string
  file_unique_id: string
  width: number
  height: number
  duration: number
  thumbnail?: PhotoSize
  file_name?: string
  mime_type?: string
  file_size?: number
}

export interface VideoNote {
  file_id: string
  file_unique_id: string
  length: number
  duration: number
  thumbnail?: PhotoSize
  file_size?: number
}

export interface Voice {
  file_id: string
  file_unique_id: string
  duration: number
  mime_type?: string
  file_size?: number
}
