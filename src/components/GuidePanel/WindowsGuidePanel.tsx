import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { InlineTransKeycap } from '../Keycap'
import { WindowsRegistryGenerator } from '../WindowsRegistryGenerator'
import * as guideStyles from '../GuideSections/GuideSections.css'
import * as styles from '../../styles/app.css'
import * as comparisonStyles from '../WindowsGuideMethods/WindowsGuideMethods.css'

type WindowsMethodId = 'powertoys' | 'registry'

function WindowsPowerToysGuide() {
  const { t } = useTranslation()
  const keyComponents = { key: <InlineTransKeycap platform="windows" /> }

  return (
    <>
      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.steps')}</p>
        <div className={guideStyles.stepList}>
          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.windows.method.powertoys.steps.step01.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.windows.method.powertoys.steps.step01.body" components={keyComponents} />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.windows.method.powertoys.steps.step02.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.windows.method.powertoys.steps.step02.body" components={keyComponents} />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.windows.method.powertoys.steps.step03.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.windows.method.powertoys.steps.step03.body" components={keyComponents} />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.windows.method.powertoys.steps.step04.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.windows.method.powertoys.steps.step04.body" components={keyComponents} />
            </p>
          </section>
        </div>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.notes')}</p>
        <ul className={guideStyles.notesList}>
          <li className={guideStyles.noteItem}>
            <Trans i18nKey="guide.windows.method.powertoys.note1" components={keyComponents} />
          </li>
          <li className={guideStyles.noteItem}>
            <Trans i18nKey="guide.windows.method.powertoys.note2" components={keyComponents} />
          </li>
        </ul>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.references')}</p>
        <div className={guideStyles.linkList}>
          <a
            className={guideStyles.sourceLink}
            href="https://learn.microsoft.com/en-us/windows/powertoys/install"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.windows.method.powertoys.referenceLabel1')}
          </a>
          <a
            className={guideStyles.sourceLink}
            href="https://learn.microsoft.com/en-us/windows/powertoys/keyboard-manager"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.windows.method.powertoys.referenceLabel2')}
          </a>
        </div>
      </section>
    </>
  )
}

function WindowsRegistryGuide() {
  const { t } = useTranslation()
  const keyComponents = { key: <InlineTransKeycap platform="windows" /> }

  return (
    <>
      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.steps')}</p>
        <div className={guideStyles.stepList}>
          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.windows.method.registry.steps.step01.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.windows.method.registry.steps.step01.body" components={keyComponents} />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.windows.method.registry.steps.step02.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.windows.method.registry.steps.step02.body" components={keyComponents} />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.windows.method.registry.steps.step03.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.windows.method.registry.steps.step03.body" components={keyComponents} />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.windows.method.registry.steps.step04.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.windows.method.registry.steps.step04.body" components={keyComponents} />
            </p>
          </section>
        </div>
      </section>

      <WindowsRegistryGenerator />

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.notes')}</p>
        <ul className={guideStyles.notesList}>
          <li className={guideStyles.noteItem}>
            <Trans i18nKey="guide.windows.method.registry.note1" components={keyComponents} />
          </li>
          <li className={guideStyles.noteItem}>
            <Trans i18nKey="guide.windows.method.registry.note2" components={keyComponents} />
          </li>
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

  return (
    <article className={styles.guideCard}>
      <h3 className={styles.guideCardTitle}>{t('guide.windows.title')}</h3>
      <p className={styles.panelCopy}>
        <Trans i18nKey="guide.windows.summary" components={keyComponents} />
      </p>

      <p className={comparisonStyles.intro}>{t('guide.windows.methodChoiceIntro')}</p>

      <div className={comparisonStyles.comparisonGrid}>
        <button
          type="button"
          className={
            activeMethod === 'powertoys'
              ? `${comparisonStyles.comparisonCard} ${comparisonStyles.comparisonCardActive}`
              : comparisonStyles.comparisonCard
          }
          onClick={() => setActiveMethod('powertoys')}
        >
          <div className={comparisonStyles.comparisonBlock}>
            <h4 className={comparisonStyles.comparisonTitle}>
              {t('guide.windows.method.powertoys.title')}
            </h4>
            <p className={comparisonStyles.comparisonSummary}>
              <Trans i18nKey="guide.windows.method.powertoys.summary" components={keyComponents} />
            </p>
          </div>

          <div className={comparisonStyles.comparisonBlock}>
            <p className={comparisonStyles.comparisonLabel}>{t('guide.windows.method.prosLabel')}</p>
            <ul className={comparisonStyles.bulletList}>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.powertoys.pro1" components={keyComponents} />
              </li>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.powertoys.pro2" components={keyComponents} />
              </li>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.powertoys.pro3" components={keyComponents} />
              </li>
            </ul>
          </div>

          <div className={comparisonStyles.comparisonBlock}>
            <p className={comparisonStyles.comparisonLabel}>{t('guide.windows.method.consLabel')}</p>
            <ul className={comparisonStyles.bulletList}>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.powertoys.con1" components={keyComponents} />
              </li>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.powertoys.con2" components={keyComponents} />
              </li>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.powertoys.con3" components={keyComponents} />
              </li>
            </ul>
          </div>
        </button>

        <button
          type="button"
          className={
            activeMethod === 'registry'
              ? `${comparisonStyles.comparisonCard} ${comparisonStyles.comparisonCardActive}`
              : comparisonStyles.comparisonCard
          }
          onClick={() => setActiveMethod('registry')}
        >
          <div className={comparisonStyles.comparisonBlock}>
            <h4 className={comparisonStyles.comparisonTitle}>
              {t('guide.windows.method.registry.title')}
            </h4>
            <p className={comparisonStyles.comparisonSummary}>
              <Trans i18nKey="guide.windows.method.registry.summary" components={keyComponents} />
            </p>
          </div>

          <div className={comparisonStyles.comparisonBlock}>
            <p className={comparisonStyles.comparisonLabel}>{t('guide.windows.method.prosLabel')}</p>
            <ul className={comparisonStyles.bulletList}>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.registry.pro1" components={keyComponents} />
              </li>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.registry.pro2" components={keyComponents} />
              </li>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.registry.pro3" components={keyComponents} />
              </li>
            </ul>
          </div>

          <div className={comparisonStyles.comparisonBlock}>
            <p className={comparisonStyles.comparisonLabel}>{t('guide.windows.method.consLabel')}</p>
            <ul className={comparisonStyles.bulletList}>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.registry.con1" components={keyComponents} />
              </li>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.registry.con2" components={keyComponents} />
              </li>
              <li className={comparisonStyles.bulletItem}>
                <Trans i18nKey="guide.windows.method.registry.con3" components={keyComponents} />
              </li>
            </ul>
          </div>
        </button>
      </div>

      <div className={comparisonStyles.detailStack}>
        {activeMethod === 'powertoys' ? <WindowsPowerToysGuide /> : <WindowsRegistryGuide />}
      </div>
    </article>
  )
}
