import { PhotoSize } from "./media"

export interface User {
  id: number
  is_bot: boolean
  first_name: string
  last_name?: string
  username?: string
  language_code?: string
  is_premium?: boolean
  added_to_attachment_menu?: boolean
  can_join_groups?: boolean
  can_read_all_group_messages?: boolean
  supports_inline_queries?: boolean
  can_connect_to_business?: boolean
  has_main_web_app?: boolean
}

export interface SharedUser {
  user_id: number
  first_name?: string
  last_name?: string
  username?: string
  photo?: PhotoSize[]
}

export interface UsersShared {
  request_id: number
  users: SharedUser[]
}

export interface WriteAccessAllowed {
  from_request?: boolean
  web_app_name?: string
  from_attachment_menu?: boolean
}
