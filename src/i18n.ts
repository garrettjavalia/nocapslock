import { createInstance, type i18n as I18nInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import type { Locale } from './i18n/schema'
import { resources } from './i18n/resources'
import {
  defaultLocale,
  localeLabels,
  localeLanguageAliases,
  supportedLocales,
} from './i18n/shared'

export type { GuidePlatformId, Locale } from './i18n/schema'
export { defaultLocale, localeLabels, supportedLocales } from './i18n/shared'
export { resources } from './i18n/resources'

const supportedLocaleLookup = new Map<string, Locale>(
  supportedLocales.flatMap((locale) => [
    [locale.toLowerCase(), locale] as const,
    ...localeLanguageAliases[locale].map((alias) => [alias.toLowerCase(), locale] as const),
  ]),
)

function resolveSupportedLocale(value: string): Locale | null {
  const normalized = value.trim().toLowerCase()
  if (!normalized) {
    return null
  }

  const exactMatch = supportedLocaleLookup.get(normalized)
  if (exactMatch) {
    return exactMatch
  }

  const languageOnly = normalized.split(/[-_]/)[0]
  return languageOnly ? supportedLocaleLookup.get(languageOnly) ?? null : null
}

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

export function getLocaleFromPath(pathname: string): Locale | null {
  const [, localeSegment = ''] = pathname.split('/')
  return resolveSupportedLocale(localeSegment)
}

export function getLocalePath(locale: Locale): string {
  return `/${locale}/`
}

export function detectPreferredLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return defaultLocale
  }

  const candidates = [navigator.language, ...(navigator.languages ?? [])]
    .filter(Boolean)

  for (const candidate of candidates) {
    const matchedLocale = resolveSupportedLocale(candidate)
    if (matchedLocale !== null) {
      return matchedLocale
    }
  }

  return defaultLocale
}
