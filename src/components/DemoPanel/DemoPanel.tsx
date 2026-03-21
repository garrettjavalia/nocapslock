import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { InlineTransKeycap, Keycap, type PlatformId } from '../Keycap'
import { getShortcutRole } from '../Keycap/keyRoles'
import * as styles from '../../styles/app.css'

const demoShortcutWindowMs = 1000
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

type DemoPanelProps = {
  platform: PlatformId
}

export function DemoPanel({ platform }: DemoPanelProps) {
  const { t, i18n } = useTranslation()
  const demoModifierLabel = getShortcutRole(platform)
  const [capsHeld, setCapsHeld] = useState(false)
  const [textValue, setTextValue] = useState('')
  const [capsArmedUntil, setCapsArmedUntil] = useState(0)
  const capsArmedUntilRef = useRef(0)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  useEffect(() => {
    setTextValue(t('demo.text'))
  }, [i18n.language, t])

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
    const textarea = textareaRef.current
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

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    logDemoKeyboardEvent('keydown', event, capsArmedUntilRef.current)

    if (event.key === 'CapsLock' || event.code === 'CapsLock') {
      armDemoShortcutWindow()
      event.preventDefault()
      return
    }

    const capsModifierActive = capsArmedUntilRef.current > Date.now()
    const codeToActionMap: Record<string, DemoShortcutAction> = {
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

  const handleKeyUp = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    logDemoKeyboardEvent('keyup', event, capsArmedUntilRef.current)

    if (event.key === 'CapsLock' || event.code === 'CapsLock') {
      armDemoShortcutWindow()
      event.preventDefault()
    }
  }

  return (
    <section className={styles.panel} aria-labelledby="demo-title">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionKicker}>{t('demo.kicker')}</p>
        <h2 id="demo-title" className={styles.sectionTitle}>
          {t('demo.title')}
        </h2>
      </div>
      <p className={styles.panelCopy}>
        <Trans
          i18nKey="demo.bodyTemplate"
          values={{ modifier: demoModifierLabel }}
          components={{ key: <InlineTransKeycap platform={platform} /> }}
        />
      </p>
      <div className={styles.demoStatusCard}>
        <p className={styles.demoStatusLine}>
          <Keycap
            keyLabel={demoModifierLabel}
            mini
            miniSize="sm"
            platform={platform}
            prefixText={t('demo.virtualModifierPrefix')}
          />
          <span className={styles.demoStatusPrefix}>{t('demo.status.prefix')}:</span>
          <span
            className={
              capsHeld ? `${styles.demoStatusBadge} ${styles.demoStatusBadgeActive}` : styles.demoStatusBadge
            }
          >
            {capsHeld ? t('demo.status.armed') : t('demo.status.idle')}
          </span>
        </p>
        <p className={styles.demoStatusText}>
          <Trans
            i18nKey="demo.instructions"
            values={{ modifier: demoModifierLabel }}
            components={{ key: <InlineTransKeycap platform={platform} /> }}
          />
        </p>
        <p className={styles.demoRestoreNote}>
          <Trans
            i18nKey="demo.restoreNote"
            components={{ key: <InlineTransKeycap platform={platform} /> }}
          />
        </p>
      </div>
      <textarea
        ref={textareaRef}
        className={capsHeld ? `${styles.demoTextarea} ${styles.demoTextareaActive}` : styles.demoTextarea}
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onBlur={clearDemoShortcutWindow}
        readOnly={capsHeld}
        spellCheck={false}
      />
    </section>
  )
}
