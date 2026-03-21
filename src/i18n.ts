import { enMessages } from './i18n/en'
import { koMessages } from './i18n/ko'
import type { Copy, Locale } from './i18n/schema'
import { defaultLocale, localeLabels, supportedLocales } from './i18n/shared'

export type { Copy, DeviceLabelKey, GuidePlatformId, GuideStep, Locale } from './i18n/schema'
export { defaultLocale, localeLabels, supportedLocales } from './i18n/shared'

export const messages: Record<Locale, Copy> = {
  en: enMessages,
  ko: koMessages,
}

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
