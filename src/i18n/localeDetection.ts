import type { Locale } from './schema'
import {
  defaultLocale,
  localeLanguageAliases,
  supportedLocales,
} from './shared'

const supportedLocaleLookup = new Map<string, Locale>(
  supportedLocales.flatMap((locale) => [
    [locale.toLowerCase(), locale] as const,
    ...localeLanguageAliases[locale].map((alias) => [alias.toLowerCase(), locale] as const),
  ]),
)

export function resolveSupportedLocale(value: string): Locale | null {
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

export function detectPreferredLocaleFromCandidates(candidates: readonly string[]): Locale {
  for (const candidate of candidates) {
    const matchedLocale = resolveSupportedLocale(candidate)
    if (matchedLocale !== null) {
      return matchedLocale
    }
  }

  return defaultLocale
}

export function detectPreferredLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return defaultLocale
  }

  const candidates = [navigator.language, ...(navigator.languages ?? [])]
    .filter((candidate): candidate is string => Boolean(candidate))

  return detectPreferredLocaleFromCandidates(candidates)
}

export function detectPreferredLocaleFromAcceptLanguage(headerValue: string | null | undefined): Locale {
  if (!headerValue) {
    return defaultLocale
  }

  const candidates = headerValue
    .split(',')
    .map((entry) => {
      const [languageRange, ...parameters] = entry.split(';')
      const qParameter = parameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.startsWith('q='))
      const qValue = qParameter ? Number.parseFloat(qParameter.slice(2)) : 1

      return {
        locale: languageRange.trim(),
        quality: Number.isFinite(qValue) ? qValue : 0,
      }
    })
    .filter((entry) => entry.locale && entry.quality > 0)
    .sort((left, right) => right.quality - left.quality)
    .map((entry) => entry.locale)

  return detectPreferredLocaleFromCandidates(candidates)
}
