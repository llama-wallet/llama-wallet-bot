import { PaidMediaVideo } from "@/constants/errors"
import { PhotoSize } from "./media"

export interface PaidMediaPreview {
  type: "preview"
  width?: number
  height?: number
  duration?: number
}

export interface PaidMediaPhoto {
  type: "photo"
  photo: PhotoSize[]
}

export type PaidMedia = PaidMediaPreview | PaidMediaPhoto | PaidMediaVideo

export interface PaidMediaInfo {
  star_count: number
  paid_media: PaidMedia[]
}
