import { PhotoSize } from "./media"
import { User } from "./user"

export interface Chat {
  id: number
  type: "private" | "group" | "supergroup" | "channel"
  title?: string
  username?: string
  first_name?: string
  last_name?: string
  is_forum?: true
}

export interface ChatShared {
  request_id: number
  chat_id: number
  title?: string
  username?: string
  photo?: PhotoSize[]
}

export interface ChatBoostAdded {
  boost_count: number
}

export interface VideoChatScheduled {
  start_date: number
}

export interface VideoChatStarted {}

export interface VideoChatEnded {
  duration: number
}

export interface VideoChatParticipantsInvited {
  users: User[]
}

export interface ChatMemberOwner {
  status: "creator"
  user: User
  is_anonymous: boolean
  custom_title?: string
}

export interface ChatInviteLink {
  invite_link: string
  creator: User
  creates_join_request: boolean
  is_primary: boolean
  is_revoked: boolean
  name?: string
  expire_date?: number
  member_limit?: number
  pending_join_request_count?: number
}

export interface ChatMemberAdministrator {
  status: "administrator"
  user: User
  can_be_edited: boolean
  is_anonymous: boolean
  can_manage_chat: boolean
  can_delete_messages: boolean
  can_manage_video_chats: boolean
  can_restrict_members: boolean
  can_promote_members: boolean
  can_change_info: boolean
  can_invite_users: boolean
  can_post_stories: boolean
  can_edit_stories: boolean
  can_delete_stories: boolean
  can_post_messages?: boolean
  can_edit_messages?: boolean
  can_pin_messages?: boolean
  can_manage_topics?: boolean
  custom_title?: string
}

export interface ChatMemberMember {
  status: "member"
  user: User
  until_date?: number
}

export interface ChatMemberRestricted {
  status: "restricted"
  user: User
  is_member: boolean
  can_send_messages: boolean
  can_send_audios: boolean
  can_send_documents: boolean
  can_send_photos: boolean
  can_send_videos: boolean
  can_send_video_notes: boolean
  can_send_voice_notes: boolean
  can_send_polls: boolean
  can_send_other_messages: boolean
  can_add_web_page_previews: boolean
  can_change_info: boolean
  can_invite_users: boolean
  can_pin_messages: boolean
  can_manage_topics: boolean
  until_date: number
}

export interface ChatMemberLeft {
  status: "left"
  user: User
}

export interface ChatMemberBanned {
  status: "kicked"
  user: User
  until_date: number
}

export type ChatMember =
  | ChatMemberOwner
  | ChatMemberAdministrator
  | ChatMemberMember
  | ChatMemberRestricted
  | ChatMemberLeft
  | ChatMemberBanned

export interface ChatMemberUpdated {
  chat: Chat
  from: User
  date: number
  old_chat_member: ChatMember
  new_chat_member: ChatMember
  invite_link?: ChatInviteLink
  via_join_request?: boolean
  via_chat_folder_invite_link?: boolean
}

export interface ChatJoinRequest {
  chat: Chat
  from: User
  user_chat_id: number
  date: number
  bio?: string
  invite_link?: ChatInviteLink
}

export interface ChatBoostSourcePremium {
  source: "premium"
  user: User
}

export interface ChatBoostSourceGiftCode {
  source: "gift_code"
  user: User
}

export interface ChatBoostSourceGiveaway {
  source: "giveaway"
  giveaway_message_id: number
  user?: User
  is_unclaimed?: true
}

export type ChatBoostSource = ChatBoostSourcePremium | ChatBoostSourceGiftCode | ChatBoostSourceGiveaway

export interface ChatBoost {
  boost_id: string
  add_date: number
  expiration_date: number
  source: ChatBoostSource
}

export interface ChatBoostUpdated {
  chat: Chat
  boost: ChatBoost
}

export interface ChatBoostRemoved {
  chat: Chat
  boost_id: string
  remove_date: number
  source: ChatBoostSource
}
