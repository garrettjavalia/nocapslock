import 'i18next'
import type { defaultLocale } from './shared'
import type { resources } from './resources'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: (typeof resources)[typeof defaultLocale]
  }
}
