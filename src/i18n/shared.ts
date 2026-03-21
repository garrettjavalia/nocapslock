import type { Locale } from './schema'

export const supportedLocales: Locale[] = ['en', 'ko']

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
}

export const defaultLocale: Locale = 'en'
