import { GlobeIcon, MarkGithubIcon } from '@primer/octicons-react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { useState, type CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import { getGuidePath } from '../../guides'
import { AdaptiveShareLinkButton, LinkIcon, ShareIcon } from '../CopyLink'
import { localeLabels, supportedLocales, type Locale } from '../../i18n'
import * as styles from './HeaderControls.css'

type ThemeMode = 'light' | 'dark'

type HeaderControlsProps = {
  githubUrl: string
  locale: Locale
  onLocaleChange: (locale: Locale) => void
  onThemeToggle: () => void
  theme: ThemeMode
}

export function HeaderControls({
  githubUrl,
  locale,
  onLocaleChange,
  onThemeToggle,
  theme,
}: HeaderControlsProps) {
  const [isLocaleMenuOpen, setIsLocaleMenuOpen] = useState(false)
  const { t } = useTranslation()
  const localeSwitcherLabel = t('chrome.language')
  const localeRootLinkLabel = t('chrome.localeRootLink')
  const githubLabel = t('chrome.github')
  const themeToggleLabel = theme === 'light' ? t('theme.dark') : t('theme.light')
  const localeTriggerLabel = `${localeSwitcherLabel}: ${localeLabels[locale]}`

  return (
    <div className={styles.topbarActions}>
      <AdaptiveShareLinkButton
        label={localeRootLinkLabel}
        path={getGuidePath(locale)}
        className={styles.iconControl}
        copyChildren={<LinkIcon className={styles.controlIcon} />}
        shareChildren={<ShareIcon className={styles.controlIcon} />}
      >
      </AdaptiveShareLinkButton>

      <a
        className={styles.githubIconLink}
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={githubLabel}
        title={githubLabel}
      >
        <MarkGithubIcon className={styles.controlIcon} size={16} />
      </a>

      <DropdownMenu.Root open={isLocaleMenuOpen} onOpenChange={setIsLocaleMenuOpen} modal={false}>
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            className={styles.localeMenuTrigger}
            aria-label={localeTriggerLabel}
            title={localeTriggerLabel}
          >
            <GlobeIcon className={styles.controlIcon} size={16} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={styles.localeMenuContent}
            align="end"
            sideOffset={10}
            collisionPadding={16}
            loop
          >
            <DropdownMenu.Label className={styles.localeMenuHeading}>
              {localeSwitcherLabel}
            </DropdownMenu.Label>

            <DropdownMenu.RadioGroup
              value={locale}
              onValueChange={(nextLocale) => {
                onLocaleChange(nextLocale as Locale)
                setIsLocaleMenuOpen(false)
              }}
            >
              {supportedLocales.map((item) => (
                <DropdownMenu.RadioItem key={item} value={item} className={styles.localeMenuItem}>
                  <span className={styles.localeMenuIndicatorSlot}>
                    <DropdownMenu.ItemIndicator className={styles.localeMenuIndicator}>
                      <CheckIcon className={styles.menuIndicatorIcon} />
                    </DropdownMenu.ItemIndicator>
                  </span>
                  <span className={styles.localeMenuItemLabel}>{localeLabels[item]}</span>
                </DropdownMenu.RadioItem>
              ))}
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <button
        className={styles.themeToggle}
        type="button"
        onClick={onThemeToggle}
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

type CheckIconProps = {
  className?: string
}

function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className}>
      <path
        d="M3.4 8.2 6.5 11l6-6.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
