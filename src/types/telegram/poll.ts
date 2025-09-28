import { Chat } from "./chat"
import { MessageEntity } from "./message"
import { User } from "./user"

export interface PollOption {
  text: string
  text_entities?: MessageEntity[]
  voter_count: number
}

export interface Poll {
  id: string
  question: string
  question_entities?: MessageEntity[]
  options: PollOption[]
  total_voter_count: number
  is_closed: boolean
  is_anonymous: boolean
  type: "regular" | "quiz"
  allows_multiple_answers: boolean
  correct_option_id?: number
  explanation?: string
  explanation_entities?: MessageEntity[]
  open_period?: number
  close_date?: number
}

export interface PollAnswer {
  poll_id: string
  voter_chat?: Chat
  user?: User
  option_ids: number[]
}
