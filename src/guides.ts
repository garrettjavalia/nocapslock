import type { PlatformId } from './components/Keycap'
import { getLocalePath, type GuidePlatformId, type Locale } from './i18n'

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

  return `${localeRoot}linux/`
}

export function getDefaultGuidePlatform(platform: PlatformId): GuidePlatformId | null {
  if (platform === 'windows') return 'windows'
  if (platform === 'mac' || platform === 'ios') return 'mac'
  if (platform === 'linux' || platform === 'android' || platform === 'unix') return 'linux'
  return null
}
