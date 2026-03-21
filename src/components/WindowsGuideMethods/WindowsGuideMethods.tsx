import { useMemo, useState } from 'react'
import { GuideLinksSection, GuideNotesSection, GuideStepsSection, type GuideLink, type GuideStep } from '../GuideSections'
import { GuideRichText } from '../GuideRichText'
import { WindowsRegistryGenerator } from '../WindowsRegistryGenerator'
import * as styles from './WindowsGuideMethods.css'

type WindowsMethodId = 'powertoys' | 'registry'

type WindowsGuideMethodsCopy = {
  intro: string
  prosLabel: string
  consLabel: string
  methods: Array<{
    id: WindowsMethodId
    title: string
    summary: string
    officialLinks?: GuideLink[]
    pros: string[]
    cons: string[]
    steps: GuideStep[]
    notes?: string[]
  }>
}

type SharedGuideLabels = {
  linksLabel: string
  stepsLabel: string
  notesLabel: string
}

type RegistryGeneratorCopy = {
  title: string
  intro: string
  sourceLabel: string
  targetLabel: string
  remapPreviewLabel: string
  revertPreviewLabel: string
  downloadRemapLabel: string
  downloadRevertLabel: string
  noChangesLabel: string
  registryPathLabel: string
  restartNote: string
  resetLabel: string
  keys: {
    capslock: string
    leftCtrl: string
    rightCtrl: string
    leftAlt: string
    rightAlt: string
  }
}

type WindowsGuideMethodsProps = {
  copy: WindowsGuideMethodsCopy
  labels: SharedGuideLabels
  registryGeneratorCopy: RegistryGeneratorCopy
}

export function WindowsGuideMethods({
  copy,
  labels,
  registryGeneratorCopy,
}: WindowsGuideMethodsProps) {
  const [activeMethodId, setActiveMethodId] = useState<WindowsMethodId>('powertoys')
  const activeMethod = useMemo(
    () => copy.methods.find((method) => method.id === activeMethodId) ?? copy.methods[0],
    [activeMethodId, copy.methods],
  )

  return (
    <section className={styles.wrapper}>
      <p className={styles.intro}>{copy.intro}</p>

      <div className={styles.comparisonGrid}>
        {copy.methods.map((method) => (
          <button
            key={method.id}
            type="button"
            className={
              method.id === activeMethodId
                ? `${styles.comparisonCard} ${styles.comparisonCardActive}`
                : styles.comparisonCard
            }
            onClick={() => setActiveMethodId(method.id)}
          >
            <div>
              <h4 className={styles.comparisonTitle}>{method.title}</h4>
              <p className={styles.comparisonSummary}>
                <GuideRichText text={method.summary} platform="windows" />
              </p>
            </div>

            <div>
              <p className={styles.comparisonLabel}>{copy.prosLabel}</p>
              <ul className={styles.bulletList}>
                {method.pros.map((item) => (
                  <li key={item} className={styles.bulletItem}>
                    <GuideRichText text={item} platform="windows" />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className={styles.comparisonLabel}>{copy.consLabel}</p>
              <ul className={styles.bulletList}>
                {method.cons.map((item) => (
                  <li key={item} className={styles.bulletItem}>
                    <GuideRichText text={item} platform="windows" />
                  </li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </div>

      <div className={styles.detailStack}>
        {activeMethod.officialLinks?.length ? (
          <GuideLinksSection label={labels.linksLabel} links={activeMethod.officialLinks} />
        ) : null}

          <GuideStepsSection label={labels.stepsLabel} steps={activeMethod.steps} platform="windows" />

        {activeMethod.id === 'registry' ? (
          <WindowsRegistryGenerator copy={registryGeneratorCopy} />
        ) : null}

        {activeMethod.notes?.length ? (
          <GuideNotesSection label={labels.notesLabel} notes={activeMethod.notes} platform="windows" />
        ) : null}
      </div>
    </section>
  )
}
