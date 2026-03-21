import { useTranslation } from 'react-i18next'
import type { GuidePlatformId } from '../../i18n'
import { LinuxGuidePanel } from './LinuxGuidePanel'
import { MacGuidePanel } from './MacGuidePanel'
import { WindowsGuidePanel } from './WindowsGuidePanel'
import * as styles from '../../styles/app.css'

type GuidePanelProps = {
  guidePlatform: GuidePlatformId
  onGuidePlatformChange: (platform: GuidePlatformId) => void
}

export function GuidePanel({ guidePlatform, onGuidePlatformChange }: GuidePanelProps) {
  const { t } = useTranslation()

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
          onClick={() => onGuidePlatformChange('windows')}
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
          onClick={() => onGuidePlatformChange('mac')}
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
          onClick={() => onGuidePlatformChange('linux')}
        >
          {t('guide.linux.title')}
        </button>
      </div>
      {activeContent}
    </section>
  )
}
