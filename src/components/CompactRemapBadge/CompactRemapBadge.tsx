import { useEffect, useRef, useState } from 'react'
import { Keycap } from '../Keycap'
import * as styles from './CompactRemapBadge.css'
import type { PlatformId, RemapKey } from '../Keycap'

type CompactRemapBadgeProps = {
  label: string
  platform: PlatformId
}

const heroRemapChoices: RemapKey[] = ['Command', 'Control', 'ESC', 'Win', 'Super']

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
    const pool = heroRemapChoices

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
      {displayKey === null ? (
        <Keycap crossed keyLabel="Caps Lock" mini platform={platform} selectable={false} />
      ) : (
        <Keycap keyLabel={displayKey} mini platform={platform} selectable={false} />
      )}
    </button>
  )
}
