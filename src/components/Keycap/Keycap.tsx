import type { ReactNode } from 'react'
import * as styles from './Keycap.css'

export type RemapKey = 'Command' | 'Control' | 'ESC'
export type PlatformId = 'windows' | 'mac' | 'linux' | 'android' | 'ios' | 'unix' | 'other'

type KeycapProps = {
  keyLabel: string
  platform: PlatformId
  mini?: boolean
  miniSize?: 'xs' | 'sm' | 'md'
  selectable?: boolean
  prefixText?: string
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
      <span className={styles.commandGlyphRight} aria-hidden="true">
        {label === 'Command' ? '⌘' : '⌃'}
      </span>
      <span className={styles.commandLabel}>{label === 'Command' ? 'command' : 'control'}</span>
    </div>
  )
}

function renderMini(
  label: string,
  platform: PlatformId,
  crossed?: boolean,
  miniSize: 'xs' | 'sm' | 'md' = 'md',
  selectable = true,
  prefixText?: string,
) {
  const miniKeycapClass =
    miniSize === 'xs'
      ? styles.inlineMiniKeycapXSmall
      : miniSize === 'sm'
        ? styles.inlineMiniKeycapSmall
        : styles.inlineMiniKeycap

  const selectionClass = selectable
    ? styles.inlineMiniKeycapSelectable
    : styles.inlineMiniKeycapNonSelectable

  if (isAppleModifierKeycap(platform, label)) {
    const modifierText = label === 'Command' ? '⌘ command' : '⌃ control'
    const labelText = prefixText ? `${prefixText} ${modifierText}` : modifierText
    const content = (
      <span className={`${miniKeycapClass} ${selectionClass}`} aria-label={`${label} key`}>
        {labelText}
      </span>
    )

    return crossed ? (
      <span className={styles.inlineMiniKeycapWrap}>
        <span className={styles.inlineMiniKeycapCross} />
        {content}
      </span>
    ) : (
      content
    )
  }

  const content = (
    <span className={`${miniKeycapClass} ${selectionClass}`}>
      {prefixText ? `${prefixText} ` : ''}
      {label}
    </span>
  )
  return crossed ? (
    <span className={styles.inlineMiniKeycapWrap}>
      <span className={styles.inlineMiniKeycapCross} />
      {content}
    </span>
  ) : (
    content
  )
}

export function Keycap({
  crossed,
  keyLabel,
  mini = false,
  miniSize = 'md',
  selectable = true,
  prefixText,
  muted = false,
  platform,
  wide = false,
}: KeycapProps) {
  if (mini) {
    return renderMini(keyLabel, platform, crossed, miniSize, selectable, prefixText)
  }

  const classes = [styles.keycap]
  if (muted) classes.push(styles.keycapMuted)

  let content: ReactNode
  if (isAppleModifierKeycap(platform, keyLabel)) {
    content = renderAppleModifier(keyLabel as 'Command' | 'Control')
  } else {
    content = (
      <span
        className={[
          styles.keycapLabel,
          wide ? styles.keycapLabelWide : '',
          crossed ? styles.keycapLabelStatic : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
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
