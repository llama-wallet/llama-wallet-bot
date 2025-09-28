import { User } from "./user"

export interface Contact {
  phone_number: string
  first_name: string
  last_name?: string
  user_id?: number
  vcard?: string
}

export interface Dice {
  emoji: string
  value: number
}

export interface Location {
  latitude: number
  longitude: number
  horizontal_accuracy?: number
  live_period?: number
  heading?: number
  proximity_alert_radius?: number
}

export interface Venue {
  location: Location
  title: string
  address: string
  foursquare_id?: string
  foursquare_type?: string
  google_place_id?: string
  google_place_type?: string
}

export interface ProximityAlertTriggered {
  traveler: User
  watcher: User
  distance: number
}
