import { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { InlineTransKeycap, Keycap, KeycapFace, type PlatformId } from '../Keycap'
import { getShortcutRole, previewPlatforms } from '../Keycap/keyRoles'
import * as styles from '../../styles/app.css'

const heroKeyCycleIntervalMs = 2000
const animatedKeyLabels = ['Command', 'Control', 'ESC'] as const

type KeyPreviewPanelProps = {
  platform: PlatformId
}

type CyclingPreviewKeycapProps = {
  platform: PlatformId
}

function CyclingPreviewKeycap({ platform }: CyclingPreviewKeycapProps) {
  const [keyCycleIndex, setKeyCycleIndex] = useState(0)
  const activeKeyLabel = animatedKeyLabels[keyCycleIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setKeyCycleIndex((current) => (current + 1) % animatedKeyLabels.length)
    }, heroKeyCycleIntervalMs)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <Keycap keyLabel={activeKeyLabel} platform={platform} wide>
      <KeycapFace
        key={`${platform}-${activeKeyLabel}`}
        keyLabel={activeKeyLabel}
        platform={platform}
        wide
      />
    </Keycap>
  )
}

export function KeyPreviewPanel({ platform }: KeyPreviewPanelProps) {
  const { t } = useTranslation()
  const [captionPlatform, setCaptionPlatform] = useState<PlatformId>('other')
  const recommendedKeyLabel = getShortcutRole(captionPlatform)

  useEffect(() => {
    setCaptionPlatform(platform)
  }, [platform])

  return (
    <section className={`${styles.panel} ${styles.keyStage}`} aria-labelledby="hero-key-title">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionKicker}>{t('preview.kicker')}</p>
        <h2 id="hero-key-title" className={styles.sectionTitle}>
          {t('preview.title')}
        </h2>
      </div>
      <div className={styles.keyRail}>
        <div className={styles.keyNarrative}>
          <div className={styles.keyStateColumn}>
            <Keycap crossed keyLabel="Caps Lock" muted platform={platform} />
          </div>

          <div className={styles.keyFlowArrow}>
            <span className={styles.keyFlowDot} />
          </div>

          <div className={styles.keyStateColumn}>
            <CyclingPreviewKeycap platform={platform} />
          </div>
        </div>
        <p className={styles.keyCaption}>
          <Trans
            i18nKey="preview.captionTemplate"
            values={{ recommendedKey: recommendedKeyLabel }}
            components={{
              key: <InlineTransKeycap platform={captionPlatform} />,
              deviceSelect: (
                <select
                  className={styles.keyCaptionSelect}
                  value={captionPlatform}
                  onChange={(event) => setCaptionPlatform(event.target.value as PlatformId)}
                  aria-label={t('guide.title')}
                >
                  {previewPlatforms.map((item) => (
                    <option key={item} value={item}>
                      {t(`preview.device.${item}`)}
                    </option>
                  ))}
                </select>
              ),
            }}
          />
        </p>
      </div>
    </section>
  )
}
