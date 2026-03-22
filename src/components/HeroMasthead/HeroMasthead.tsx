import { useTranslation } from 'react-i18next'
import { CompactRemapBadge } from '../CompactRemapBadge'
import { HeaderControls } from '../HeaderControls'
import type { PlatformId } from '../Keycap'
import type { Locale } from '../../i18n'
import * as styles from '../../styles/app.css'

type ThemeMode = 'light' | 'dark'

type HeroMastheadProps = {
  githubUrl: string
  locale: Locale
  onLocaleChange: (locale: Locale) => void
  onThemeToggle: () => void
  platform: PlatformId
  theme: ThemeMode
}

export function HeroMasthead({
  githubUrl,
  locale,
  onLocaleChange,
  onThemeToggle,
  platform,
  theme,
}: HeroMastheadProps) {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.heroStickyStack}>
        <header className={styles.masthead}>
          <div className={styles.mastheadSurface}>
            <div className={styles.mastheadTop}>
              <div className={styles.mastheadTitles}>
                <CompactRemapBadge label={t('hero.title')} platform={platform} />
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

      <section className={styles.hero}>
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
