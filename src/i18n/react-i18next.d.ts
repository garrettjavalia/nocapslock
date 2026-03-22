import 'i18next'
import type { TranslationMessages } from './schema'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: TranslationMessages
    }
  }
}
