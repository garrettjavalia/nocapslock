import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { LinuxGuidePanel } from './LinuxGuidePanel'
import { MacGuidePanel } from './MacGuidePanel'
import { WindowsGuidePanel } from './WindowsGuidePanel'
import * as styles from '../../styles/app.css'
import type { PlatformId } from '../Keycap'

type GuidePanelProps = {
  platform: PlatformId
}

const guideTabs = [
  { id: 'windows', titleKey: 'guide.windows.title' },
  { id: 'mac', titleKey: 'guide.mac.title' },
  { id: 'linux', titleKey: 'guide.linux.title' },
] as const

const defaultGuidePlatformByDevice: Record<PlatformId, 'windows' | 'mac' | 'linux'> = {
  android: 'linux',
  ios: 'mac',
  linux: 'linux',
  mac: 'mac',
  other: 'linux',
  unix: 'linux',
  windows: 'windows',
}

export function GuidePanel({ platform }: GuidePanelProps) {
  const { t } = useTranslation()
  const [guidePlatform, setGuidePlatform] = useState<'windows' | 'mac' | 'linux'>('linux')

  useEffect(() => {
    setGuidePlatform(defaultGuidePlatformByDevice[platform])
  }, [platform])

  return (
    <section className={styles.panel} aria-labelledby="guide-title">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionKicker}>{t('guide.kicker')}</p>
        <h2 id="guide-title" className={styles.sectionTitle}>
          {t('guide.title')}
        </h2>
      </div>
      <p className={styles.guideIntro}>{t('guide.intro')}</p>
      <div className={styles.guideTabs} role="tablist" aria-label={t('guide.title')}>
        {guideTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={guidePlatform === tab.id}
            className={
              guidePlatform === tab.id
                ? `${styles.guideTab} ${styles.guideTabActive}`
                : styles.guideTab
            }
            onClick={() => setGuidePlatform(tab.id)}
          >
            {t(tab.titleKey)}
          </button>
        ))}
      </div>
      {guidePlatform === 'windows' && <WindowsGuidePanel />}
      {guidePlatform === 'mac' && <MacGuidePanel />}
      {guidePlatform === 'linux' && <LinuxGuidePanel />}
    </section>
  )
}
