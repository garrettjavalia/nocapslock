import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import type { Locale } from './i18n/schema'
import { resources } from './i18n/resources'
import { defaultLocale, localeLabels, supportedLocales } from './i18n/shared'

export type { GuidePlatformId, Locale } from './i18n/schema'
export { defaultLocale, localeLabels, supportedLocales } from './i18n/shared'
export { resources } from './i18n/resources'

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    supportedLngs: supportedLocales,
    defaultNS: 'translation',
    ns: ['translation'],
    interpolation: {
      escapeValue: false,
    },
  })
}

export const i18nInstance = i18n

export function getLocaleFromPath(pathname: string): Locale | null {
  if (pathname.startsWith('/ko')) return 'ko'
  if (pathname.startsWith('/en')) return 'en'
  return null
}

export function getLocalePath(locale: Locale): string {
  return locale === 'ko' ? '/ko/' : '/en/'
}

export function detectPreferredLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return defaultLocale
  }

  const candidates = [navigator.language, ...(navigator.languages ?? [])]
    .filter(Boolean)
    .map((value) => value.toLowerCase())

  if (candidates.some((value) => value.startsWith('ko'))) return 'ko'
  return 'en'
}
