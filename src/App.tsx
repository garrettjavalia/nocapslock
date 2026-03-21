import {
  useEffect,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { DemoPanel } from './components/DemoPanel'
import { GuidePanel } from './components/GuidePanel'
import { HeroMasthead } from './components/HeroMasthead'
import { KeyPreviewPanel } from './components/KeyPreviewPanel'
import { type PlatformId } from './components/Keycap'
import {
  defaultLocale,
  detectPreferredLocale,
  getLocaleFromPath,
  getLocalePath,
  supportedLocales,
} from './i18n'
import * as styles from './styles/app.css'

type ThemeMode = 'light' | 'dark'

function detectPlatform(): PlatformId {
  if (typeof navigator === 'undefined') {
    return 'other'
  }

  const source = `${navigator.userAgent} ${navigator.platform}`.toLowerCase()
  if (source.includes('android')) return 'android'
  if (source.includes('iphone') || source.includes('ipad') || source.includes('ipod')) return 'ios'
  if (source.includes('mac')) return 'mac'
  if (source.includes('win')) return 'windows'
  if (source.includes('linux') || source.includes('x11')) return 'linux'
  if (
    source.includes('freebsd') ||
    source.includes('openbsd') ||
    source.includes('netbsd') ||
    source.includes('sunos') ||
    source.includes('aix')
  ) {
    return 'unix'
  }
  return 'other'
}

function readInitialTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const stored = window.localStorage.getItem('nocapslock-theme')
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function App() {
  const location = useLocation()
  const navigate = useNavigate()

  const routeLocale = getLocaleFromPath(location.pathname)
  const [theme, setTheme] = useState<ThemeMode>(readInitialTheme)
  const [platform, setPlatform] = useState<PlatformId>('other')
  const { t, i18n } = useTranslation()

  const locale = routeLocale ?? defaultLocale
  const githubUrl = 'https://github.com/garrettjavalia/nocapslock'

  useEffect(() => {
    setPlatform(detectPlatform())
  }, [])

  useEffect(() => {
    void i18n.changeLanguage(locale)
  }, [i18n, locale])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('nocapslock-theme', theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (event: MediaQueryListEvent) => {
      const stored = window.localStorage.getItem('nocapslock-theme')
      if (stored !== 'light' && stored !== 'dark') {
        setTheme(event.matches ? 'dark' : 'light')
      }
    }

    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  useEffect(() => {
    if (location.pathname !== '/') {
      return
    }

    const preferredLocale = detectPreferredLocale()
    navigate(getLocalePath(preferredLocale), { replace: true })
  }, [location.pathname, navigate])

  return (
    <>
      <Head>
        <html lang={locale} />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <link rel="canonical" href={`https://nocapslock.dev${getLocalePath(locale)}`} />
        {supportedLocales.map((item) => (
          <link
            key={item}
            rel="alternate"
            hrefLang={item}
            href={`https://nocapslock.dev${getLocalePath(item)}`}
          />
        ))}
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
      </Head>

      <div className={styles.pageShell}>
        <HeroMasthead
          githubUrl={githubUrl}
          locale={locale}
          onLocaleChange={(nextLocale) => navigate(getLocalePath(nextLocale))}
          onThemeToggle={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
          platform={platform}
          theme={theme}
        />

        <main className={styles.contentGrid}>
          <KeyPreviewPanel platform={platform} />

          <DemoPanel platform={platform} />

          <GuidePanel platform={platform} />
        </main>
      </div>
    </>
  )
}
