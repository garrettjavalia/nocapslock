import { useEffect, useMemo, useState, type KeyboardEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import {
  defaultLocale,
  detectPreferredLocale,
  getLocaleFromPath,
  getLocalePath,
  localeLabels,
  messages,
  supportedLocales,
  type Locale,
} from './i18n'
import * as styles from './styles/app.css'

type ThemeMode = 'light' | 'dark'
type PlatformId = 'windows' | 'mac' | 'linux' | 'other'
type OsKeyRole = 'Command' | 'Control'

const osRoleMap: Record<PlatformId, OsKeyRole> = {
  mac: 'Command',
  windows: 'Control',
  linux: 'Control',
  other: 'Control',
}

function detectPlatform(): PlatformId {
  if (typeof navigator === 'undefined') {
    return 'other'
  }

  const source = `${navigator.userAgent} ${navigator.platform}`.toLowerCase()
  if (source.includes('mac')) return 'mac'
  if (source.includes('win')) return 'windows'
  if (source.includes('linux') || source.includes('x11')) return 'linux'
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
  const [capsHeld, setCapsHeld] = useState(false)
  const [textValue, setTextValue] = useState(messages.en.demoSection.text)
  const [guidePlatform, setGuidePlatform] = useState<'windows' | 'mac' | 'linux'>('windows')

  const locale = routeLocale ?? defaultLocale
  const copy = messages[locale]

  useEffect(() => {
    setPlatform(detectPlatform())
  }, [])

  useEffect(() => {
    setTextValue(copy.demoSection.text)
  }, [copy.demoSection.text])

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

  useEffect(() => {
    if (platform === 'mac') {
      setGuidePlatform('mac')
      return
    }

    if (platform === 'linux') {
      setGuidePlatform('linux')
      return
    }

    setGuidePlatform('windows')
  }, [platform])

  const keyLabels = useMemo(() => {
    const role = osRoleMap[platform]
    return copy.keySection.labels.map((label) => {
      if (label === 'Command' || label === 'Control') {
        return role
      }
      return label
    })
  }, [copy.keySection.labels, platform])

  const [keyLabelIndex, setKeyLabelIndex] = useState(0)

  useEffect(() => {
    const keyTimer = window.setInterval(() => {
      setKeyLabelIndex((current) => (current + 1) % keyLabels.length)
    }, 1800)

    return () => window.clearInterval(keyTimer)
  }, [keyLabels.length])

  const handleDemoKeyDown = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'CapsLock') {
      setCapsHeld(true)
      event.preventDefault()
      return
    }

    if (!capsHeld) {
      return
    }

    const key = event.key.toLowerCase()
    if (!['a', 'c', 'v', 'x'].includes(key)) {
      return
    }

    event.preventDefault()

    const target = event.currentTarget
    if (key === 'a') {
      target.select()
      return
    }

    const selection = target.value.slice(target.selectionStart, target.selectionEnd)

    try {
      if (key === 'c') {
        await navigator.clipboard.writeText(selection || target.value)
        return
      }

      if (key === 'x') {
        await navigator.clipboard.writeText(selection || target.value)
        const nextValue =
          target.value.slice(0, target.selectionStart) + target.value.slice(target.selectionEnd)
        setTextValue(nextValue)
        return
      }

      if (key === 'v') {
        const pasted = await navigator.clipboard.readText()
        const start = target.selectionStart
        const end = target.selectionEnd
        const nextValue = `${target.value.slice(0, start)}${pasted}${target.value.slice(end)}`
        setTextValue(nextValue)
      }
    } catch {
      // Browsers can block clipboard access unless the page is focused and permitted.
    }
  }

  const handleDemoKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'CapsLock') {
      setCapsHeld(false)
      event.preventDefault()
    }
  }

  return (
    <>
      <Head>
        <html lang={locale} />
        <title>{copy.metaTitle}</title>
        <meta name="description" content={copy.metaDescription} />
        <meta name="keywords" content={copy.metaKeywords} />
        <link rel="canonical" href={`https://nocapslock.dev${getLocalePath(locale)}`} />
        {supportedLocales.map((item) => (
          <link
            key={item}
            rel="alternate"
            hrefLang={item}
            href={`https://nocapslock.dev${getLocalePath(item)}`}
          />
        ))}
        <meta property="og:title" content={copy.metaTitle} />
        <meta property="og:description" content={copy.metaDescription} />
      </Head>

      <div className={styles.pageShell}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h1 className={styles.heroTitle}>{copy.heroTitle}</h1>
            <p className={styles.heroLead}>{copy.heroLead}</p>
          </div>

          <div className={styles.heroActions}>
            <label className={styles.localeSwitcher}>
              <span className={styles.localeLabel}>{copy.localeSwitcherLabel}</span>
              <select
                className={styles.localeSelect}
                value={locale}
                onChange={(event) => navigate(getLocalePath(event.target.value as Locale))}
                aria-label={copy.localeSwitcherLabel}
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
              aria-label="Toggle theme"
            >
              <span>{theme === 'light' ? copy.themeToggle.dark : copy.themeToggle.light}</span>
            </button>
          </div>
        </header>

        <main className={styles.contentGrid}>
          <section className={`${styles.panel} ${styles.keyStage}`} aria-labelledby="hero-key-title">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionKicker}>{copy.keySection.kicker}</p>
              <h2 id="hero-key-title" className={styles.sectionTitle}>
                {copy.keySection.title}
              </h2>
            </div>
            <div className={styles.keyRail} aria-hidden="true">
              <div className={styles.keycap}>
                <span key={keyLabels[keyLabelIndex]} className={styles.keycapLabel}>
                  {keyLabels[keyLabelIndex]}
                </span>
              </div>
              <p className={styles.keyCaption}>
                {copy.keySection.caption} <strong>{osRoleMap[platform]}</strong>.
              </p>
            </div>
          </section>

          <section className={styles.panel} aria-labelledby="demo-title">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionKicker}>{copy.demoSection.kicker}</p>
              <h2 id="demo-title" className={styles.sectionTitle}>
                {copy.demoSection.title}
              </h2>
            </div>
            <p className={styles.panelCopy}>
              {copy.demoSection.body.split(/(Caps Lock|A|C|V|X)/g).map((part, index) => {
                if (['Caps Lock', 'A', 'C', 'V', 'X'].includes(part)) {
                  return (
                    <kbd key={`${part}-${index}`} className={styles.keyboardKey}>
                      {part}
                    </kbd>
                  )
                }

                return part
              })}
            </p>
            <textarea
              className={capsHeld ? `${styles.demoTextarea} ${styles.demoTextareaActive}` : styles.demoTextarea}
              value={textValue}
              onChange={(event) => setTextValue(event.target.value)}
              onKeyDown={handleDemoKeyDown}
              onKeyUp={handleDemoKeyUp}
              spellCheck={false}
            />
            <p className={styles.demoHint}>{copy.demoSection.hint}</p>
          </section>

          <section className={styles.panel} aria-labelledby="guide-title">
            <div className={styles.sectionHeading}>
              <p className={styles.sectionKicker}>{copy.guideSection.kicker}</p>
              <h2 id="guide-title" className={styles.sectionTitle}>
                {copy.guideSection.title}
              </h2>
            </div>
            <p className={styles.panelCopy}>{copy.guideSection.intro}</p>
            <div className={styles.guideTabs} role="tablist" aria-label={copy.guideSection.title}>
              {copy.guideSection.platforms.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={guidePlatform === item.id}
                  className={
                    guidePlatform === item.id
                      ? `${styles.guideTab} ${styles.guideTabActive}`
                      : styles.guideTab
                  }
                  onClick={() => setGuidePlatform(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            {copy.guideSection.platforms
              .filter((item) => item.id === guidePlatform)
              .map((item) => (
                <article key={item.id} className={styles.guideCard}>
                  <h3 className={styles.guideCardTitle}>{item.title}</h3>
                  <p className={styles.subduedText}>{item.placeholder}</p>
                </article>
              ))}
          </section>
        </main>
      </div>
    </>
  )
}
