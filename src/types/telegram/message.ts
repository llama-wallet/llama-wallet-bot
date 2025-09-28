import { ChatBackground } from "./background"
import {
  Chat,
  ChatBoostAdded,
  ChatShared,
  VideoChatEnded,
  VideoChatParticipantsInvited,
  VideoChatScheduled,
  VideoChatStarted,
} from "./chat"
import {
  ForumTopicClosed,
  ForumTopicCreated,
  ForumTopicEdited,
  ForumTopicReopened,
  GeneralForumTopicHidden,
  GeneralForumTopicUnhidden,
} from "./forum"
import { Game } from "./game"
import { Giveaway, GiveawayCompleted, GiveawayCreated, GiveawayWinners } from "./giveaway"
import { InlineKeyboardMarkup } from "./keyboard"
import { Animation, Audio, Document, PhotoSize, Story, Video, VideoNote, Voice } from "./media"
import { Contact, Dice, Location, ProximityAlertTriggered, Venue } from "./misc"
import { PaidMediaInfo } from "./paid-media"
import { PassportData } from "./passport"
import { Invoice, RefundedPayment, SuccessfulPayment } from "./payments"
import { Poll } from "./poll"
import { Sticker } from "./sticker"
import { User, UsersShared, WriteAccessAllowed } from "./user"
import { WebAppData } from "./webapp"

export interface MessageOriginUser {
  type: "user"
  date: number
  sender_user: User
}

export interface MessageOriginHiddenUser {
  type: "hidden_user"
  date: number
  sender_user_name: string
}

export interface MessageOriginChat {
  type: "chat"
  date: number
  sender_chat: Chat
  author_signature?: string
}

export interface MessageOriginChannel {
  type: "channel"
  date: number
  chat: Chat
  message_id: number
  author_signature?: string
}

export type MessageOrigin = MessageOriginUser | MessageOriginHiddenUser | MessageOriginChat | MessageOriginChannel

export interface LinkPreviewOptions {
  is_disabled?: boolean
  url?: string
  prefer_small_media?: boolean
  prefer_large_media?: boolean
  show_above_text?: boolean
}

interface ExternalReplyInfo {
  origin: MessageOrigin
  chat?: Chat
  message_id?: number
  link_preview_options?: LinkPreviewOptions
  animation?: Animation
  audio?: Audio
  document?: Document
  paid_media?: PaidMediaInfo
  photo?: PhotoSize[]
  sticker?: Sticker
  story?: Story
  video?: Video
  video_note?: VideoNote
  voice?: Voice
  has_media_spoiler?: boolean
  contact?: Contact
  dice?: Dice
  game?: Game
  giveaway?: Giveaway
  giveaway_winners?: GiveawayWinners
  invoice?: Invoice
  location?: Location
  poll?: Poll
  venue?: Venue
}

export interface MessageEntity {
  type:
    | "mention"
    | "hashtag"
    | "cashtag"
    | "bot_command"
    | "url"
    | "email"
    | "phone_number"
    | "bold"
    | "italic"
    | "underline"
    | "strikethrough"
    | "spoiler"
    | "blockquote"
    | "expandable_blockquote"
    | "code"
    | "pre"
    | "text_link"
    | "text_mention"
    | "custom_emoji"
  offset: number
  length: number
  url?: string
  user?: User
  language?: string
  custom_emoji_id?: string
}

export interface TextQuote {
  text: string
  entities?: MessageEntity[]
  position: number
  is_manual?: true
}

export interface InaccessibleMessage {
  chat: Chat
  message_id: number
  date: 0
}

export interface MessageAutoDeleteTimerChanged {
  message_auto_delete_time: number
}

export type MaybeInaccessibleMessage = Message | InaccessibleMessage

export interface Message {
  message_id: number
  message_thread_id?: number
  from?: User
  sender_chat?: Chat
  sender_boost_count?: number
  sender_business_bot?: User
  date: number
  business_connection_id?: string
  chat: Chat
  forward_origin?: MessageOrigin
  is_topic_message?: true
  is_automatic_forward?: true
  reply_to_message?: Message
  external_reply?: ExternalReplyInfo
  quote?: TextQuote
  reply_to_story?: Story
  via_bot?: User
  edit_date?: number
  has_protected_content?: true
  is_from_offline?: true
  media_group_id?: string
  author_signature?: string
  text?: string
  entities?: MessageEntity[]
  link_preview_options?: LinkPreviewOptions
  effect_id?: string
  animation?: Animation
  audio?: Audio
  document?: Document
  paid_media?: PaidMediaInfo
  photo?: PhotoSize[]
  sticker?: Sticker
  story?: Story
  video?: Video
  video_note?: VideoNote
  voice?: Voice
  caption?: string
  caption_entities?: MessageEntity
  show_caption_above_media?: true
  has_media_spoiler?: true
  contact?: Contact
  dice?: Dice
  game?: Game
  poll?: Poll
  venue?: Venue
  location?: Location
  new_chat_members?: User[]
  left_chat_member?: User
  new_chat_title?: string
  new_chat_photo?: PhotoSize[]
  delete_chat_photo?: true
  group_chat_created?: true
  supergroup_chat_created?: true
  channel_chat_created?: true
  message_auto_delete_timer_changed?: MessageAutoDeleteTimerChanged
  migrate_to_chat_id?: number
  migrate_from_chat_id?: number
  pinned_message?: MaybeInaccessibleMessage
  invoice?: Invoice
  successful_payment?: SuccessfulPayment
  refunded_payment?: RefundedPayment
  users_shared?: UsersShared
  chat_shared?: ChatShared
  connected_website?: string
  write_access_allowed?: WriteAccessAllowed
  passport_data?: PassportData
  proximity_alert_triggered?: ProximityAlertTriggered
  boost_added?: ChatBoostAdded
  chat_background_set?: ChatBackground
  forum_topic_created?: ForumTopicCreated
  forum_topic_edited?: ForumTopicEdited
  forum_topic_closed?: ForumTopicClosed
  forum_topic_reopened?: ForumTopicReopened
  general_forum_topic_hidden?: GeneralForumTopicHidden
  general_forum_topic_unhidden?: GeneralForumTopicUnhidden
  giveaway_created?: GiveawayCreated
  giveaway?: Giveaway
  giveaway_winners?: GiveawayWinners
  giveaway_completed?: GiveawayCompleted
  video_chat_scheduled?: VideoChatScheduled
  video_chat_started?: VideoChatStarted
  video_chat_ended?: VideoChatEnded
  video_chat_participants_invited?: VideoChatParticipantsInvited
  web_app_data?: WebAppData
  reply_markup?: InlineKeyboardMarkup
}
