import { useEffect, useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { CompactRemapBadge } from '../CompactRemapBadge'
import { HeaderControls } from '../HeaderControls'
import type { Locale } from '../../i18n'
import * as styles from '../../styles/app.css'

type ThemeMode = 'light' | 'dark'

type HeroMastheadProps = {
  githubUrl: string
  locale: Locale
  onLocaleChange: (locale: Locale) => void
  onThemeToggle: () => void
  theme: ThemeMode
}

export function HeroMasthead({
  githubUrl,
  locale,
  onLocaleChange,
  onThemeToggle,
  theme,
}: HeroMastheadProps) {
  const { t } = useTranslation()
  const [scrollProgress, setScrollProgress] = useState(0)
  const compactProgress = Math.max(0, Math.min(1, (scrollProgress - 0.42) / 0.38))

  useEffect(() => {
    let frame = 0

    const updateProgress = () => {
      frame = 0
      setScrollProgress(Math.max(0, Math.min(1, window.scrollY / 180)))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const mastheadStyle = {
    '--hero-opacity': `${Math.max(0, 1 - scrollProgress * 1.15)}`,
    '--compact-opacity': `${compactProgress}`,
    '--surface-opacity': `${compactProgress}`,
  } as CSSProperties

  return (
    <>
      <div className={styles.heroStickyStack} style={mastheadStyle}>
        <header className={styles.masthead}>
          <div className={styles.mastheadSurface}>
            <div className={styles.mastheadTop}>
              <div className={styles.mastheadTitles}>
                <CompactRemapBadge label={t('hero.title')} />
              </div>

              <HeaderControls
                githubUrl={githubUrl}
                locale={locale}
                onLocaleChange={onLocaleChange}
                onThemeToggle={onThemeToggle}
                theme={theme}
              />
            </div>
          </div>
        </header>
      </div>

      <section className={styles.hero} style={mastheadStyle}>
        <div className={styles.heroCopy}>
          <h1 className={`${styles.heroTitle} ${styles.heroTitleFloating}`}>{t('hero.title')}</h1>
        </div>
      </section>

      <section className={styles.heroLeadSection}>
        <p className={styles.heroLead}>{t('hero.lead')}</p>
      </section>
    </>
  )
}
