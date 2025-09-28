import { Chat } from "./chat"
import { User } from "./user"

export interface BusinessConnection {
  id: string
  user: User
  user_chat_id: number
  date: number
  can_reply: boolean
  is_enabled: boolean
}

export interface BusinessMessagesDeleted {
  business_connection_id: string
  chat: Chat
  message_ids: number[]
}
