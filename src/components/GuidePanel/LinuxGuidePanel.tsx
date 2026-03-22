import { Trans, useTranslation } from 'react-i18next'
import { getGuidePath } from '../../guides'
import { guideSectionIds } from '../../guideAnchors'
import { GuideCodeBlock } from '../GuideCodeBlock'
import { DeepLinkIconButton } from '../DeepLinkIconButton/DeepLinkIconButton'
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
  const stepFlow = [
    { type: 'step', id: 'step01' },
    { type: 'code', id: 'install' },
    { type: 'step', id: 'step02' },
    { type: 'code', id: 'config' },
    { type: 'step', id: 'step03' },
    { type: 'step', id: 'step04' },
    { type: 'step', id: 'step05' },
  ] as const

  return (
    <article id={guideSectionIds.linux} className={styles.guideCard}>
      <div className={styles.guideCardTitleRow}>
        <h3 className={styles.guideCardTitle}>{t('guide.linux.title')}</h3>
        <DeepLinkIconButton
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
          {stepFlow.map((item) =>
            item.type === 'step' ? (
              <section key={item.id} className={guideStyles.stepItem}>
                <h4 className={guideStyles.stepTitle}>
                  <Trans i18nKey={`guide.linux.steps.${item.id}.title`} components={keyComponents} />
                </h4>
                <p className={guideStyles.stepBody}>
                  <Trans i18nKey={`guide.linux.steps.${item.id}.body`} components={keyComponents} />
                </p>
              </section>
            ) : (
              <div key={item.id} className={styles.guideInlineCodeSection}>
                <section className={guideStyles.section}>
                  <p className={guideStyles.label}>{t(`guide.codeBlock.${item.id}.label`)}</p>
                  <GuideCodeBlock
                    code={t(`guide.linux.${item.id === 'install' ? 'installScript' : 'configSnippet'}`)}
                    copyLabel={t(`guide.codeBlock.${item.id}.copy`)}
                    copiedLabel={t(`guide.codeBlock.${item.id}.copied`)}
                    downloadLabel={t(`guide.codeBlock.${item.id}.download`)}
                    filename={t(
                      `guide.linux.${item.id === 'install' ? 'installFilename' : 'configFilename'}`,
                    )}
                  />
                </section>
              </div>
            ),
          )}
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
