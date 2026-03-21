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
) {
  const miniKeycapClass =
    miniSize === 'xs'
      ? styles.inlineMiniKeycapXSmall
      : miniSize === 'sm'
        ? styles.inlineMiniKeycapSmall
        : styles.inlineMiniKeycap
  const miniModifierClass =
    miniSize === 'xs'
      ? styles.inlineMiniKeycapCommandXSmall
      : miniSize === 'sm'
        ? styles.inlineMiniKeycapCommandSmall
        : styles.inlineMiniKeycapCommand
  const miniGlyphClass =
    miniSize === 'xs'
      ? styles.inlineMiniCommandGlyphXSmall
      : miniSize === 'sm'
        ? styles.inlineMiniCommandGlyphSmall
        : styles.inlineMiniCommandGlyph
  const miniLabelClass =
    miniSize === 'xs'
      ? styles.inlineMiniCommandLabelXSmall
      : miniSize === 'sm'
        ? styles.inlineMiniCommandLabelSmall
        : styles.inlineMiniCommandLabel

  const selectionClass = selectable
    ? styles.inlineMiniKeycapSelectable
    : styles.inlineMiniKeycapNonSelectable

  if (isAppleModifierKeycap(platform, label)) {
    const content =
      label === 'Command' ? (
        <span className={`${miniModifierClass} ${selectionClass}`} aria-label="Command key">
          <span className={miniGlyphClass} aria-hidden="true">
            ⌘
          </span>
          <span className={miniLabelClass}>command</span>
        </span>
      ) : (
        <span className={`${miniModifierClass} ${selectionClass}`} aria-label="Control key">
          <span className={miniGlyphClass} aria-hidden="true">
            ⌃
          </span>
          <span className={miniLabelClass}>control</span>
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

  const content = <span className={`${miniKeycapClass} ${selectionClass}`}>{label}</span>
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
  muted = false,
  platform,
  wide = false,
}: KeycapProps) {
  if (mini) {
    return renderMini(keyLabel, platform, crossed, miniSize, selectable)
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
