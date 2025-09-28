import { CallbackGame } from "./game"
import { MaybeInaccessibleMessage } from "./message"
import { User } from "./user"
import { WebAppInfo } from "./webapp"

export interface LoginUrl {
  url: string
  forward_text?: string
  bot_username?: string
  request_write_access?: boolean
}

export interface SwitchInlineQueryChosenChat {
  query?: string
  allow_user_chats?: boolean
  allow_bot_chats?: boolean
  allow_group_chats?: boolean
  allow_channel_chats?: boolean
}

export interface InlineKeyboardButton {
  text: string
  url?: string
  callback_data?: string
  web_app?: WebAppInfo
  login_url?: LoginUrl
  switch_inline_query?: string
  switch_inline_query_current_chat?: string
  switch_inline_query_chosen_chat?: SwitchInlineQueryChosenChat
  callback_game?: CallbackGame
  pay?: boolean
}

export interface InlineKeyboardMarkup {
  inline_keyboard: InlineKeyboardButton[][]
}

export interface CallbackQuery {
  id: string
  from: User
  message?: MaybeInaccessibleMessage
  inline_message_id?: string
  chat_instance: string
  data?: string
  game_short_name?: string
}
