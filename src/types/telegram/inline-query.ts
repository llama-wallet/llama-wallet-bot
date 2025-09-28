import { Location } from "./misc"
import { User } from "./user"

export interface InlineQuery {
  id: string
  from: User
  query: string
  offset: string
  chat_type?: `sender` | "private" | "group" | "supergroup" | "channel"
  location?: Location
}

export interface ChosenInlineResult {
  result_id: string
  from: User
  location?: Location
  inline_message_id?: string
  query: string
}
