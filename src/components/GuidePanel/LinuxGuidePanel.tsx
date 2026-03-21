import { useTranslation } from 'react-i18next'
import { GuideCodeBlock } from '../GuideCodeBlock'
import { GuideRichText } from '../GuideRichText'
import * as guideStyles from '../GuideSections/GuideSections.css'
import * as styles from '../../styles/app.css'

export function LinuxGuidePanel() {
  const { t } = useTranslation()

  return (
    <article className={styles.guideCard}>
      <h3 className={styles.guideCardTitle}>{t('guide.linux.title')}</h3>
      <p className={styles.panelCopy}>
        <GuideRichText text={t('guide.linux.summary')} platform="linux" />
      </p>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.steps')}</p>
        <div className={guideStyles.stepList}>
          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <GuideRichText text={t('guide.linux.steps.step01.title')} platform="linux" />
            </h4>
            <p className={guideStyles.stepBody}>
              <GuideRichText text={t('guide.linux.steps.step01.body')} platform="linux" />
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
              <GuideRichText text={t('guide.linux.steps.step02.title')} platform="linux" />
            </h4>
            <p className={guideStyles.stepBody}>
              <GuideRichText text={t('guide.linux.steps.step02.body')} platform="linux" />
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
              <GuideRichText text={t('guide.linux.steps.step03.title')} platform="linux" />
            </h4>
            <p className={guideStyles.stepBody}>
              <GuideRichText text={t('guide.linux.steps.step03.body')} platform="linux" />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <GuideRichText text={t('guide.linux.steps.step04.title')} platform="linux" />
            </h4>
            <p className={guideStyles.stepBody}>
              <GuideRichText text={t('guide.linux.steps.step04.body')} platform="linux" />
            </p>
          </section>

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <GuideRichText text={t('guide.linux.steps.step05.title')} platform="linux" />
            </h4>
            <p className={guideStyles.stepBody}>
              <GuideRichText text={t('guide.linux.steps.step05.body')} platform="linux" />
            </p>
          </section>
        </div>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.notes')}</p>
        <ul className={guideStyles.notesList}>
          <li className={guideStyles.noteItem}>
            <GuideRichText text={t('guide.linux.note1')} platform="linux" />
          </li>
          <li className={guideStyles.noteItem}>
            <GuideRichText text={t('guide.linux.note2')} platform="linux" />
          </li>
          <li className={guideStyles.noteItem}>
            <GuideRichText text={t('guide.linux.note3')} platform="linux" />
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
