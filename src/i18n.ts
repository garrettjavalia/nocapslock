import { createInstance, type i18n as I18nInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import type { Locale } from './i18n/schema'
import {
  detectPreferredLocale,
  detectPreferredLocaleFromAcceptLanguage,
  resolveSupportedLocale,
} from './i18n/localeDetection'
import {
  getLocaleFromPath,
  getLocalePath,
} from './i18n/paths'
import { resources } from './i18n/resources'
import {
  defaultLocale,
  localeLabels,
  supportedLocales,
} from './i18n/shared'

export type { GuidePlatformId, Locale } from './i18n/schema'
export { defaultLocale, localeLabels, supportedLocales } from './i18n/shared'
export { resources } from './i18n/resources'
export {
  detectPreferredLocale,
  detectPreferredLocaleFromAcceptLanguage,
  resolveSupportedLocale,
} from './i18n/localeDetection'
export { getLocaleFromPath, getLocalePath } from './i18n/paths'

export function createI18nInstance(locale: Locale): I18nInstance {
  const instance = createInstance()

  void instance.use(initReactI18next).init({
    resources,
    lng: locale,
    fallbackLng: defaultLocale,
    supportedLngs: supportedLocales,
    defaultNS: 'translation',
    ns: ['translation'],
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
  })

  return instance
}
