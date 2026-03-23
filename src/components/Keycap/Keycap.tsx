import type { CSSProperties, ReactNode } from 'react'
import * as styles from './Keycap.css'

export type RemapKey = 'Command' | 'Control' | 'ESC' | 'Win' | 'Super' | 'Meta'
export type PlatformId = 'windows' | 'mac' | 'linux' | 'android' | 'ios' | 'unix' | 'other'
type KeycapSize = 'default' | 'badge'

type KeycapProps = {
  keyLabel: string
  platform: PlatformId
  size?: KeycapSize
  className?: string
  style?: CSSProperties
  mini?: boolean
  miniSize?: 'xs' | 'sm' | 'md'
  selectable?: boolean
  prefixText?: string
  muted?: boolean
  crossed?: boolean
  wide?: boolean
  children?: ReactNode
}

type KeycapFaceProps = {
  keyLabel: string
  platform: PlatformId
  crossed?: boolean
  wide?: boolean
  animated?: boolean
}

function isAppleModifierKeycap(platform: PlatformId, label: string) {
  return (platform === 'mac' || platform === 'ios') && (label === 'Command' || label === 'Control')
}

function renderAppleModifier(label: 'Command' | 'Control', animated = true) {
  return (
    <div className={styles.keycapFace}>
      <div className={styles.appleModifierFace}>
        <span className={styles.appleModifierGlyphRow}>
          <span
            className={[styles.appleModifierGlyph, animated ? '' : styles.keycapFaceStatic]
              .filter(Boolean)
              .join(' ')}
            aria-hidden="true"
          >
            {label === 'Command' ? '⌘' : '⌃'}
          </span>
        </span>
        <span
          className={[styles.appleModifierLabel, animated ? '' : styles.keycapFaceStatic]
            .filter(Boolean)
            .join(' ')}
        >
          {label === 'Command' ? 'command' : 'control'}
        </span>
      </div>
    </div>
  )
}

export function KeycapFace({
  keyLabel,
  platform,
  crossed = false,
  wide = false,
  animated = !crossed,
}: KeycapFaceProps) {
  if (isAppleModifierKeycap(platform, keyLabel)) {
    return renderAppleModifier(keyLabel as 'Command' | 'Control', animated)
  }

  return (
    <span className={styles.keycapFace}>
      <span className={styles.keycapFaceContent}>
        <span
          className={[
            styles.keycapLabel,
            wide ? styles.keycapLabelWide : '',
            animated ? '' : styles.keycapFaceStatic,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {keyLabel}
        </span>
      </span>
    </span>
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
  children,
  className,
  crossed,
  keyLabel,
  size = 'default',
  style,
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
  if (className) classes.push(className)
  if (size === 'badge') classes.push(styles.keycapBadge)
  if (muted) classes.push(styles.keycapMuted)

  const content: ReactNode = children ?? (
    <KeycapFace keyLabel={keyLabel} platform={platform} wide={wide} crossed={crossed} />
  )

  return (
    <div className={classes.join(' ')} style={style}>
      <div className={styles.keycapSurface}>
        {crossed ? <span className={styles.keycapCross} /> : null}
        {content}
      </div>
    </div>
  )
}
