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

export function GuidePanel({ platform }: GuidePanelProps) {
  const { t } = useTranslation()
  const [guidePlatform, setGuidePlatform] = useState<'windows' | 'mac' | 'linux'>('linux')

  useEffect(() => {
    if (platform === 'mac') {
      setGuidePlatform('mac')
      return
    }

    if (platform === 'windows') {
      setGuidePlatform('windows')
      return
    }

    setGuidePlatform('linux')
  }, [platform])

  const activeContent =
    guidePlatform === 'windows' ? (
      <WindowsGuidePanel />
    ) : guidePlatform === 'mac' ? (
      <MacGuidePanel />
    ) : (
      <LinuxGuidePanel />
    )

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
        <button
          type="button"
          role="tab"
          aria-selected={guidePlatform === 'windows'}
          className={
            guidePlatform === 'windows'
              ? `${styles.guideTab} ${styles.guideTabActive}`
              : styles.guideTab
          }
          onClick={() => setGuidePlatform('windows')}
        >
          {t('guide.windows.title')}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={guidePlatform === 'mac'}
          className={
            guidePlatform === 'mac' ? `${styles.guideTab} ${styles.guideTabActive}` : styles.guideTab
          }
          onClick={() => setGuidePlatform('mac')}
        >
          {t('guide.mac.title')}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={guidePlatform === 'linux'}
          className={
            guidePlatform === 'linux'
              ? `${styles.guideTab} ${styles.guideTabActive}`
              : styles.guideTab
          }
          onClick={() => setGuidePlatform('linux')}
        >
          {t('guide.linux.title')}
        </button>
      </div>
      {activeContent}
    </section>
  )
}
