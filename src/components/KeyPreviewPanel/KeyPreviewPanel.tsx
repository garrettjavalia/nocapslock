import { Keycap, type PlatformId } from '../Keycap'
import * as styles from '../../styles/app.css'

type KeyPreviewPanelProps = {
  title: string
  kicker: string
  guideTitle: string
  platform: PlatformId
  activeKeyLabel: string
  recommendedKeyLabel: 'Command' | 'Control'
  captionPlatform: PlatformId
  previewPlatforms: Exclude<PlatformId, 'other'>[]
  deviceLabels: Record<Exclude<PlatformId, 'other'> | 'other', string>
  captionParts: string[]
  onCaptionPlatformChange: (platform: PlatformId) => void
}

export function KeyPreviewPanel({
  title,
  kicker,
  guideTitle,
  platform,
  activeKeyLabel,
  recommendedKeyLabel,
  captionPlatform,
  previewPlatforms,
  deviceLabels,
  captionParts,
  onCaptionPlatformChange,
}: KeyPreviewPanelProps) {
  return (
    <section className={`${styles.panel} ${styles.keyStage}`} aria-labelledby="hero-key-title">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionKicker}>{kicker}</p>
        <h2 id="hero-key-title" className={styles.sectionTitle}>
          {title}
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
                  aria-label={guideTitle}
                >
                  {previewPlatforms.map((item) => (
                    <option key={item} value={item}>
                      {deviceLabels[item]}
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
