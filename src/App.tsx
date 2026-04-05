import {
  useEffect,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { trackPageView } from './analytics'
import { DemoPanel } from './components/DemoPanel'
import { GuidePanel } from './components/GuidePanel'
import { HeroMasthead } from './components/HeroMasthead'
import { KeyPreviewPanel } from './components/KeyPreviewPanel'
import { type PlatformId } from './components/Keycap'
import {
  getGuidePath,
  getRecommendedGuidePlatform,
  type WindowsMethodId,
} from './guides'
import {
  supportedLocales,
  type Locale,
} from './i18n'
import type { GuidePlatformId } from './i18n/schema'
import { siteOrigin } from './site'
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

type AppProps = {
  locale: Locale
  guidePlatform: GuidePlatformId | null
  windowsMethod: WindowsMethodId | null
}

export function App({
  locale,
  guidePlatform,
  windowsMethod,
}: AppProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const [theme, setTheme] = useState<ThemeMode>(readInitialTheme)
  const [platform, setPlatform] = useState<PlatformId>('other')
  const [hasDetectedPlatform, setHasDetectedPlatform] = useState(false)
  const { t } = useTranslation()

  const githubUrl = 'https://github.com/garrettjavalia/nocapslock'

  useEffect(() => {
    setPlatform(detectPlatform())
    setHasDetectedPlatform(true)
  }, [])

  useEffect(() => {
    if (guidePlatform !== null) {
      return
    }

    const nextGuidePlatform = getRecommendedGuidePlatform(platform)
    if (nextGuidePlatform === null) {
      return
    }

    navigate(getGuidePath(locale, nextGuidePlatform), {
      replace: true,
      preventScrollReset: true,
    })
  }, [guidePlatform, locale, navigate, platform])

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
    if (!location.hash) {
      return
    }

    const targetId = decodeURIComponent(location.hash.slice(1))
    let frame = 0
    let timeout = 0
    let attempts = 0

    const scrollToHashTarget = () => {
      const target = document.getElementById(targetId)

      if (target) {
        target.scrollIntoView({ block: 'start' })
        return
      }

      if (attempts >= 8) {
        return
      }

      attempts += 1
      timeout = window.setTimeout(() => {
        frame = window.requestAnimationFrame(scrollToHashTarget)
      }, 80)
    }

    frame = window.requestAnimationFrame(scrollToHashTarget)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timeout)
    }
  }, [location.hash, location.pathname])

  const currentPath = getGuidePath(locale, guidePlatform, windowsMethod)
  const pagePath = `${location.pathname}${location.search}`
  const rootTitle = t('hero.title')
  const guideTitle = guidePlatform === 'windows'
    ? t('guide.windows.title')
    : guidePlatform === 'mac'
      ? t('guide.mac.title')
      : guidePlatform === 'linux'
        ? t('guide.linux.title')
        : null
  const pageTitle = rootTitle
  const analyticsTitle = guidePlatform === null
    ? rootTitle
    : windowsMethod !== null
      ? `${t(`guide.windows.method.${windowsMethod}.title`)} | ${t('guide.windows.title')} | ${rootTitle}`
      : `${guideTitle!} | ${rootTitle}`
  const pageDescription = t('meta.description')
  const shouldTrackPageView = guidePlatform !== null
    || (hasDetectedPlatform && getRecommendedGuidePlatform(platform) === null)

  useEffect(() => {
    if (!shouldTrackPageView) {
      return
    }

    trackPageView({
      path: pagePath,
      title: analyticsTitle,
    })
  }, [analyticsTitle, pagePath, shouldTrackPageView])

  return (
    <>
      <Head>
        <html lang={locale} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={t('meta.keywords')} />
        <link rel="canonical" href={`${siteOrigin}${currentPath}`} />
        {supportedLocales.map((item) => (
          <link
            key={item}
            rel="alternate"
            hrefLang={item}
            href={`${siteOrigin}${getGuidePath(item, guidePlatform, windowsMethod)}`}
          />
        ))}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Head>

      <div className={styles.pageShell}>
        <HeroMasthead
          githubUrl={githubUrl}
          locale={locale}
          onLocaleChange={(nextLocale) => navigate({
            pathname: getGuidePath(nextLocale, guidePlatform, windowsMethod),
            hash: location.hash,
          })}
          onThemeToggle={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
          theme={theme}
        />

        <main className={styles.contentGrid}>
          <KeyPreviewPanel platform={platform} />

          <DemoPanel platform={platform} />

          <GuidePanel locale={locale} guidePlatform={guidePlatform} windowsMethod={windowsMethod} />
        </main>
      </div>
    </>
  )
}
