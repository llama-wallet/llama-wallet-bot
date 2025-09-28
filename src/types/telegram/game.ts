import { Animation, PhotoSize } from "./media"
import { MessageEntity } from "./message"

export interface Game {
  title: string
  description: string
  photo: PhotoSize[]
  text?: string
  text_entities?: MessageEntity[]
  animation?: Animation
}

export interface CallbackGame {}
