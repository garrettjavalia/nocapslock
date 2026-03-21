import { useEffect, useRef, useState } from 'react'
import * as styles from '../styles/app.css'
import type { PlatformId, RemapKey } from './Keycap'

type CompactRemapBadgeProps = {
  label: string
  platform: PlatformId
}

function getChoices(platform: PlatformId): RemapKey[] {
  if (platform === 'mac' || platform === 'ios') {
    return ['Command', 'Control', 'ESC']
  }

  return ['Control', 'ESC']
}

function renderLabel(key: RemapKey) {
  if (key === 'Command') return '⌘'
  return key
}

export function CompactRemapBadge({ label, platform }: CompactRemapBadgeProps) {
  const [displayKey, setDisplayKey] = useState<RemapKey | null>(null)
  const timerRef = useRef<number | null>(null)
  const stopRef = useRef<number | null>(null)

  useEffect(() => {
    setDisplayKey(null)
  }, [platform])

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      if (stopRef.current) window.clearTimeout(stopRef.current)
    }
  }, [])

  const handleClick = () => {
    const pool = getChoices(platform)

    if (timerRef.current) window.clearInterval(timerRef.current)
    if (stopRef.current) window.clearTimeout(stopRef.current)

    let step = 0
    timerRef.current = window.setInterval(() => {
      setDisplayKey(pool[step % pool.length])
      step += 1
    }, 90)

    stopRef.current = window.setTimeout(() => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      const next = pool[Math.floor(Math.random() * pool.length)]
      setDisplayKey(next)
    }, 760)
  }

  return (
    <button type="button" className={styles.compactHeroBadge} aria-label={label} onClick={handleClick}>
      <span className={styles.compactHeroMiniKeycap}>
        {displayKey === null ? (
          <>
            <span className={styles.compactHeroBadgeCross} />
            <span className={styles.compactHeroBadgeLabel}>Caps Lock</span>
          </>
        ) : (
          <span className={styles.compactHeroBadgeTarget}>{renderLabel(displayKey)}</span>
        )}
      </span>
    </button>
  )
}
