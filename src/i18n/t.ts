import { messages as enMessages } from './messages/en.js';
import { messages as frMessages } from './messages/fr.js';
import type { MessageKey } from './messages/en.js';
import type { Locale } from './config.js';

const messageMap = {
  en: enMessages,
  fr: frMessages,
} as const;

export function t(key: MessageKey, locale: Locale): string {
  const messages = messageMap[locale];
  return messages[key] || enMessages[key] || key;
}
