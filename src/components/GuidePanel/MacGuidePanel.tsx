import { useTranslation } from 'react-i18next'
import { GuideRichText } from '../GuideRichText'
import * as guideStyles from '../GuideSections/GuideSections.css'
import * as styles from '../../styles/app.css'

export function MacGuidePanel() {
  const { t } = useTranslation()

  return (
    <article className={styles.guideCard}>
      <h3 className={styles.guideCardTitle}>{t('guide.mac.title')}</h3>
      <p className={styles.panelCopy}>
        <GuideRichText text={t('guide.mac.summary')} platform="mac" />
      </p>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.steps')}</p>
        <div className={guideStyles.stepList}>
          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <GuideRichText text={t('guide.mac.steps.step01.title')} platform="mac" />
            </h4>
            <p className={guideStyles.stepBody}>
              <GuideRichText text={t('guide.mac.steps.step01.body')} platform="mac" />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <GuideRichText text={t('guide.mac.steps.step02.title')} platform="mac" />
            </h4>
            <p className={guideStyles.stepBody}>
              <GuideRichText text={t('guide.mac.steps.step02.body')} platform="mac" />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <GuideRichText text={t('guide.mac.steps.step03.title')} platform="mac" />
            </h4>
            <p className={guideStyles.stepBody}>
              <GuideRichText text={t('guide.mac.steps.step03.body')} platform="mac" />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <GuideRichText text={t('guide.mac.steps.step04.title')} platform="mac" />
            </h4>
            <p className={guideStyles.stepBody}>
              <GuideRichText text={t('guide.mac.steps.step04.body')} platform="mac" />
            </p>

            <div className={guideStyles.substepGroup}>
              <section className={guideStyles.stepItem}>
                <h4 className={guideStyles.stepTitle}>
                  <GuideRichText
                    text={t('guide.mac.steps.step04.substeps.step04_1.title')}
                    platform="mac"
                  />
                </h4>
                <p className={guideStyles.stepBody}>
                  <GuideRichText
                    text={t('guide.mac.steps.step04.substeps.step04_1.body')}
                    platform="mac"
                  />
                </p>
              </section>

              <section className={guideStyles.stepItem}>
                <h4 className={guideStyles.stepTitle}>
                  <GuideRichText
                    text={t('guide.mac.steps.step04.substeps.step04_2.title')}
                    platform="mac"
                  />
                </h4>
                <p className={guideStyles.stepBody}>
                  <GuideRichText
                    text={t('guide.mac.steps.step04.substeps.step04_2.body')}
                    platform="mac"
                  />
                </p>
              </section>

              <section className={guideStyles.stepItem}>
                <h4 className={guideStyles.stepTitle}>
                  <GuideRichText
                    text={t('guide.mac.steps.step04.substeps.step04_3.title')}
                    platform="mac"
                  />
                </h4>
                <p className={guideStyles.stepBody}>
                  <GuideRichText
                    text={t('guide.mac.steps.step04.substeps.step04_3.body')}
                    platform="mac"
                  />
                </p>
              </section>
            </div>
          </section>
        </div>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.notes')}</p>
        <ul className={guideStyles.notesList}>
          <li className={guideStyles.noteItem}>
            <GuideRichText text={t('guide.mac.note1')} platform="mac" />
          </li>
          <li className={guideStyles.noteItem}>
            <GuideRichText text={t('guide.mac.note2')} platform="mac" />
          </li>
          <li className={guideStyles.noteItem}>
            <GuideRichText text={t('guide.mac.note3')} platform="mac" />
          </li>
        </ul>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.references')}</p>
        <div className={guideStyles.linkList}>
          <a
            className={guideStyles.sourceLink}
            href="https://karabiner-elements.pqrs.org/"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.mac.referenceLabel1')}
          </a>
          <a
            className={guideStyles.sourceLink}
            href="https://karabiner-elements.pqrs.org/docs/getting-started/installation/"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.mac.referenceLabel2')}
          </a>
          <a
            className={guideStyles.sourceLink}
            href="https://karabiner-elements.pqrs.org/docs/manual/configuration/configure-simple-modifications/"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.mac.referenceLabel3')}
          </a>
          <a
            className={guideStyles.sourceLink}
            href="https://karabiner-elements.pqrs.org/docs/manual/misc/required-macos-settings/"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.mac.referenceLabel4')}
          </a>
          <a
            className={guideStyles.sourceLink}
            href="https://karabiner-elements.pqrs.org/docs/help/how-to/use-before-logging-in/"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.mac.referenceLabel5')}
          </a>
          <a
            className={guideStyles.sourceLink}
            href="https://support.apple.com/guide/mac-help/change-input-sources-settings-on-mac-mchl84525d76/mac"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.mac.referenceLabel6')}
          </a>
        </div>
      </section>
    </article>
  )
}
