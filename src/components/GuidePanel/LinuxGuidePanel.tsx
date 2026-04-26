import { Trans, useTranslation } from 'react-i18next'
import { getGuidePath } from '../../guides'
import { guideSectionIds } from '../../guideAnchors'
import { HeadlineCopyLinkButton } from '../CopyLink'
import { GuideCodeBlock } from '../GuideCodeBlock'
import { InlineTransKeycap } from '../Keycap'
import * as guideStyles from '../GuideSections/GuideSections.css'
import * as styles from '../../styles/app.css'
import type { Locale } from '../../i18n'

type LinuxGuidePanelProps = {
  locale: Locale
}

export function LinuxGuidePanel({ locale }: LinuxGuidePanelProps) {
  const { t } = useTranslation()
  const keyComponents = { key: <InlineTransKeycap platform="linux" /> }
  const notes = ['note1', 'note2', 'note3'] as const
  const references = [
    { key: 'referenceLabel1', href: 'https://github.com/rvaiya/keyd' },
    { key: 'referenceLabel2', href: 'https://github.com/rvaiya/keyd#quickstart' },
    { key: 'referenceLabel3', href: 'https://github.com/rvaiya/keyd/releases' },
  ] as const
  const steps = ['step01', 'step02', 'step03', 'step04', 'step05'] as const

  return (
    <article id={guideSectionIds.linux} className={styles.guideCard}>
      <div className={styles.guideCardTitleRow}>
        <h3 className={styles.guideCardTitle}>{t('guide.linux.title')}</h3>
        <HeadlineCopyLinkButton
          label={t('guide.linux.title')}
          path={getGuidePath(locale, 'linux')}
          hash={guideSectionIds.linux}
        />
      </div>
      <p className={styles.panelCopy}>
        <Trans i18nKey="guide.linux.summary" components={keyComponents} />
      </p>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.steps')}</p>
        <div className={guideStyles.stepList}>
          {steps.map((step) => (
            <section key={step} className={guideStyles.stepItem}>
              <h4 className={guideStyles.stepTitle}>
                <Trans i18nKey={`guide.linux.steps.${step}.title`} components={keyComponents} />
              </h4>
              <div className={guideStyles.contentGroup}>
                <p className={guideStyles.stepBody}>
                  <Trans i18nKey={`guide.linux.steps.${step}.body`} components={keyComponents} />
                </p>

                {step === 'step01' ? (
                  <section className={guideStyles.section}>
                    <p className={guideStyles.sublabel}>{t('guide.codeBlock.install.label')}</p>
                    <GuideCodeBlock
                      code={t('guide.linux.installScript')}
                      copyLabel={t('guide.codeBlock.install.copy')}
                      copiedLabel={t('guide.codeBlock.install.copied')}
                      downloadLabel={t('guide.codeBlock.install.download')}
                      filename={t('guide.linux.installFilename')}
                    />
                  </section>
                ) : null}

                {step === 'step02' ? (
                  <section className={guideStyles.section}>
                    <p className={guideStyles.sublabel}>{t('guide.codeBlock.config.label')}</p>
                    <GuideCodeBlock
                      code={t('guide.linux.configSnippet')}
                      copyLabel={t('guide.codeBlock.config.copy')}
                      copiedLabel={t('guide.codeBlock.config.copied')}
                      downloadLabel={t('guide.codeBlock.config.download')}
                      filename={t('guide.linux.configFilename')}
                    />
                  </section>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.notes')}</p>
        <ul className={guideStyles.notesList}>
          {notes.map((note) => (
            <li key={note} className={guideStyles.noteItem}>
              <Trans i18nKey={`guide.linux.${note}`} components={keyComponents} />
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
              {t(`guide.linux.${reference.key}`)}
            </a>
          ))}
        </div>
      </section>
    </article>
  )
}
