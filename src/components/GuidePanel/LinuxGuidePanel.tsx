import { Trans, useTranslation } from 'react-i18next'
import { GuideCodeBlock } from '../GuideCodeBlock'
import { InlineTransKeycap } from '../Keycap'
import * as guideStyles from '../GuideSections/GuideSections.css'
import * as styles from '../../styles/app.css'

export function LinuxGuidePanel() {
  const { t } = useTranslation()
  const keyComponents = { key: <InlineTransKeycap platform="linux" /> }

  return (
    <article className={styles.guideCard}>
      <h3 className={styles.guideCardTitle}>{t('guide.linux.title')}</h3>
      <p className={styles.panelCopy}>
        <Trans i18nKey="guide.linux.summary" components={keyComponents} />
      </p>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.steps')}</p>
        <div className={guideStyles.stepList}>
          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.linux.steps.step01.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.linux.steps.step01.body" components={keyComponents} />
            </p>
          </section>

          <div className={styles.guideInlineCodeSection}>
            <section className={guideStyles.section}>
              <p className={guideStyles.label}>{t('guide.codeBlock.install.label')}</p>
              <GuideCodeBlock
                code={t('guide.linux.installScript')}
                copyLabel={t('guide.codeBlock.install.copy')}
                copiedLabel={t('guide.codeBlock.install.copied')}
                downloadLabel={t('guide.codeBlock.install.download')}
                filename={t('guide.linux.installFilename')}
              />
            </section>
          </div>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.linux.steps.step02.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.linux.steps.step02.body" components={keyComponents} />
            </p>
          </section>

          <div className={styles.guideInlineCodeSection}>
            <section className={guideStyles.section}>
              <p className={guideStyles.label}>{t('guide.codeBlock.config.label')}</p>
              <GuideCodeBlock
                code={t('guide.linux.configSnippet')}
                copyLabel={t('guide.codeBlock.config.copy')}
                copiedLabel={t('guide.codeBlock.config.copied')}
                downloadLabel={t('guide.codeBlock.config.download')}
                filename={t('guide.linux.configFilename')}
              />
            </section>
          </div>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.linux.steps.step03.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.linux.steps.step03.body" components={keyComponents} />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.linux.steps.step04.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.linux.steps.step04.body" components={keyComponents} />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.linux.steps.step05.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.linux.steps.step05.body" components={keyComponents} />
            </p>
          </section>
        </div>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.notes')}</p>
        <ul className={guideStyles.notesList}>
          <li className={guideStyles.noteItem}>
            <Trans i18nKey="guide.linux.note1" components={keyComponents} />
          </li>
          <li className={guideStyles.noteItem}>
            <Trans i18nKey="guide.linux.note2" components={keyComponents} />
          </li>
          <li className={guideStyles.noteItem}>
            <Trans i18nKey="guide.linux.note3" components={keyComponents} />
          </li>
        </ul>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.references')}</p>
        <div className={guideStyles.linkList}>
          <a
            className={guideStyles.sourceLink}
            href="https://github.com/rvaiya/keyd"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.linux.referenceLabel1')}
          </a>
          <a
            className={guideStyles.sourceLink}
            href="https://github.com/rvaiya/keyd#quickstart"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.linux.referenceLabel2')}
          </a>
          <a
            className={guideStyles.sourceLink}
            href="https://github.com/rvaiya/keyd/releases"
            target="_blank"
            rel="noreferrer"
          >
            {t('guide.linux.referenceLabel3')}
          </a>
        </div>
      </section>
    </article>
  )
}
