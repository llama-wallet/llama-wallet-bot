import { Chat } from "./chat"
import { User } from "./user"

export type ReactionType = ReactionTypeEmoji | ReactionTypeCustomEmoji | ReactionTypePaid

export interface ReactionTypeEmoji {
  type: "emoji"
  emoji: string
}

export interface ReactionTypeCustomEmoji {
  type: "custom_emoji"
  custom_emoji_id: string
}

export interface ReactionTypePaid {
  type: "paid"
}

export interface MessageReactionUpdated {
  chat: Chat
  message_id: number
  user?: User
  actor_chat?: Chat
  date: number
  old_reaction: ReactionType[]
  new_reaction: ReactionType[]
}

export interface ReactionCount {
  type: ReactionType
  total_count: number
}

export interface MessageReactionCountUpdated {
  chat: Chat
  message_id: number
  date: number
  reactions: ReactionCount[]
}
