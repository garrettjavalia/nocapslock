import { Trans, useTranslation } from 'react-i18next'
import { getGuidePath } from '../../guides'
import { guideSectionIds } from '../../guideAnchors'
import { InlineTransKeycap } from '../Keycap'
import { HeadlineCopyLinkButton } from '../CopyLink'
import * as guideStyles from '../GuideSections/GuideSections.css'
import * as styles from '../../styles/app.css'
import type { Locale } from '../../i18n'

type MacGuidePanelProps = {
  locale: Locale
}

export function MacGuidePanel({ locale }: MacGuidePanelProps) {
  const { t } = useTranslation()
  const keyComponents = { key: <InlineTransKeycap platform="mac" /> }
  const stepComponents = {
    ...keyComponents,
    karabinerInstallationGuide: (
      <a
        className={guideStyles.inlineLink}
        href="https://karabiner-elements.pqrs.org/docs/getting-started/installation/"
        target="_blank"
        rel="noreferrer"
      />
    ),
    karabinerRequiredSettingsGuide: (
      <a
        className={guideStyles.inlineLink}
        href="https://karabiner-elements.pqrs.org/docs/manual/misc/required-macos-settings/"
        target="_blank"
        rel="noreferrer"
      />
    ),
    karabinerSimpleModificationsGuide: (
      <a
        className={guideStyles.inlineLink}
        href="https://karabiner-elements.pqrs.org/docs/manual/configuration/configure-simple-modifications/"
        target="_blank"
        rel="noreferrer"
      />
    ),
    karabinerBeforeLoginGuide: (
      <a
        className={guideStyles.inlineLink}
        href="https://karabiner-elements.pqrs.org/docs/help/how-to/use-before-logging-in/"
        target="_blank"
        rel="noreferrer"
      />
    ),
    appleInputSourcesGuide: (
      <a
        className={guideStyles.inlineLink}
        href="https://support.apple.com/guide/mac-help/change-input-sources-settings-on-mac-mchl84525d76/mac"
        target="_blank"
        rel="noreferrer"
      />
    ),
  }
  const steps = ['step01', 'step02', 'step03'] as const
  const substeps = ['step04_1', 'step04_2', 'step04_3'] as const
  const notes = ['note1', 'note2', 'note3'] as const
  const references = [
    {
      key: 'referenceLabel1',
      href: 'https://karabiner-elements.pqrs.org/',
    },
    {
      key: 'referenceLabel2',
      href: 'https://karabiner-elements.pqrs.org/docs/getting-started/installation/',
    },
    {
      key: 'referenceLabel3',
      href: 'https://karabiner-elements.pqrs.org/docs/manual/configuration/configure-simple-modifications/',
    },
    {
      key: 'referenceLabel4',
      href: 'https://karabiner-elements.pqrs.org/docs/manual/misc/required-macos-settings/',
    },
    {
      key: 'referenceLabel5',
      href: 'https://karabiner-elements.pqrs.org/docs/help/how-to/use-before-logging-in/',
    },
    {
      key: 'referenceLabel6',
      href: 'https://support.apple.com/guide/mac-help/change-input-sources-settings-on-mac-mchl84525d76/mac',
    },
  ] as const

  return (
    <article id={guideSectionIds.mac} className={styles.guideCard}>
      <div className={styles.guideCardTitleRow}>
        <h3 className={styles.guideCardTitle}>{t('guide.mac.title')}</h3>
        <HeadlineCopyLinkButton
          label={t('guide.mac.title')}
          path={getGuidePath(locale, 'mac')}
          hash={guideSectionIds.mac}
        />
      </div>
      <p className={styles.panelCopy}>
        <Trans i18nKey="guide.mac.summary" components={keyComponents} />
      </p>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.steps')}</p>
        <div className={guideStyles.stepList}>
          {steps.map((step) => (
            <section key={step} className={guideStyles.stepItem}>
              <h4 className={guideStyles.stepTitle}>
                <Trans i18nKey={`guide.mac.steps.${step}.title`} components={keyComponents} />
              </h4>
              <p className={guideStyles.stepBody}>
                <Trans i18nKey={`guide.mac.steps.${step}.body`} components={stepComponents} />
              </p>
            </section>
          ))}

          <section className={guideStyles.stepItem}>
            <h4 className={guideStyles.stepTitle}>
              <Trans i18nKey="guide.mac.steps.step04.title" components={keyComponents} />
            </h4>
            <p className={guideStyles.stepBody}>
              <Trans i18nKey="guide.mac.steps.step04.body" components={stepComponents} />
            </p>

            <div className={guideStyles.substepGroup}>
              {substeps.map((substep) => (
                <section key={substep} className={guideStyles.stepItem}>
                  <h4 className={guideStyles.stepTitle}>
                    <Trans
                      i18nKey={`guide.mac.steps.step04.substeps.${substep}.title`}
                      components={keyComponents}
                    />
                  </h4>
                  <p className={guideStyles.stepBody}>
                    <Trans
                      i18nKey={`guide.mac.steps.step04.substeps.${substep}.body`}
                      components={stepComponents}
                    />
                  </p>
                </section>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{t('guide.label.notes')}</p>
        <ul className={guideStyles.notesList}>
          {notes.map((note) => (
            <li key={note} className={guideStyles.noteItem}>
              <Trans i18nKey={`guide.mac.${note}`} components={keyComponents} />
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
              {t(`guide.mac.${reference.key}`)}
            </a>
          ))}
        </div>
      </section>
    </article>
  )
}
