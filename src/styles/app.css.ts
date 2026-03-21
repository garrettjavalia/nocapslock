import { keyframes, style } from '@vanilla-extract/css'
import { vars } from './theme.css'

const labelFlip = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(16px) scale(0.95)',
  },
  '18%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
  '82%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
  '100%': {
    opacity: 0.88,
    transform: 'translateY(-6px) scale(1.02)',
  },
})

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

export const hero = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: 24,
  padding: '24px 0 36px',
  '@media': {
    '(max-width: 840px)': {
      flexDirection: 'column',
    },
  },
})

export const heroCopy = style({
  maxWidth: 720,
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
  fontSize: 'clamp(3rem, 8vw, 6.2rem)',
  lineHeight: 0.95,
  letterSpacing: '-0.05em',
  '@media': {
    '(max-width: 640px)': {
      fontSize: 'clamp(2.6rem, 14vw, 4rem)',
    },
  },
})

export const subduedText = style({
  color: vars.color.textSoft,
})

export const heroLead = style([
  subduedText,
  {
    maxWidth: '60ch',
    fontSize: '1.1rem',
    lineHeight: 1.7,
  },
])

export const heroActions = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  '@media': {
    '(max-width: 840px)': {
      alignSelf: 'flex-start',
    },
  },
})

const pillControl = style({
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgElevated,
  color: vars.color.text,
  borderRadius: 999,
  boxShadow: vars.shadow.panel,
  backdropFilter: 'blur(16px)',
})

export const localeSwitcher = style([
  pillControl,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '8px 10px 8px 14px',
  },
])

export const localeLabel = style({
  fontSize: '0.92rem',
  color: vars.color.textSoft,
})

export const localeSelect = style({
  border: 0,
  background: 'transparent',
  color: vars.color.text,
  outline: 'none',
  cursor: 'pointer',
})

export const themeToggle = style([
  pillControl,
  {
    padding: '12px 18px',
    cursor: 'pointer',
    '@media': {
      '(max-width: 840px)': {
        alignSelf: 'flex-start',
      },
    },
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
  minHeight: 280,
  padding: 24,
  borderRadius: 24,
  background: `radial-gradient(circle at 18% 20%, rgba(255, 163, 129, 0.34), transparent 28%), radial-gradient(circle at 84% 22%, rgba(108, 164, 255, 0.36), transparent 26%), radial-gradient(circle at 78% 72%, rgba(120, 200, 255, 0.18), transparent 24%), linear-gradient(135deg, rgba(255, 224, 211, 0.34) 0%, rgba(255, 224, 211, 0.12) 32%, rgba(188, 222, 255, 0.14) 58%, rgba(168, 210, 255, 0.3) 78%, rgba(150, 198, 255, 0.38) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.02)), ${vars.color.bgStrong}`,
  boxShadow: `inset 0 1px 0 rgba(255, 255, 255, 0.22), inset 0 -24px 48px rgba(0, 0, 0, 0.08)`,
  border: `1px solid ${vars.color.border}`,
  '@media': {
    '(max-width: 640px)': {
      minHeight: 220,
    },
  },
})

export const keycap = style({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  width: 'min(320px, 100%)',
  aspectRatio: '1.9 / 1',
  padding: 24,
  borderRadius: 30,
  background: `linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.1)), ${vars.color.bg}`,
  border: `1px solid ${vars.color.border}`,
  boxShadow: vars.shadow.keycap,
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      width: '180%',
      height: '180%',
      borderRadius: '999px',
      background:
        'radial-gradient(circle, rgba(255, 150, 103, 0.34) 0%, rgba(255, 150, 103, 0.18) 28%, rgba(108, 164, 255, 0.2) 48%, rgba(108, 164, 255, 0.1) 62%, transparent 76%)',
      filter: 'blur(22px)',
      transform: 'translateZ(0)',
      pointerEvents: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 12,
      zIndex: 1,
      borderRadius: 22,
      border: '1px solid rgba(255, 255, 255, 0.28)',
    },
  },
  '@media': {
    '(max-width: 640px)': {
      borderRadius: 24,
    },
  },
})

export const keycapLabel = style({
  display: 'inline-block',
  position: 'relative',
  zIndex: 2,
  fontSize: 'clamp(1.8rem, 5vw, 3rem)',
  fontWeight: 700,
  letterSpacing: '-0.05em',
  animation: `${labelFlip} 1.8s ease`,
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
    marginBottom: 0,
  },
])

export const demoTextarea = style({
  width: '100%',
  minHeight: 240,
  resize: 'vertical',
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
