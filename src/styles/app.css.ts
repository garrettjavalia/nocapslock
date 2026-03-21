import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export const pageShell = style({
  width: 'min(1120px, calc(100% - 32px))',
  margin: '0 auto',
  padding: '32px 0 72px',
  '@media': {
    '(max-width: 640px)': {
      width: 'min(100% - 20px, 1120px)',
      paddingTop: 18,
    },
  },
})

export const masthead = style({
  position: 'fixed',
  left: '50%',
  top: 32,
  transform: 'translateX(-50%)',
  width: 'min(1120px, calc(100% - 32px))',
  zIndex: 20,
  padding: '0 0 6px',
  '@media': {
    '(max-width: 640px)': {
      width: 'min(100% - 20px, 1120px)',
    },
  },
})

export const mastheadSurface = style({
  position: 'relative',
  borderRadius: 22,
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius: 22,
      background: `color-mix(in srgb, ${vars.color.bgElevated} 36%, transparent)`,
      border: `1px solid ${vars.color.border}`,
      boxShadow: vars.shadow.panel,
      backdropFilter: 'blur(18px)',
      opacity: 'var(--surface-opacity, 0)',
      transition: 'opacity 140ms linear',
      pointerEvents: 'none',
    },
  },
})

export const mastheadTop = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 16,
  padding: '10px 14px 12px',
  '@media': {
    '(max-width: 840px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
})

export const mastheadTitles = style({
  position: 'relative',
  minHeight: '1.6rem',
  width: 'min(720px, 100%)',
  flex: '1 1 auto',
  display: 'flex',
  alignItems: 'center',
  paddingTop: 0,
})

export const hero = style({
  padding: '18px 0 24px',
})

export const heroCopy = style({
  maxWidth: 720,
  overflow: 'hidden',
})

export const heroLeadSection = style({
  paddingBottom: 20,
})

export const eyebrow = style({
  margin: '0 0 10px',
  color: vars.color.accent,
  fontSize: '0.88rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
})

export const heroTitle = style({
  marginBottom: 18,
  fontSize: 'clamp(3.2rem, 8vw, 6.2rem)',
  lineHeight: 0.94,
  letterSpacing: '-0.05em',
  '@media': {
    '(max-width: 640px)': {
      fontSize: 'clamp(2.6rem, 14vw, 4rem)',
    },
  },
})

export const heroTitleFloating = style({
  opacity: 'var(--hero-opacity, 1)',
  willChange: 'opacity',
  transition: 'opacity 120ms linear',
})

export const subduedText = style({
  color: vars.color.textSoft,
})

export const heroLead = style([
  subduedText,
  {
    paddingInline: 6,
    fontSize: '1.1rem',
    lineHeight: 1.7,
  },
])

export const contentGrid = style({
  display: 'grid',
  gap: 22,
})

export const panel = style({
  border: `1px solid ${vars.color.border}`,
  borderRadius: 28,
  background: vars.color.bgElevated,
  boxShadow: vars.shadow.panel,
  backdropFilter: 'blur(18px)',
  padding: 28,
  '@media': {
    '(max-width: 840px)': {
      padding: 22,
    },
  },
})

export const keyStage = style({
  overflow: 'hidden',
})

export const sectionHeading = style({
  marginBottom: 18,
})

export const sectionKicker = style([
  eyebrow,
  {
    marginBottom: 10,
  },
])

export const sectionTitle = style({
  marginBottom: 0,
  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
  letterSpacing: '-0.04em',
})

export const keyRail = style({
  display: 'grid',
  placeItems: 'center',
  gap: 18,
  minHeight: 320,
  padding: 24,
  borderRadius: 24,
  background: vars.color.bgStrong,
  boxShadow: 'none',
  border: `1px solid ${vars.color.border}`,
  '@media': {
    '(max-width: 640px)': {
      minHeight: 260,
    },
  },
})

export const keyNarrative = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  gap: 18,
  width: '100%',
  alignItems: 'center',
  '@media': {
    '(max-width: 780px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const keyStateColumn = style({
  display: 'grid',
  justifyItems: 'center',
})

export const keyFlowArrow = style({
  display: 'grid',
  placeItems: 'center',
  color: vars.color.textSoft,
  fontSize: '1.1rem',
  lineHeight: 1,
  '@media': {
    '(max-width: 780px)': {
      minHeight: 10,
    },
  },
})

export const keyFlowDot = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 22,
  height: 22,
  borderRadius: 999,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bg,
  color: vars.color.textSoft,
  selectors: {
    '&::before': {
      content: '"→"',
    },
  },
})

export const panelCopy = style([
  subduedText,
  {
    lineHeight: 1.7,
  },
])

export const keyCaption = style([
  subduedText,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexWrap: 'wrap',
    marginBottom: 0,
  },
])

export const keyCaptionSelect = style({
  display: 'inline-block',
  height: 34,
  minHeight: 34,
  lineHeight: '34px',
  padding: '0 34px 0 12px',
  borderRadius: 999,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgStrong,
  color: vars.color.text,
  fontWeight: 600,
  lineHeight: 1,
  verticalAlign: 'middle',
  outline: 'none',
  cursor: 'pointer',
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  backgroundImage:
    'linear-gradient(45deg, transparent 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, transparent 50%)',
  backgroundPosition: 'calc(100% - 18px) 14px, calc(100% - 12px) 14px',
  backgroundSize: '6px 6px, 6px 6px',
  backgroundRepeat: 'no-repeat',
})

export const demoTextarea = style({
  width: '100%',
  minHeight: 240,
  resize: 'vertical',
  scrollbarWidth: 'thin',
  scrollbarColor: `${vars.color.textSoft} ${vars.color.bgStrong}`,
  borderRadius: 22,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgStrong,
  color: vars.color.text,
  padding: 20,
  lineHeight: 1.7,
  boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.06)',
  outline: 'none',
  transition: 'border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease',
  selectors: {
    '&:focus': {
      borderColor: vars.color.accent,
      boxShadow: `0 0 0 4px ${vars.color.accentSoft}, inset 0 1px 2px rgba(0, 0, 0, 0.08)`,
    },
    '&::-webkit-scrollbar': {
      width: 12,
      height: 12,
    },
    '&::-webkit-scrollbar-track': {
      background: vars.color.bgStrong,
      borderRadius: 999,
    },
    '&::-webkit-scrollbar-thumb': {
      background: vars.color.textSoft,
      borderRadius: 999,
      border: `3px solid ${vars.color.bgStrong}`,
    },
    '&::-webkit-scrollbar-corner': {
      background: vars.color.bgStrong,
    },
  },
})

export const demoTextareaActive = style({
  borderColor: vars.color.accent,
  boxShadow: `0 0 0 4px ${vars.color.accentSoft}, inset 0 1px 2px rgba(0, 0, 0, 0.08)`,
})

export const demoHint = style([
  subduedText,
  {
    marginBottom: 0,
    fontSize: '0.92rem',
  },
])

export const keyboardKey = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '1.8em',
  padding: '0.12em 0.45em',
  borderRadius: '0.55em',
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgStrong,
  fontSize: '0.92em',
})

export const guideTabs = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  marginBottom: 18,
})

export const guideTab = style({
  border: `1px solid ${vars.color.border}`,
  background: 'transparent',
  color: vars.color.text,
  borderRadius: 999,
  padding: '10px 16px',
  cursor: 'pointer',
})

export const guideTabActive = style({
  background: vars.color.accent,
  borderColor: vars.color.accent,
  color: '#fffaf5',
})

export const guideCard = style({
  borderRadius: 24,
  padding: 22,
  background: vars.color.bgStrong,
  border: `1px solid ${vars.color.border}`,
})

export const guideCardTitle = style({
  marginBottom: 10,
  fontSize: '1.4rem',
})
