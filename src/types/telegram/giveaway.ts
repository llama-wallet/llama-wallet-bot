import { Chat } from "./chat"
import { User } from "./user"

export interface Giveaway {
  chats: Chat[]
  winners_selection_date: number
  winner_count: number
  only_new_members?: true
  has_public_winners?: true
  prize_description?: string
  country_codes?: string[]
  premium_subscription_month_count?: number
}

export interface GiveawayWinners {
  chat: Chat
  giveaway_message_id: number
  winners_selection_date: number
  winner_count: number
  winners: User[]
  additional_chat_count?: number
  premium_subscription_month_count?: number
  unclaimed_prize_count?: number
  only_new_members?: true
  was_refunded?: true
  prize_description?: string
}

export interface GiveawayCreated {
  prize_star_count: number
}

export interface GiveawayCompleted {
  winner_count: number
  unclaimed_prize_count?: number
  giveaway_message?: Message
}
