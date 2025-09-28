import { PhotoSize, File } from "./media"

export interface MaskPosition {
  point: "forehead" | "eyes" | "mouth" | "chin"
  x_shift: number
  y_shift: number
  scale: number
}

export interface Sticker {
  file_id: string
  file_unique_id: string
  type: "regular" | "mask" | "custom_emoji"
  width: number
  height: number
  is_animated: boolean
  is_video: boolean
  thumbnail?: PhotoSize
  emoji?: string
  set_name?: string
  premium_animation?: File
  mask_position?: MaskPosition
  custom_emoji_id?: string
  needs_repainting?: true
  file_size?: number
}
