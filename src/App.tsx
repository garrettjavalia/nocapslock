import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { CompactRemapBadge } from './components/CompactRemapBadge'
import { DemoPanel } from './components/DemoPanel'
import { GuidePanel } from './components/GuidePanel'
import { HeaderControls } from './components/HeaderControls'
import { KeyPreviewPanel } from './components/KeyPreviewPanel'
import { type GuidePlatformId } from './i18n'
import { type PlatformId } from './components/Keycap'
import {
  defaultLocale,
  detectPreferredLocale,
  getLocaleFromPath,
  getLocalePath,
  messages,
  supportedLocales,
} from './i18n'
import * as styles from './styles/app.css'

type ThemeMode = 'light' | 'dark'
type OsKeyRole = 'Command' | 'Control'

const osRoleMap: Record<PlatformId, OsKeyRole> = {
  mac: 'Command',
  ios: 'Command',
  windows: 'Control',
  linux: 'Control',
  android: 'Control',
  unix: 'Control',
  other: 'Control',
}

const previewPlatforms: Exclude<PlatformId, 'other'>[] = [
  'mac',
  'ios',
  'windows',
  'linux',
  'android',
  'unix',
]
const demoShortcutWindowMs = 1000
const heroKeyCycleIntervalMs = 2000
type DemoShortcutAction = 'a' | 'c' | 'v' | 'x'

function logDemoKeyboardEvent(
  phase: 'keydown' | 'keyup',
  event: KeyboardEvent<HTMLTextAreaElement>,
  capsArmedUntil: number,
) {
  if (!import.meta.env.DEV) {
    return
  }

  console.log(`[demo:${phase}]`, {
    key: event.key,
    code: event.code,
    repeat: event.repeat,
    timeStamp: Math.round(event.timeStamp),
    capsLockModifier: event.getModifierState('CapsLock'),
    armedWindowActive: capsArmedUntil > Date.now(),
    armedWindowRemainingMs: Math.max(0, Math.round(capsArmedUntil - Date.now())),
    selectionStart: event.currentTarget.selectionStart,
    selectionEnd: event.currentTarget.selectionEnd,
  })
}

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
  const [capsHeld, setCapsHeld] = useState(false)
  const [textValue, setTextValue] = useState(messages.en.demoSection.text)
  const [guidePlatform, setGuidePlatform] = useState<GuidePlatformId>('linux')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [keyCycleIndex, setKeyCycleIndex] = useState(0)
  const [captionPlatform, setCaptionPlatform] = useState<PlatformId>('other')
  const [capsArmedUntil, setCapsArmedUntil] = useState(0)
  const capsArmedUntilRef = useRef(0)
  const demoTextareaRef = useRef<HTMLTextAreaElement | null>(null)

  const locale = routeLocale ?? defaultLocale
  const copy = messages[locale]
  const githubUrl = 'https://github.com/garrettjavalia/nocapslock'

  useEffect(() => {
    setPlatform(detectPlatform())
  }, [])

  useEffect(() => {
    setCaptionPlatform(platform)
  }, [platform])

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

    if (platform === 'windows') {
      setGuidePlatform('windows')
      return
    }

    if (platform === 'linux') {
      setGuidePlatform('linux')
      return
    }

    setGuidePlatform('linux')
  }, [platform])

  const animatedKeyLabels = useMemo(() => ['Command', 'Control', 'ESC'], [])
  const recommendedKeyLabel = osRoleMap[captionPlatform]
  const activeKeyLabel = animatedKeyLabels[keyCycleIndex]
  const demoModifierLabel = osRoleMap[platform]
  const activeGuide = copy.guideSection.platforms.find((item) => item.id === guidePlatform) ?? copy.guideSection.platforms.find((item) => item.id === 'linux')!
  const captionParts = copy.keySection.captionTemplate.split(/(\{device\}|\{key\})/g)
  const demoBodyText = copy.demoSection.bodyTemplate.replaceAll('{modifier}', demoModifierLabel)
  const demoInstructionsText = copy.demoSection.instructions.replaceAll('{modifier}', demoModifierLabel)
  const demoRestoreText = copy.demoSection.restoreNote.replaceAll('{modifier}', demoModifierLabel)
  const compactProgress = Math.max(0, Math.min(1, (scrollProgress - 0.42) / 0.38))

  const mastheadStyle = {
    '--hero-opacity': `${Math.max(0, 1 - scrollProgress * 1.15)}`,
    '--compact-opacity': `${compactProgress}`,
    '--surface-opacity': `${compactProgress}`,
  } as CSSProperties

  useEffect(() => {
    const timer = window.setInterval(() => {
      setKeyCycleIndex((current) => (current + 1) % animatedKeyLabels.length)
    }, heroKeyCycleIntervalMs)

    return () => window.clearInterval(timer)
  }, [animatedKeyLabels.length])

  const clearDemoShortcutWindow = () => {
    capsArmedUntilRef.current = 0
    setCapsHeld(false)
    setCapsArmedUntil(0)
  }

  const armDemoShortcutWindow = () => {
    const armedUntil = Date.now() + demoShortcutWindowMs
    capsArmedUntilRef.current = armedUntil
    setCapsHeld(true)
    setCapsArmedUntil(armedUntil)
  }

  useEffect(() => {
    if (!capsArmedUntil) {
      return
    }

    const remaining = capsArmedUntil - Date.now()
    if (remaining <= 0) {
      clearDemoShortcutWindow()
      return
    }

    const timeout = window.setTimeout(() => {
      clearDemoShortcutWindow()
    }, remaining)

    return () => window.clearTimeout(timeout)
  }, [capsArmedUntil])

  const runDeferredDemoShortcut = async (
    action: DemoShortcutAction,
    snapshot: { value: string; start: number; end: number },
  ) => {
    const textarea = demoTextareaRef.current
    if (!textarea) {
      return
    }

    const selectedText = snapshot.value.slice(snapshot.start, snapshot.end)

    try {
      if (action === 'a') {
        setTextValue(snapshot.value)
        window.requestAnimationFrame(() => {
          textarea.focus()
          textarea.setSelectionRange(0, snapshot.value.length)
        })
        return
      }

      if (action === 'c') {
        await navigator.clipboard.writeText(selectedText || snapshot.value)
        setTextValue(snapshot.value)
        window.requestAnimationFrame(() => {
          textarea.focus()
          textarea.setSelectionRange(snapshot.start, snapshot.end)
        })
        return
      }

      if (action === 'x') {
        await navigator.clipboard.writeText(selectedText || snapshot.value)
        const nextValue =
          snapshot.value.slice(0, snapshot.start) + snapshot.value.slice(snapshot.end)
        setTextValue(nextValue)
        window.requestAnimationFrame(() => {
          textarea.focus()
          textarea.setSelectionRange(snapshot.start, snapshot.start)
        })
        return
      }

      if (action === 'v') {
        const pasted = await navigator.clipboard.readText()
        const nextValue = `${snapshot.value.slice(0, snapshot.start)}${pasted}${snapshot.value.slice(snapshot.end)}`
        const nextCursor = snapshot.start + pasted.length
        setTextValue(nextValue)
        window.requestAnimationFrame(() => {
          textarea.focus()
          textarea.setSelectionRange(nextCursor, nextCursor)
        })
      }
    } catch {
      setTextValue(snapshot.value)
      window.requestAnimationFrame(() => {
        textarea.focus()
        textarea.setSelectionRange(snapshot.start, snapshot.end)
      })
    }
  }

  const handleDemoKeyDown = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    logDemoKeyboardEvent('keydown', event, capsArmedUntilRef.current)

    if (event.key === 'CapsLock' || event.code === 'CapsLock') {
      armDemoShortcutWindow()
      event.preventDefault()
      return
    }

    const capsModifierActive = capsArmedUntilRef.current > Date.now()
    const codeToActionMap: Record<string, 'a' | 'c' | 'v' | 'x'> = {
      KeyA: 'a',
      KeyC: 'c',
      KeyV: 'v',
      KeyX: 'x',
    }
    const key = codeToActionMap[event.code]
    if (!capsModifierActive) {
      return
    }

    event.preventDefault()

    if (!key) {
      clearDemoShortcutWindow()
      return
    }

    const snapshot = {
      value: event.currentTarget.value,
      start: event.currentTarget.selectionStart,
      end: event.currentTarget.selectionEnd,
    }

    window.setTimeout(() => {
      void runDeferredDemoShortcut(key, snapshot)
    }, 0)

    clearDemoShortcutWindow()
  }

  const handleDemoKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    logDemoKeyboardEvent('keyup', event, capsArmedUntilRef.current)

    if (event.key === 'CapsLock' || event.code === 'CapsLock') {
      armDemoShortcutWindow()
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
        <header className={styles.masthead} style={mastheadStyle}>
          <div className={styles.mastheadSurface}>
            <div className={styles.mastheadTop}>
              <div className={styles.mastheadTitles}>
                <CompactRemapBadge label={copy.heroTitle} platform={platform} />
              </div>

              <HeaderControls
                githubLabel={copy.githubLabel}
                githubUrl={githubUrl}
                locale={locale}
                localeSwitcherLabel={copy.localeSwitcherLabel}
                navigate={navigate}
                setTheme={setTheme}
                theme={theme}
                themeToggleLabel={theme === 'light' ? copy.themeToggle.dark : copy.themeToggle.light}
              />
            </div>
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1 className={`${styles.heroTitle} ${styles.heroTitleFloating}`}>{copy.heroTitle}</h1>
          </div>
        </section>

        <section className={styles.heroLeadSection}>
          <p className={styles.heroLead}>{copy.heroLead}</p>
        </section>

        <main className={styles.contentGrid}>
          <KeyPreviewPanel
            title={copy.keySection.title}
            kicker={copy.keySection.kicker}
            guideTitle={copy.guideSection.title}
            platform={platform}
            activeKeyLabel={activeKeyLabel}
            recommendedKeyLabel={recommendedKeyLabel}
            captionPlatform={captionPlatform}
            previewPlatforms={previewPlatforms}
            deviceLabels={copy.keySection.deviceLabels}
            captionParts={captionParts}
            onCaptionPlatformChange={setCaptionPlatform}
          />

          <DemoPanel
            title={copy.demoSection.title}
            kicker={copy.demoSection.kicker}
            bodyText={demoBodyText}
            platform={platform}
            demoModifierLabel={demoModifierLabel}
            virtualModifierPrefix={copy.demoSection.virtualModifierPrefix}
            statusPrefix={copy.demoSection.statusPrefix}
            statusIdle={copy.demoSection.statusIdle}
            statusArmed={copy.demoSection.statusArmed}
            instructionsText={demoInstructionsText}
            restoreText={demoRestoreText}
            textValue={textValue}
            capsHeld={capsHeld}
            textareaRef={demoTextareaRef}
            onChange={setTextValue}
            onKeyDown={handleDemoKeyDown}
            onKeyUp={handleDemoKeyUp}
            onBlur={clearDemoShortcutWindow}
          />

          <GuidePanel
            copy={copy.guideSection}
            activeGuide={activeGuide}
            guidePlatform={guidePlatform}
            onGuidePlatformChange={setGuidePlatform}
          />
        </main>
      </div>
    </>
  )
}
