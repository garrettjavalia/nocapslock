import type { PlatformId } from './Keycap'
export { getRecommendedPreviewPlatform } from '../../platformRecommendations'

export type ShortcutRoleLabel = 'Command' | 'Control'

export const previewPlatforms: Exclude<PlatformId, 'other'>[] = [
  'mac',
  'ios',
  'windows',
  'linux',
  'android',
  'unix',
]

export function getShortcutRole(platform: PlatformId): ShortcutRoleLabel {
  return platform === 'mac' || platform === 'ios' ? 'Command' : 'Control'
}
