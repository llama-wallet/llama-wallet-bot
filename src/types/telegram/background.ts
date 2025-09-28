import { Document } from "./media"

export interface BackgroundFillSolid {
  type: "solid"
  color: number
}

export interface BackgroundFillGradient {
  type: "gradient"
  top_color: number
  bottom_color: number
  rotation_angle: number
}

export interface BackgroundFillFreeformGradient {
  type: "freeform_gradient"
  colors: number[]
}

export type BackgroundFill = BackgroundFillSolid | BackgroundFillGradient | BackgroundFillFreeformGradient

export interface BackgroundTypeFill {
  type: "fill"
  fill: BackgroundFill
  dark_theme_dimming: number
}

export interface BackgroundTypeWallpaper {
  type: "wallpaper"
  document: Document
  dark_theme_dimming: number
  is_blurred?: true
  is_moving?: true
}

interface BackgroundTypePattern {
  type: "pattern"
  document: Document
  fill: BackgroundFill
  intensity: number
  is_inverted?: true
  is_moving?: true
}

export interface BackgroundTypeChatTheme {
  type: "chat_theme"
  theme_name: string
}

export type BackgroundType =
  | BackgroundTypeFill
  | BackgroundTypeWallpaper
  | BackgroundTypePattern
  | BackgroundTypeChatTheme

export interface ChatBackground {
  type: BackgroundType
}
