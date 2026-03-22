import { deDeTranslation } from './de-DE'
import { enTranslation } from './en'
import { esEsTranslation } from './es-ES'
import { frFrTranslation } from './fr-FR'
import { jaJpTranslation } from './ja-JP'
import { koTranslation } from './ko'
import { ptBrTranslation } from './pt-BR'
import type { Locale, TranslationMessages } from './schema'

export const resources = {
  'en-US': {
    translation: enTranslation,
  },
  'ko-KR': {
    translation: koTranslation,
  },
  'ja-JP': {
    translation: jaJpTranslation,
  },
  'es-ES': {
    translation: esEsTranslation,
  },
  'pt-BR': {
    translation: ptBrTranslation,
  },
  'fr-FR': {
    translation: frFrTranslation,
  },
  'de-DE': {
    translation: deDeTranslation,
  },
} as const satisfies Record<Locale, { translation: TranslationMessages }>
