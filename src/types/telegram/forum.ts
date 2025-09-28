export interface ForumTopicCreated {
  name: string
  icon_color: number
  icon_custom_emoji_id?: string
}

export interface ForumTopicEdited {
  name?: string
  icon_custom_emoji_id?: string
}

export interface ForumTopicClosed {}

export interface ForumTopicReopened {}

export interface GeneralForumTopicHidden {}

export interface GeneralForumTopicUnhidden {}
