import { useEffect, useRef, useState } from 'react'
import { Keycap } from '../Keycap'
import * as styles from './CompactRemapBadge.css'
import type { PlatformId, RemapKey } from '../Keycap'

type HeroBadgeChoice = RemapKey | 'no-caps-lock'

type CompactRemapBadgeProps = {
  label: string
  platform: PlatformId
}

const heroRemapChoices: HeroBadgeChoice[] = [
  'no-caps-lock',
  'Command',
  'Control',
  'ESC',
  'Win',
  'Super',
]

function renderMiniKey(label: string, miniSize: 'xs' | 'sm' | 'md' = 'md', platform: PlatformId = 'other') {
  return <Keycap keyLabel={label} mini miniSize={miniSize} platform={platform} selectable={false} />
}

function renderChoice(choice: HeroBadgeChoice | null) {
  if (choice === null || choice === 'no-caps-lock') {
    return <Keycap crossed keyLabel="Caps Lock" mini platform="other" selectable={false} />
  }

  if (choice === 'Command') {
    return renderMiniKey('Command', 'md', 'mac')
  }

  if (choice === 'Control') {
    return (
      <span className={styles.compactHeroBadgeKeyRow}>
        {renderMiniKey('Control', 'md', 'mac')}
        {renderMiniKey('Ctrl')}
      </span>
    )
  }

  return renderMiniKey(choice)
}

export function CompactRemapBadge({ label, platform }: CompactRemapBadgeProps) {
  const [displayKey, setDisplayKey] = useState<HeroBadgeChoice | null>(null)
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
      {renderChoice(displayKey)}
    </button>
  )
}
