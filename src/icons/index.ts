import { Icon } from "@/models/Icons/Icon.model";

const icons: Icon[] = [
  { name: "biohazard", version: "2.15" },
  { name: "cloud-fog", version: "2.15" },
  { name: "cloud-moon-rain", version: "2.15" },
  { name: "cloud-snow-rain", version: "2.15" },
  { name: "cloud-sun-rain", version: "2.15" },
  { name: "database", version: "2.15" },
  { name: "cloud-moon", version: "2.15" },
  { name: "cloud-rain", version: "2.15" },
  { name: "cloud-snow", version: "2.15" },
  { name: "cloud-sun", version: "2.15" },
  { name: "cloud-thunder", version: "2.15" },
  { name: "cloud-thunder-rain", version: "2.15" },
  { name: "map-marker", version: "2.15" },
  { name: "snowflake", version: "2.15" },

  { name: "calendar-alt", version: "2.14" },
  { name: "image", version: "2.14" },
  { name: "mail", version: "2.14" },
  { name: "mail-unread", version: "2.14" },
  { name: "music", version: "2.14" },
  { name: "notification-disabled", version: "2.14" },
  { name: "wrench", version: "2.14" },
  { name: "anchor", version: "2.14" },
  { name: "calendar", version: "2.14" },
  { name: "map", version: "2.14" },
  { name: "microscope", version: "2.14" },
  { name: "notification", version: "2.14" },
  { name: "phone-alt", version: "2.14" },
  { name: "photos", version: "2.14" },
  { name: "present", version: "2.14" },
  { name: "settings", version: "2.14" },
  { name: "star-add", version: "2.14" },
  { name: "ticket", version: "2.14" },
  { name: "umbrella", version: "2.14" },

  { name: "attachment", version: "2.13" },
  { name: "chat-bubble", version: "2.13" },
  { name: "chat-bubbles", version: "2.13" },
  { name: "cloud-upload", version: "2.13" },
  { name: "hard-drive", version: "2.13" },
  { name: "microphone-muted", version: "2.13" },
  { name: "movie", version: "2.13" },
  { name: "newspaper", version: "2.13" },
  { name: "trashcan-alt", version: "2.13" },
  { name: "upload", version: "2.13" },
  { name: "cloud", version: "2.13" },
  { name: "cloud-download", version: "2.13" },
  { name: "link", version: "2.13" },
  { name: "power", version: "2.13" },
  { name: "printer", version: "2.13" },

  { name: "login", version: "2.12" },
  { name: "logout", version: "2.12" },
  { name: "chevron-down", version: "2.12" },
  { name: "chevron-left", version: "2.12" },
  { name: "chevron-up", version: "2.12" },
  { name: "double-chevron-down", version: "2.12" },
  { name: "double-chevron-left", version: "2.12" },
  { name: "double-chevron-right", version: "2.12" },
  { name: "double-chevron-up", version: "2.12" },
  { name: "arrow-return", version: "2.12" },
  { name: "calculator", version: "2.12" },
  { name: "chevron-right", version: "2.12" },
  { name: "cocktail", version: "2.12" },
  { name: "color-fan", version: "2.12" },
  { name: "fast-backward", version: "2.12" },
  { name: "filter", version: "2.12" },
  { name: "flashlight", version: "2.12" },
  { name: "numpad", version: "2.12" },
  { name: "star", version: "2.12" },
  { name: "fast-forward", version: "2.12" },
  { name: "list-add", version: "2.12" },
  { name: "pause", version: "2.12" },
  { name: "play", version: "2.12" },
  { name: "step-backwards", version: "2.12" },
  { name: "step-forward", version: "2.12" },
  { name: "stop", version: "2.12" },
  { name: "wifi-0", version: "2.12" },

  { name: "chart-stocks", version: "2.11" },
  { name: "clock-simple", version: "2.11" },
  { name: "credit-card", version: "2.11" },
  { name: "dollar", version: "2.11" },
  { name: "globe", version: "2.11" },
  { name: "vehicle-front", version: "2.11" },

  { name: "pin-person", version: "2.10" },
  { name: "band-aid", version: "2.10" },
  { name: "female", version: "2.10" },
  { name: "headphone", version: "2.10" },
  { name: "headset", version: "2.10" },
  { name: "heartbeat", version: "2.10" },
  { name: "heart-broken", version: "2.10" },
  { name: "pin", version: "2.10" },
  { name: "apple", version: "2.10" },
  { name: "exchange", version: "2.10" },
  { name: "exclamation", version: "2.10" },
  { name: "exclamation-circle", version: "2.10" },
  { name: "exclamation-triangle", version: "2.10" },
  { name: "heart-empty", version: "2.10" },
  { name: "male", version: "2.10" },
  { name: "microphone", version: "2.10" },
  { name: "minecraft", version: "2.10" },
  { name: "question-circle", version: "2.10" },
  { name: "question-triangle", version: "2.10" },
  { name: "tesla", version: "2.10" },
  { name: "thermometer-three-quarter", version: "2.10" },
  { name: "barometer", version: "2.10" },
  { name: "thermometer-empty", version: "2.10" },
  { name: "thermometer-full", version: "2.10" },
  { name: "thermometer-half", version: "2.10" },
  { name: "thermometer-quarter", version: "2.10" },

  { name: "key", version: "2.9" },
  { name: "lock-closed", version: "2.9" },
  { name: "lock-opened", version: "2.9" },
  { name: "alarm", version: "2.9" },
  { name: "minus", version: "2.9" },
  { name: "plus", version: "2.9" },
  { name: "segment", version: "2.9" },
  { name: "slider", version: "2.9" },
  { name: "tooltip", version: "2.9" },

  { name: "dice-4", version: "2.8" },
  { name: "dice-5", version: "2.8" },
  { name: "bar", version: "2.8" },
  { name: "bar-progress", version: "2.8" },
  { name: "crosshair", version: "2.8" },
  { name: "dice-1", version: "2.8" },
  { name: "dice-2", version: "2.8" },
  { name: "dice-3", version: "2.8" },
  { name: "dice-6", version: "2.8" },
  { name: "moon", version: "2.8" },
  { name: "peace", version: "2.8" },
  { name: "quote-left", version: "2.8" },
  { name: "repeat", version: "2.8" },
  { name: "sun", version: "2.8" },
  { name: "swap", version: "2.8" },
  { name: "user-circle", version: "2.8" },
  { name: "wifi-1", version: "2.8" },
  { name: "wifi-2", version: "2.8" },
  { name: "wifi-3", version: "2.8" },
  { name: "percentage", version: "2.8" },
  { name: "quote-right", version: "2.8" },

  { name: "camera" },
  { name: "chart-donut" },
  { name: "chart-pie" },
  { name: "chart-radial" },
  { name: "computer" },
  { name: "github" },
  { name: "hockey-sticks" },
  { name: "modal" },
  { name: "phone" },
  { name: "spinner" },
  { name: "tabbar" },
  { name: "toggle" },
  { name: "windows" },
  { name: "amspro" },
  { name: "button" },
  { name: "card" },
  { name: "chart-bar" },
  { name: "chart-empty" },
  { name: "chart-radar" },
  { name: "checkbox" },
  { name: "code" },
  { name: "component" },
  { name: "divider" },
  { name: "download" },
  { name: "hockey-stick" },
  { name: "input" },
  { name: "painting" },
  { name: "table" },
  { name: "arrow-left" },
  { name: "arrow-up-right" },
  { name: "book" },
  { name: "book-p" },
  { name: "book-q" },
  { name: "chart-line" },
  { name: "checkmark" },
  { name: "scale" },
  { name: "sidebar" },
  { name: "todo" },
  { name: "user" },
  { name: "user-active" },
  { name: "user-inactive" },
  { name: "users" },
  { name: "arrow-down" },
  { name: "arrow-down-left" },
  { name: "arrow-down-right" },
  { name: "arrow-up" },
  { name: "arrow-up-left" },
  { name: "bucket" },
  { name: "dot" },
  { name: "dots" },
  { name: "farm" },
  { name: "list" },
  { name: "list-check" },
  { name: "moped-license-plate" },
  { name: "offer" },
  { name: "scale-out" },
  { name: "scale-in" },
  { name: "arrow-right" },
  { name: "at" },
  { name: "circle" },
  { name: "cross" },
  { name: "hashtag" },
  { name: "lens" },
  { name: "list-bullet" },
  { name: "pencil" },
  { name: "questionmark" },
  { name: "reply" },
  { name: "server" },
  { name: "share" },
  { name: "tools" },
  { name: "trashcan" },
  { name: "user-card", version: "2.0" },
  { name: "add", version: "2.0" },
  { name: "checkmark-circle", version: "2.0" },
  { name: "checkmarks", version: "2.0" },
  { name: "cross-circle", version: "2.0" },
  { name: "gears", version: "2.0" },
  { name: "heart", version: "2.0" },
  { name: "house", version: "2.0" },
  { name: "i-circle", version: "2.0" },
  { name: "save", version: "2.0" },
  { name: "stars", version: "2.0" },
  { name: "thunder", version: "2.0" }
];

export default icons;
