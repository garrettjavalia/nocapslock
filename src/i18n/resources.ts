import { enTranslation } from './en'
import { koTranslation } from './ko'
import type { Locale } from './schema'

export const resources = {
  en: {
    translation: enTranslation,
  },
  ko: {
    translation: koTranslation,
  },
} as const satisfies Record<Locale, { translation: typeof enTranslation }>
