import { useTranslation } from 'react-i18next'
import { NavLink, type NavLinkRenderProps } from 'react-router-dom'
import { getGuidePath, type WindowsMethodId } from '../../guides'
import type { Locale } from '../../i18n'
import { HardwareGuidePanel } from './HardwareGuidePanel'
import { HardwareGuideNotice } from './HardwareGuideNotice'
import { LinuxGuidePanel } from './LinuxGuidePanel'
import { MacGuidePanel } from './MacGuidePanel'
import { WindowsGuidePanel } from './WindowsGuidePanel'
import * as styles from '../../styles/app.css'
import type { GuidePlatformId } from '../../i18n/schema'

type GuidePanelProps = {
  locale: Locale
  guidePlatform: GuidePlatformId | null
  windowsMethod: WindowsMethodId | null
}

const guideTabs = [
  { id: 'windows', titleKey: 'guide.windows.title', end: false },
  { id: 'mac', titleKey: 'guide.mac.title', end: true },
  { id: 'linux', titleKey: 'guide.linux.title', end: true },
  { id: 'hardware', title: '전용 하드웨어', end: true },
] as const

export function GuidePanel({
  locale,
  guidePlatform,
  windowsMethod,
}: GuidePanelProps) {
  const { t } = useTranslation()

  return (
    <section className={styles.panel} aria-labelledby="guide-title">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionKicker}>{t('guide.kicker')}</p>
        <h2 id="guide-title" className={styles.sectionTitle}>
          {t('guide.title')}
        </h2>
      </div>
      <p className={styles.guideIntro}>{t('guide.intro')}</p>
      <HardwareGuideNotice locale={locale} />
      <div className={styles.guideTabs} role="tablist" aria-label={t('guide.title')}>
        {guideTabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={getGuidePath(locale, tab.id)}
            preventScrollReset
            end={tab.end}
            role="tab"
            aria-selected={guidePlatform === tab.id}
            className={
              ({ isActive }: NavLinkRenderProps) => (
                isActive
                  ? `${styles.guideTab} ${styles.guideTabActive}`
                  : styles.guideTab
              )
            }
          >
            {'titleKey' in tab ? t(tab.titleKey) : tab.title}
          </NavLink>
        ))}
      </div>
      {guidePlatform === null && (
        <article className={styles.guideCard}>
          <p className={styles.panelCopy}>{t('guide.selectionPrompt')}</p>
        </article>
      )}
      {guidePlatform === 'windows' && <WindowsGuidePanel locale={locale} activeMethod={windowsMethod} />}
      {guidePlatform === 'mac' && <MacGuidePanel locale={locale} />}
      {guidePlatform === 'linux' && <LinuxGuidePanel locale={locale} />}
      {guidePlatform === 'hardware' && <HardwareGuidePanel locale={locale} />}
    </section>
  )
}
