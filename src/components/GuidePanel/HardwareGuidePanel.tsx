import { useTranslation } from 'react-i18next'
import { getGuidePath } from '../../guides'
import { guideSectionIds } from '../../guideAnchors'
import type { Locale } from '../../i18n'
import * as styles from '../../styles/app.css'
import { HeadlineCopyLinkButton } from '../CopyLink'
import * as guideStyles from '../GuideSections/GuideSections.css'

type HardwareGuidePanelProps = {
  locale: Locale
}

export function HardwareGuidePanel({ locale }: HardwareGuidePanelProps) {
  const { t } = useTranslation()
  const content = {
    title: t('guide.hardware.title'),
    summary: t('guide.hardware.summary'),
    advantagesTitle: t('guide.hardware.advantagesTitle'),
    methodsTitle: t('guide.hardware.methodsTitle'),
    advantages: [
      t('guide.hardware.advantages.item1'),
      t('guide.hardware.advantages.item2'),
      t('guide.hardware.advantages.item3'),
    ],
    cautionsTitle: t('guide.hardware.cautionsTitle'),
    cautions: [],
    referencesTitle: t('guide.label.references'),
    sections: [
      {
        id: guideSectionIds.hardwareVendorTools,
        title: t('guide.hardware.sections.tools.title'),
        body: [
          t('guide.hardware.sections.tools.body1'),
          t('guide.hardware.sections.tools.body2'),
          t('guide.hardware.sections.tools.body3'),
        ],
        examplesTitle: t('guide.hardware.examplesTitle'),
        examples: [
          {
            label: 'HHKB',
            href: 'https://happyhackingkb.com/',
            guideLabel: t('guide.hardware.exampleGuideLabel.setupGuide'),
            guideHref: 'https://happyhackingkb.com/manual/studio/ug-us/en/ug/topic/keymaptool.html',
          },
          {
            label: 'Keychron',
            href: 'https://www.keychron.com/',
            guideLabel: t('guide.hardware.exampleGuideLabel.toolPage'),
            guideHref: 'https://launcher.keychron.com/',
          },
          {
            label: 'ZSA',
            href: 'https://www.zsa.io/',
            guideLabel: t('guide.hardware.exampleGuideLabel.toolPage'),
            guideHref: 'https://configure.zsa.io/',
          },
          {
            label: 'Wooting',
            href: 'https://wooting.io/',
            guideLabel: t('guide.hardware.exampleGuideLabel.toolPage'),
            guideHref: 'https://wootility.io/',
          },
          {
            label: 'Dygma',
            href: 'https://dygma.com/',
            guideLabel: t('guide.hardware.exampleGuideLabel.toolPage'),
            guideHref: 'https://dygma.com/bazecor',
          },
          {
            label: 'NuPhy',
            href: 'https://nuphy.com/',
            guideLabel: t('guide.hardware.exampleGuideLabel.setupGuide'),
            guideHref: 'https://nuphy.com/pages/via-usage-guide-for-nuphy-keyboards',
          },
        ],
        references: [
          {
            label: t('guide.hardware.references.hhkbDownload'),
            href: 'https://happyhackingkb.com/download/',
          },
          {
            label: t('guide.hardware.references.hhkbKeymapTool'),
            href: 'https://happyhackingkb.com/manual/studio/ug-us/en/ug/topic/keymaptool.html',
          },
          {
            label: t('guide.hardware.references.keychronLauncher'),
            href: 'https://www.keychron.com/blogs/news/how-to-remap-a-key-on-launcher',
          },
          {
            label: t('guide.hardware.references.zsaVoyager'),
            href: 'https://www.zsa.io/voyager',
          },
          {
            label: t('guide.hardware.references.zsaFlash'),
            href: 'https://www.zsa.io/flash',
          },
          {
            label: t('guide.hardware.references.wooting80he'),
            href: 'https://wooting.io/wooting-80he',
          },
          {
            label: t('guide.hardware.references.wootingRemap'),
            href: 'https://help.wooting.io/article/95-swap-around-option-and-command-key-on-mac-osx',
          },
          {
            label: t('guide.hardware.references.dygmaBazecor'),
            href: 'https://support.dygma.com/hc/en-us/articles/22652367088797-How-to-download-the-latest-version-of-Bazecor',
          },
          {
            label: t('guide.hardware.references.dygmaLayout'),
            href: 'https://support.dygma.com/hc/en-us/articles/22652578889501-How-to-customize-the-layout',
          },
          {
            label: t('guide.hardware.references.qmkKeymap'),
            href: 'https://docs.qmk.fm/keymap',
          },
          {
            label: t('guide.hardware.references.viaSpec'),
            href: 'https://caniusevia.com/docs/specification/',
          },
          {
            label: t('guide.hardware.references.vialFirstUse'),
            href: 'https://get.vial.today/manual/first-use.html',
          },
          {
            label: t('guide.hardware.references.zmkStudio'),
            href: 'https://zmk.dev/docs/features/studio',
          },
          {
            label: t('guide.hardware.references.nuphyVia'),
            href: 'https://nuphy.com/pages/via-usage-guide-for-nuphy-keyboards',
          },
        ],
      },
      {
        id: guideSectionIds.hardwareSwitches,
        title: t('guide.hardware.sections.switches.title'),
        body: [
          t('guide.hardware.sections.switches.body1'),
          t('guide.hardware.sections.switches.body2'),
          t('guide.hardware.sections.switches.body3'),
        ],
        examplesTitle: t('guide.hardware.examplesTitle'),
        examples: [
          {
            label: 'HHKB',
            href: 'https://happyhackingkb.com/',
            guideLabel: t('guide.hardware.exampleGuideLabel.hhkbDip'),
            guideHref: 'https://happyhackingkb.com/manual/studio/ug-us/en/ug/topic/set_dipswitch.html',
          },
        ],
        references: [
          {
            label: t('guide.hardware.references.hhkbDownload'),
            href: 'https://happyhackingkb.com/download/',
          },
          {
            label: t('guide.hardware.references.hhkbDipManual'),
            href: 'https://happyhackingkb.com/manual/studio/ug-us/en/ug/topic/set_dipswitch.html',
          },
          {
            label: t('guide.hardware.references.hhkbFnLayer'),
            href: 'https://happyhackingkb.com/manual/studio/ug-us/en/ug/topic/use_fnkeys_layer.html',
          },
        ],
      },
    ],
  }
  const cautionItems = content.cautions.filter(Boolean)
  const references = Array.from(
    new Map(
      content.sections
        .flatMap((section) => [
          ...section.references,
          ...section.examples.map((example) => ({
            label: t('guide.hardware.officialPageLabel', { label: example.label }),
            href: example.href,
          })),
          ...section.examples.map((example) => ({
            label: `${example.label} ${example.guideLabel}`,
            href: example.guideHref,
          })),
        ])
        .map((reference) => [reference.href, reference]),
    ).values(),
  )

  return (
    <article id={guideSectionIds.hardware} className={styles.guideCard}>
      <div className={styles.guideCardTitleRow}>
        <h3 className={styles.guideCardTitle}>{content.title}</h3>
        <HeadlineCopyLinkButton
          label={content.title}
          path={getGuidePath(locale, 'hardware')}
          hash={guideSectionIds.hardware}
        />
      </div>
      <p className={styles.panelCopy}>{content.summary}</p>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{content.advantagesTitle}</p>
        <ul className={guideStyles.notesList}>
          {content.advantages.map((item) => (
            <li key={item} className={guideStyles.noteItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {cautionItems.length > 0 ? (
        <section className={guideStyles.section}>
          <p className={guideStyles.label}>{content.cautionsTitle}</p>
          <ul className={guideStyles.notesList}>
            {cautionItems.map((item) => (
              <li key={item} className={guideStyles.noteItem}>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{content.methodsTitle}</p>
        <div className={guideStyles.stepList}>
          {content.sections.map((section, index) => {
            const numberedTitle = `${index + 1}. ${section.title}`

            return (
              <section key={section.id} id={section.id} className={guideStyles.stepItem}>
                <div className={guideStyles.headingRow}>
                  <h4 className={styles.guideSubheading}>{numberedTitle}</h4>
                  <HeadlineCopyLinkButton
                    label={numberedTitle}
                    path={getGuidePath(locale, 'hardware')}
                    hash={section.id}
                  />
                </div>

                <div className={guideStyles.contentGroup}>
                  {section.body.filter(Boolean).map((paragraph) => (
                    <p key={paragraph} className={styles.panelCopy}>
                      {paragraph}
                    </p>
                  ))}

                  {'examples' in section && section.examples ? (
                    <section className={guideStyles.subcontentGroup}>
                      <p className={guideStyles.sublabel}>{section.examplesTitle}</p>
                      <ul className={guideStyles.notesList}>
                        {section.examples.map((example) => (
                          <li key={example.href} className={guideStyles.noteItem}>
                            <a
                              className={guideStyles.inlineLink}
                              href={example.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {example.label}
                            </a>{' '}
                            (
                            <a
                              className={guideStyles.inlineLink}
                              href={example.guideHref}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {example.guideLabel}
                            </a>
                            )
                          </li>
                        ))}
                      </ul>
                    </section>
                  ) : null}
                </div>
              </section>
            )
          })}
        </div>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{content.referencesTitle}</p>
        <div className={guideStyles.linkList}>
          {references.map((reference) => (
            <a
              key={reference.href}
              className={guideStyles.sourceLink}
              href={reference.href}
              target="_blank"
              rel="noreferrer"
            >
              {reference.label}
            </a>
          ))}
        </div>
      </section>
    </article>
  )
}
