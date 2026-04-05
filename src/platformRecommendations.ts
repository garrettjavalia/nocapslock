import type { PlatformId } from './components/Keycap'
import type { GuidePlatformId } from './i18n/schema'

export function getRecommendedGuidePlatform(platform: PlatformId): GuidePlatformId | null {
  if (platform === 'windows' || platform === 'android') return 'windows'
  if (platform === 'mac' || platform === 'ios') return 'mac'
  if (platform === 'linux' || platform === 'unix') return 'linux'
  return null
}

export function getRecommendedPreviewPlatform(platform: PlatformId): PlatformId {
  if (platform === 'android') return 'windows'
  if (platform === 'ios') return 'mac'
  if (platform === 'unix') return 'linux'
  return platform
}
