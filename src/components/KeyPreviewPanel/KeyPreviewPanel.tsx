import { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { InlineTransKeycap, Keycap, KeycapFace, type PlatformId } from '../Keycap'
import {
  getRecommendedPreviewPlatform,
  getShortcutRole,
  previewPlatforms,
} from '../Keycap/keyRoles'
import * as styles from '../../styles/app.css'

const heroKeyCycleIntervalMs = 2000
const macPreviewKeyLabels = ['Command', 'Control', 'ESC'] as const
const windowsPreviewKeyLabels = ['Win', 'Ctrl', 'ESC'] as const
const linuxPreviewKeyLabels = ['Super', 'Ctrl', 'ESC'] as const

function getAnimatedKeyLabels(platform: PlatformId) {
  if (platform === 'mac' || platform === 'ios') return macPreviewKeyLabels
  if (platform === 'windows' || platform === 'android') return windowsPreviewKeyLabels
  return linuxPreviewKeyLabels
}

type KeyPreviewPanelProps = {
  platform: PlatformId
}

type CyclingPreviewKeycapProps = {
  platform: PlatformId
}

function CyclingPreviewKeycap({ platform }: CyclingPreviewKeycapProps) {
  const [keyCycleIndex, setKeyCycleIndex] = useState(0)
  const animatedKeyLabels = getAnimatedKeyLabels(platform)
  const activeKeyLabel = animatedKeyLabels[keyCycleIndex % animatedKeyLabels.length]

  useEffect(() => {
    setKeyCycleIndex(0)
  }, [platform])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setKeyCycleIndex((current) => (current + 1) % animatedKeyLabels.length)
    }, heroKeyCycleIntervalMs)

    return () => window.clearInterval(timer)
  }, [animatedKeyLabels])

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
  const recommendedPreviewPlatform = getRecommendedPreviewPlatform(platform)
  const recommendedKeyLabel = getShortcutRole(captionPlatform)

  useEffect(() => {
    setCaptionPlatform(recommendedPreviewPlatform)
  }, [recommendedPreviewPlatform])

  return (
    <section className={`${styles.panel} ${styles.keyStage}`} aria-labelledby="hero-key-title">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionKicker}>{t('preview.kicker')}</p>
        <h2 id="hero-key-title" className={styles.sectionTitle}>
          {t('preview.title')}
        </h2>
      </div>
      <div className={styles.keyRail}>
        <div className={styles.keyNarrative} aria-hidden="true">
          <div className={styles.keyStateColumn}>
            <Keycap crossed keyLabel="Caps Lock" muted platform={recommendedPreviewPlatform} />
          </div>

          <div className={styles.keyFlowArrow}>
            <span className={styles.keyFlowDot} />
          </div>

          <div className={styles.keyStateColumn}>
            <CyclingPreviewKeycap platform={recommendedPreviewPlatform} />
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
