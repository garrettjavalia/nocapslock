import { deDeTranslation } from './de-DE'
import { enUsTranslation } from './en-US'
import { esEsTranslation } from './es-ES'
import { frFrTranslation } from './fr-FR'
import { jaJpTranslation } from './ja-JP'
import { koKrTranslation } from './ko-KR'
import { ptBrTranslation } from './pt-BR'
import type { Locale, TranslationMessages } from './schema'

export const resources = {
  'en-US': {
    translation: enUsTranslation,
  },
  'ko-KR': {
    translation: koKrTranslation,
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
