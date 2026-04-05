import type { Locale } from './schema'
import { resolveSupportedLocale } from './localeDetection'

export function getLocaleFromPath(pathname: string): Locale | null {
  const [, localeSegment = ''] = pathname.split('/')
  return resolveSupportedLocale(localeSegment)
}

export function getLocalePath(locale: Locale): string {
  return `/${locale}/`
}
