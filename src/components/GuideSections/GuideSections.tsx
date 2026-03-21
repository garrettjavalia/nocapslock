import type { ReactNode } from 'react'
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
  renderExtra?: (step: GuideStep, index: number) => ReactNode
}

type GuideNotesSectionProps = {
  label: string
  notes: string[]
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

export function GuideStepsSection({ label, steps, renderExtra }: GuideStepsSectionProps) {
  return (
    <GuideSection label={label}>
      <div className={styles.stepList}>
        {steps.map((step, index) => (
          <section key={step.title} className={styles.stepItem}>
            <h4 className={styles.stepTitle}>{step.title}</h4>
            <p className={styles.stepBody}>{step.body}</p>
            {renderExtra ? renderExtra(step, index) : null}
          </section>
        ))}
      </div>
    </GuideSection>
  )
}

export function GuideNotesSection({ label, notes }: GuideNotesSectionProps) {
  return (
    <GuideSection label={label}>
      <ul className={styles.notesList}>
        {notes.map((note) => (
          <li key={note} className={styles.noteItem}>
            {note}
          </li>
        ))}
      </ul>
    </GuideSection>
  )
}
