import { useTranslation } from 'react-i18next'
import { Keycap, type PlatformId } from '../Keycap'
import { getShortcutRole, previewPlatforms } from '../Keycap/keyRoles'
import * as styles from '../../styles/app.css'

type KeyPreviewPanelProps = {
  platform: PlatformId
  activeKeyLabel: string
  captionPlatform: PlatformId
  onCaptionPlatformChange: (platform: PlatformId) => void
}

export function KeyPreviewPanel({
  platform,
  activeKeyLabel,
  captionPlatform,
  onCaptionPlatformChange,
}: KeyPreviewPanelProps) {
  const { t } = useTranslation()
  const captionParts = t('preview.captionTemplate').split(/(\{device\}|\{key\})/g)
  const recommendedKeyLabel = getShortcutRole(captionPlatform)

  return (
    <section className={`${styles.panel} ${styles.keyStage}`} aria-labelledby="hero-key-title">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionKicker}>{t('preview.kicker')}</p>
        <h2 id="hero-key-title" className={styles.sectionTitle}>
          {t('preview.title')}
        </h2>
      </div>
      <div className={styles.keyRail} aria-hidden="true">
        <div className={styles.keyNarrative}>
          <div className={styles.keyStateColumn}>
            <Keycap crossed keyLabel="Caps Lock" muted platform={platform} />
          </div>

          <div className={styles.keyFlowArrow}>
            <span className={styles.keyFlowDot} />
          </div>

          <div className={styles.keyStateColumn}>
            <Keycap key={`${platform}-${activeKeyLabel}`} keyLabel={activeKeyLabel} platform={platform} wide />
          </div>
        </div>
        <p className={styles.keyCaption}>
          {captionParts.map((part, index) => {
            if (part === '{device}') {
              return (
                <select
                  key={`device-${index}`}
                  className={styles.keyCaptionSelect}
                  value={captionPlatform}
                  onChange={(event) => onCaptionPlatformChange(event.target.value as PlatformId)}
                  aria-label={t('guide.title')}
                >
                  {previewPlatforms.map((item) => (
                    <option key={item} value={item}>
                      {t(`preview.device.${item}`)}
                    </option>
                  ))}
                </select>
              )
            }

            if (part === '{key}') {
              return (
                <Keycap
                  key={`key-${index}`}
                  keyLabel={recommendedKeyLabel}
                  mini
                  platform={captionPlatform}
                />
              )
            }

            return <span key={`text-${index}`}>{part}</span>
          })}
        </p>
      </div>
    </section>
  )
}
