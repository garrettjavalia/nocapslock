import { GuideCodeBlock } from '../GuideCodeBlock'
import { GuideLinksSection, GuideNotesSection, GuideSection, GuideStepsSection } from '../GuideSections'
import { GuideRichText } from '../GuideRichText'
import { WindowsGuideMethods } from '../WindowsGuideMethods'
import type { Copy, GuidePlatformId } from '../../i18n'
import * as styles from '../../styles/app.css'

type GuidePanelProps = {
  copy: Copy['guideSection']
  activeGuide: Copy['guideSection']['platforms'][number]
  guidePlatform: GuidePlatformId
  onGuidePlatformChange: (platform: GuidePlatformId) => void
}

export function GuidePanel({
  copy,
  activeGuide,
  guidePlatform,
  onGuidePlatformChange,
}: GuidePanelProps) {
  return (
    <section className={styles.panel} aria-labelledby="guide-title">
      <div className={styles.sectionHeading}>
        <p className={styles.sectionKicker}>{copy.kicker}</p>
        <h2 id="guide-title" className={styles.sectionTitle}>
          {copy.title}
        </h2>
      </div>
      <p className={styles.guideIntro}>{copy.intro}</p>
      <div className={styles.guideTabs} role="tablist" aria-label={copy.title}>
        {copy.platforms.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={guidePlatform === item.id}
            className={
              guidePlatform === item.id
                ? `${styles.guideTab} ${styles.guideTabActive}`
                : styles.guideTab
            }
            onClick={() => onGuidePlatformChange(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <article className={styles.guideCard}>
        <h3 className={styles.guideCardTitle}>{activeGuide.title}</h3>
        <p className={styles.panelCopy}>
          <GuideRichText text={activeGuide.summary} platform={activeGuide.id} />
        </p>

        {activeGuide.id === 'windows' ? (
          <WindowsGuideMethods
            copy={copy.windowsMethods}
            labels={{
              linksLabel: copy.linksLabel,
              stepsLabel: copy.stepsLabel,
              notesLabel: copy.notesLabel,
            }}
            registryGeneratorCopy={copy.registryGenerator}
          />
        ) : null}

        {activeGuide.id !== 'windows' &&
        activeGuide.installScript &&
        activeGuide.installStepIndex === undefined ? (
          <GuideSection label={copy.commandLabel}>
            <GuideCodeBlock
              code={activeGuide.installScript}
              copyLabel={copy.copyCommandLabel}
              copiedLabel={copy.copiedCommandLabel}
              downloadLabel={copy.downloadCommandLabel}
              filename={activeGuide.installFilename ?? `${activeGuide.id}-setup.sh`}
            />
          </GuideSection>
        ) : null}

        {activeGuide.id !== 'windows' &&
        activeGuide.configSnippet &&
        activeGuide.configStepIndex === undefined ? (
          <GuideSection label={copy.configLabel}>
            <GuideCodeBlock
              code={activeGuide.configSnippet}
              copyLabel={copy.copyConfigLabel}
              copiedLabel={copy.copiedConfigLabel}
              downloadLabel={copy.downloadConfigLabel}
              filename={activeGuide.configFilename ?? `${activeGuide.id}-config.txt`}
            />
          </GuideSection>
        ) : null}

        {activeGuide.id !== 'windows' && activeGuide.steps?.length ? (
          <GuideStepsSection
            label={copy.stepsLabel}
            steps={activeGuide.steps}
            platform={activeGuide.id}
            renderExtra={(_, index) => (
              <>
                {activeGuide.installScript && activeGuide.installStepIndex === index ? (
                  <div className={styles.guideInlineCodeSection}>
                    <GuideSection label={copy.commandLabel}>
                      <GuideCodeBlock
                        code={activeGuide.installScript}
                        copyLabel={copy.copyCommandLabel}
                        copiedLabel={copy.copiedCommandLabel}
                        downloadLabel={copy.downloadCommandLabel}
                        filename={activeGuide.installFilename ?? `${activeGuide.id}-setup.sh`}
                      />
                    </GuideSection>
                  </div>
                ) : null}
                {activeGuide.configSnippet && activeGuide.configStepIndex === index ? (
                  <div className={styles.guideInlineCodeSection}>
                    <GuideSection label={copy.configLabel}>
                      <GuideCodeBlock
                        code={activeGuide.configSnippet}
                        copyLabel={copy.copyConfigLabel}
                        copiedLabel={copy.copiedConfigLabel}
                        downloadLabel={copy.downloadConfigLabel}
                        filename={activeGuide.configFilename ?? `${activeGuide.id}-config.txt`}
                      />
                    </GuideSection>
                  </div>
                ) : null}
              </>
            )}
          />
        ) : null}

        {activeGuide.id !== 'windows' && activeGuide.notes?.length ? (
          <GuideNotesSection label={copy.notesLabel} notes={activeGuide.notes} platform={activeGuide.id} />
        ) : null}

        {activeGuide.id !== 'windows' && activeGuide.officialLinks?.length ? (
          <GuideLinksSection label={copy.linksLabel} links={activeGuide.officialLinks} />
        ) : null}

        {activeGuide.placeholder ? <p className={styles.subduedText}>{activeGuide.placeholder}</p> : null}
      </article>
    </section>
  )
}
