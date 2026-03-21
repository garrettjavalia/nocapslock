import type { CSSProperties, Dispatch, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import { getLocalePath, localeLabels, supportedLocales, type Locale } from '../../i18n'
import * as styles from './HeaderControls.css'

type ThemeMode = 'light' | 'dark'

type HeaderControlsProps = {
  githubUrl: string
  locale: Locale
  navigate: (to: string) => void
  setTheme: Dispatch<SetStateAction<ThemeMode>>
  theme: ThemeMode
}

export function HeaderControls({
  githubUrl,
  locale,
  navigate,
  setTheme,
  theme,
}: HeaderControlsProps) {
  const { t } = useTranslation()
  const localeSwitcherLabel = t('chrome.language')
  const githubLabel = t('chrome.github')
  const themeToggleLabel = theme === 'light' ? t('theme.dark') : t('theme.light')

  return (
    <div className={styles.topbarActions}>
      <a className={styles.githubLink} href={githubUrl} target="_blank" rel="noreferrer">
        {githubLabel}
      </a>

      <label className={styles.localeSwitcher}>
        <span className={styles.localeLabel}>{localeSwitcherLabel}</span>
        <select
          className={styles.localeSelect}
          value={locale}
          onChange={(event) => navigate(getLocalePath(event.target.value as Locale))}
          aria-label={localeSwitcherLabel}
        >
          {supportedLocales.map((item) => (
            <option key={item} value={item}>
              {localeLabels[item]}
            </option>
          ))}
        </select>
      </label>

      <button
        className={styles.themeToggle}
        type="button"
        onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
        aria-label={themeToggleLabel}
        title={themeToggleLabel}
      >
        <span className={styles.themeToggleTrack}>
          <span className={styles.themeToggleThumb}>
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.themeIcon}>
                <circle cx="12" cy="12" r="4.5" fill="currentColor" />
                <path
                  d="M12 1.75v3M12 19.25v3M4.75 4.75l2.1 2.1M17.15 17.15l2.1 2.1M1.75 12h3M19.25 12h3M4.75 19.25l2.1-2.1M17.15 6.85l2.1-2.1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={styles.themeIcon}
                style={{ transform: 'translateX(1px)' } as CSSProperties}
              >
                <path
                  d="M16.8 15.8A7 7 0 0 1 8.2 7.2a7.7 7.7 0 1 0 8.6 8.6Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </span>
        </span>
      </button>
    </div>
  )
}
