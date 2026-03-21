import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { InlineTransKeycap } from '../Keycap'
import { WindowsRegistryGenerator } from '../WindowsRegistryGenerator'
import * as guideStyles from '../GuideSections/GuideSections.css'
import * as styles from '../../styles/app.css'
import * as comparisonStyles from './WindowsGuidePanel.css'

type WindowsMethodId = 'powertoys' | 'registry'

const windowsMethodIds = ['powertoys', 'registry'] as const

function WindowsPowerToysGuide() {
  const { t } = useTranslation()
  const keyComponents = { key: <InlineTransKeycap platform="windows" /> }
  const steps = ['step01', 'step02', 'step03', 'step04'] as const
  const notes = ['note1', 'note2'] as const
  const references = [
    {
      key: 'referenceLabel1',
      href: 'https://learn.microsoft.com/en-us/windows/powertoys/install',
    },
    {
      key: 'referenceLabel2',
      href: 'https://learn.microsoft.com/en-us/windows/powertoys/keyboard-manager',
    },
  ] as const

  return (
    <>
      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.steps')}</p>
        <div className={guideStyles.stepList}>
          {steps.map((step) => (
            <section key={step} className={guideStyles.stepItem}>
              <h4 className={guideStyles.stepTitle}>
                <Trans
                  i18nKey={`guide.windows.method.powertoys.steps.${step}.title`}
                  components={keyComponents}
                />
              </h4>
              <p className={guideStyles.stepBody}>
                <Trans
                  i18nKey={`guide.windows.method.powertoys.steps.${step}.body`}
                  components={keyComponents}
                />
              </p>
            </section>
          ))}
        </div>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.notes')}</p>
        <ul className={guideStyles.notesList}>
          {notes.map((note) => (
            <li key={note} className={guideStyles.noteItem}>
              <Trans i18nKey={`guide.windows.method.powertoys.${note}`} components={keyComponents} />
            </li>
          ))}
        </ul>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.references')}</p>
        <div className={guideStyles.linkList}>
          {references.map((reference) => (
            <a
              key={reference.key}
              className={guideStyles.sourceLink}
              href={reference.href}
              target="_blank"
              rel="noreferrer"
            >
              {t(`guide.windows.method.powertoys.${reference.key}`)}
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

function WindowsRegistryGuide() {
  const { t } = useTranslation()
  const keyComponents = { key: <InlineTransKeycap platform="windows" /> }
  const steps = ['step01', 'step02', 'step03', 'step04'] as const
  const notes = ['note1', 'note2'] as const

  return (
    <>
      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.steps')}</p>
        <div className={guideStyles.stepList}>
          {steps.map((step) => (
            <section key={step} className={guideStyles.stepItem}>
              <h4 className={guideStyles.stepTitle}>
                <Trans
                  i18nKey={`guide.windows.method.registry.steps.${step}.title`}
                  components={keyComponents}
                />
              </h4>
              <p className={guideStyles.stepBody}>
                <Trans
                  i18nKey={`guide.windows.method.registry.steps.${step}.body`}
                  components={keyComponents}
                />
              </p>
            </section>
          ))}
        </div>
      </section>

      <WindowsRegistryGenerator />

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.notes')}</p>
        <ul className={guideStyles.notesList}>
          {notes.map((note) => (
            <li key={note} className={guideStyles.noteItem}>
              <Trans i18nKey={`guide.windows.method.registry.${note}`} components={keyComponents} />
            </li>
          ))}
        </ul>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.references')}</p>
        <div className={guideStyles.linkList}>
          <a
            className={guideStyles.sourceLink}
            href="https://download.microsoft.com/download/1/6/1/161ba512-40e2-4cc9-843a-923143f3456c/translate.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.windows.method.registry.referenceLabel1')}
          </a>
        </div>
      </section>
    </>
  )
}

export function WindowsGuidePanel() {
  const { t } = useTranslation()
  const [activeMethod, setActiveMethod] = useState<WindowsMethodId>('powertoys')
  const keyComponents = { key: <InlineTransKeycap platform="windows" /> }
  const methodCards = windowsMethodIds.map((method) => ({
    id: method,
    guide: method === 'powertoys' ? <WindowsPowerToysGuide /> : <WindowsRegistryGuide />,
    pros: ['pro1', 'pro2', 'pro3'] as const,
    cons: ['con1', 'con2', 'con3'] as const,
  }))

  return (
    <article className={styles.guideCard}>
      <h3 className={styles.guideCardTitle}>{t('guide.windows.title')}</h3>
      <p className={styles.panelCopy}>
        <Trans i18nKey="guide.windows.summary" components={keyComponents} />
      </p>

      <p className={comparisonStyles.intro}>{t('guide.windows.methodChoiceIntro')}</p>

      <div className={comparisonStyles.comparisonGrid}>
        {methodCards.map((method) => (
          <button
            key={method.id}
            type="button"
            className={
              activeMethod === method.id
                ? `${comparisonStyles.comparisonCard} ${comparisonStyles.comparisonCardActive}`
                : comparisonStyles.comparisonCard
            }
            onClick={() => setActiveMethod(method.id)}
          >
            <div className={comparisonStyles.comparisonBlock}>
              <h4 className={comparisonStyles.comparisonTitle}>
                {t(`guide.windows.method.${method.id}.title`)}
              </h4>
              <p className={comparisonStyles.comparisonSummary}>
                <Trans i18nKey={`guide.windows.method.${method.id}.summary`} components={keyComponents} />
              </p>
            </div>

            <div className={comparisonStyles.comparisonBlock}>
              <p className={comparisonStyles.comparisonLabel}>{t('guide.windows.method.prosLabel')}</p>
              <ul className={comparisonStyles.bulletList}>
                {method.pros.map((item) => (
                  <li key={item} className={comparisonStyles.bulletItem}>
                    <Trans i18nKey={`guide.windows.method.${method.id}.${item}`} components={keyComponents} />
                  </li>
                ))}
              </ul>
            </div>

            <div className={comparisonStyles.comparisonBlock}>
              <p className={comparisonStyles.comparisonLabel}>{t('guide.windows.method.consLabel')}</p>
              <ul className={comparisonStyles.bulletList}>
                {method.cons.map((item) => (
                  <li key={item} className={comparisonStyles.bulletItem}>
                    <Trans i18nKey={`guide.windows.method.${method.id}.${item}`} components={keyComponents} />
                  </li>
                ))}
              </ul>
            </div>
          </button>
        ))}
      </div>

      <div className={comparisonStyles.detailStack}>
        {methodCards.find((method) => method.id === activeMethod)?.guide}
      </div>
    </article>
  )
}
