import type { ReactNode } from 'react'
import * as styles from '../styles/app.css'

export type RemapKey = 'Command' | 'Control' | 'ESC'
export type PlatformId = 'windows' | 'mac' | 'linux' | 'android' | 'ios' | 'unix' | 'other'

type KeycapProps = {
  keyLabel: string
  platform: PlatformId
  mini?: boolean
  muted?: boolean
  crossed?: boolean
  wide?: boolean
}

function isAppleModifierKeycap(platform: PlatformId, label: string) {
  return (platform === 'mac' || platform === 'ios') && (label === 'Command' || label === 'Control')
}

function renderAppleModifier(label: 'Command' | 'Control') {
  return (
    <div className={styles.commandKeycap}>
      <span
        className={label === 'Command' ? styles.commandGlyphLeft : styles.commandGlyphRight}
        aria-hidden="true"
      >
        {label === 'Command' ? '⌘' : '⌃'}
      </span>
      <span className={styles.commandLabel}>{label === 'Command' ? 'command' : 'control'}</span>
    </div>
  )
}

function renderMini(label: string, platform: PlatformId) {
  if (isAppleModifierKeycap(platform, label)) {
    return label === 'Command' ? (
      <span className={styles.inlineMiniKeycapCommand} aria-label="Command key">
        <span className={styles.inlineMiniCommandGlyph} aria-hidden="true">
          ⌘
        </span>
        <span className={styles.inlineMiniCommandLabel}>command</span>
      </span>
    ) : (
      <span className={styles.inlineMiniKeycapCommand} aria-label="Control key">
        <span className={styles.inlineMiniCommandGlyph} aria-hidden="true">
          ⌃
        </span>
        <span className={styles.inlineMiniCommandLabel}>control</span>
      </span>
    )
  }

  return <span className={styles.inlineMiniKeycap}>{label}</span>
}

export function Keycap({ crossed, keyLabel, mini = false, muted = false, platform, wide = false }: KeycapProps) {
  if (mini) {
    return renderMini(keyLabel, platform)
  }

  const classes = [styles.keycap]
  if (muted) classes.push(styles.keycapMuted)

  let content: ReactNode
  if (isAppleModifierKeycap(platform, keyLabel)) {
    content = renderAppleModifier(keyLabel as 'Command' | 'Control')
  } else {
    content = (
      <span className={[styles.keycapLabel, wide ? styles.keycapLabelWide : '', crossed ? styles.keycapLabelStatic : ''].filter(Boolean).join(' ')}>
        {keyLabel}
      </span>
    )
  }

  return (
    <div className={classes.join(' ')}>
      {crossed ? <span className={styles.keycapCross} /> : null}
      {content}
    </div>
  )
}
