import type { KeyboardEvent, RefObject } from 'react'
import { GuideRichText } from '../GuideRichText'
import { Keycap, type PlatformId } from '../Keycap'
import * as styles from '../../styles/app.css'

type DemoPanelProps = {
  title: string
  kicker: string
  bodyText: string
  platform: PlatformId
  demoModifierLabel: 'Command' | 'Control'
  virtualModifierPrefix: string
  statusPrefix: string
  statusIdle: string
  statusArmed: string
  instructionsText: string
  restoreText: string
  textValue: string
  capsHeld: boolean
  textareaRef: RefObject<HTMLTextAreaElement>
  onChange: (value: string) => void
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onKeyUp: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onBlur: () => void
}

export function DemoPanel({
  title,
  kicker,
  bodyText,
  platform,
  demoModifierLabel,
  virtualModifierPrefix,
  statusPrefix,
  statusIdle,
  statusArmed,
  instructionsText,
  restoreText,
  textValue,
  capsHeld,
  textareaRef,
  onChange,
  onKeyDown,
  onKeyUp,
  onBlur,
}: DemoPanelProps) {
  return (
    <section className={styles.panel} aria-labelledby="demo-title">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionKicker}>{kicker}</p>
        <h2 id="demo-title" className={styles.sectionTitle}>
          {title}
        </h2>
      </div>
      <p className={styles.panelCopy}>
        <GuideRichText text={bodyText} platform={platform} />
      </p>
      <div className={styles.demoStatusCard}>
        <p className={styles.demoStatusLine}>
          <Keycap
            keyLabel={demoModifierLabel}
            mini
            miniSize="sm"
            platform={platform}
            prefixText={virtualModifierPrefix}
          />
          <span className={styles.demoStatusPrefix}>{statusPrefix}:</span>
          <span
            className={
              capsHeld ? `${styles.demoStatusBadge} ${styles.demoStatusBadgeActive}` : styles.demoStatusBadge
            }
          >
            {capsHeld ? statusArmed : statusIdle}
          </span>
        </p>
        <p className={styles.demoStatusText}>
          <GuideRichText text={instructionsText} platform={platform} />
        </p>
        <p className={styles.demoRestoreNote}>
          <GuideRichText text={restoreText} platform={platform} />
        </p>
      </div>
      <textarea
        ref={textareaRef}
        className={capsHeld ? `${styles.demoTextarea} ${styles.demoTextareaActive}` : styles.demoTextarea}
        value={textValue}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        readOnly={capsHeld}
        spellCheck={false}
      />
    </section>
  )
}
