import { getLocalePath, type GuidePlatformId, type Locale } from './i18n'
export { getRecommendedGuidePlatform } from './platformRecommendations'

export type WindowsMethodId = 'powertoys' | 'registry'

export function getGuidePath(
  locale: Locale,
  guidePlatform: GuidePlatformId | null = null,
  windowsMethod: WindowsMethodId | null = null,
): string {
  const localeRoot = getLocalePath(locale)

  if (guidePlatform === null) {
    return localeRoot
  }

  if (guidePlatform === 'windows') {
    if (windowsMethod === null) {
      return `${localeRoot}windows/`
    }

    return `${localeRoot}windows/${windowsMethod}/`
  }

  if (guidePlatform === 'mac') {
    return `${localeRoot}macos/`
  }

  if (guidePlatform === 'hardware') {
    return `${localeRoot}hardware/`
  }

  return `${localeRoot}linux/`
}
