import type { Locale } from './schema'

export const localeDefinitions = {
  'en-US': {
    label: 'English (en-US)',
    languageAliases: ['en'],
  },
  'ko-KR': {
    label: '한국어 (ko-KR)',
    languageAliases: ['ko'],
  },
  'ja-JP': {
    label: '日本語 (ja-JP)',
    languageAliases: ['ja'],
  },
  'es-ES': {
    label: 'Español (es-ES)',
    languageAliases: ['es'],
  },
  'pt-BR': {
    label: 'Português do Brasil (pt-BR)',
    languageAliases: ['pt'],
  },
  'fr-FR': {
    label: 'Français (fr-FR)',
    languageAliases: ['fr'],
  },
  'de-DE': {
    label: 'Deutsch (de-DE)',
    languageAliases: ['de'],
  },
} as const satisfies Record<Locale, { label: string; languageAliases: readonly string[] }>

export const supportedLocales = Object.keys(localeDefinitions) as Locale[]

export const localeLabels = Object.fromEntries(
  Object.entries(localeDefinitions).map(([locale, definition]) => [locale, definition.label]),
) as Record<Locale, string>

export const localeLanguageAliases = supportedLocales.reduce<Record<Locale, readonly string[]>>(
  (aliases, locale) => {
    aliases[locale] = localeDefinitions[locale].languageAliases
    return aliases
  },
  {} as Record<Locale, readonly string[]>,
)

export const defaultLocale: Locale = 'en-US'
