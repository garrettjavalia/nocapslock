import type { ReactNode } from 'react'
import { GuideRichText } from '../GuideRichText'
import type { PlatformId } from '../Keycap'
import * as styles from './GuideSections.css'

export type GuideLink = {
  label: string
  href: string
}

export type GuideStep = {
  title: string
  body: string
}

type GuideSectionProps = {
  label: string
  children: ReactNode
}

type GuideLinksSectionProps = {
  label: string
  links: GuideLink[]
}

type GuideStepsSectionProps = {
  label: string
  steps: GuideStep[]
  platform: PlatformId
  renderExtra?: (step: GuideStep, index: number) => ReactNode
}

type GuideNotesSectionProps = {
  label: string
  notes: string[]
  platform: PlatformId
}

export function GuideSection({ label, children }: GuideSectionProps) {
  return (
    <section className={styles.section}>
      <p className={styles.label}>{label}</p>
      {children}
    </section>
  )
}

export function GuideLinksSection({ label, links }: GuideLinksSectionProps) {
  return (
    <GuideSection label={label}>
      <div className={styles.linkList}>
        {links.map((link) => (
          <a
            key={link.href}
            className={styles.sourceLink}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </GuideSection>
  )
}

export function GuideStepsSection({ label, steps, platform, renderExtra }: GuideStepsSectionProps) {
  return (
    <GuideSection label={label}>
      <div className={styles.stepList}>
        {steps.map((step, index) => (
          <section key={step.title} className={styles.stepItem}>
            <h4 className={styles.stepTitle}>
              <GuideRichText text={step.title} platform={platform} />
            </h4>
            <p className={styles.stepBody}>
              <GuideRichText text={step.body} platform={platform} />
            </p>
            {renderExtra ? renderExtra(step, index) : null}
          </section>
        ))}
      </div>
    </GuideSection>
  )
}

export function GuideNotesSection({ label, notes, platform }: GuideNotesSectionProps) {
  return (
    <GuideSection label={label}>
      <ul className={styles.notesList}>
        {notes.map((note) => (
          <li key={note} className={styles.noteItem}>
            <GuideRichText text={note} platform={platform} />
          </li>
        ))}
      </ul>
    </GuideSection>
  )
}
