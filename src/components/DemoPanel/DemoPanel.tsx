import type { KeyboardEvent, RefObject } from 'react'
import { useTranslation } from 'react-i18next'
import { GuideRichText } from '../GuideRichText'
import { Keycap, type PlatformId } from '../Keycap'
import { getShortcutRole } from '../Keycap/keyRoles'
import * as styles from '../../styles/app.css'

type DemoPanelProps = {
  platform: PlatformId
  textValue: string
  capsHeld: boolean
  textareaRef: RefObject<HTMLTextAreaElement>
  onChange: (value: string) => void
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onKeyUp: (event: KeyboardEvent<HTMLTextAreaElement>) => void
  onBlur: () => void
}

export function DemoPanel({
  platform,
  textValue,
  capsHeld,
  textareaRef,
  onChange,
  onKeyDown,
  onKeyUp,
  onBlur,
}: DemoPanelProps) {
  const { t } = useTranslation()
  const demoModifierLabel = getShortcutRole(platform)
  const bodyText = t('demo.bodyTemplate').replaceAll('{modifier}', demoModifierLabel)
  const instructionsText = t('demo.instructions').replaceAll('{modifier}', demoModifierLabel)
  const restoreText = t('demo.restoreNote').replaceAll('{modifier}', demoModifierLabel)

  return (
    <section className={styles.panel} aria-labelledby="demo-title">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionKicker}>{t('demo.kicker')}</p>
        <h2 id="demo-title" className={styles.sectionTitle}>
          {t('demo.title')}
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
