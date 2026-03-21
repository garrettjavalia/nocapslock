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

export const topbarActions = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-end',
  gap: 12,
  flexWrap: 'wrap',
})

export const compactHeroBadge = style({
  position: 'absolute',
  left: 0,
  top: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
  minHeight: 40,
  padding: 0,
  border: 0,
  background: 'transparent',
  boxShadow: 'none',
  opacity: 'var(--compact-opacity, 0)',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  userSelect: 'none',
  willChange: 'opacity',
  transition: 'opacity 120ms linear',
})

export const compactHeroMiniKeycap = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 88,
  minHeight: 40,
  padding: '8px 12px',
  borderRadius: 14,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bg,
  color: vars.color.text,
  boxShadow: 'inset 0 -6px 10px rgba(0, 0, 0, 0.06)',
})

export const compactHeroBadgeLabel = style({
  position: 'relative',
  zIndex: 1,
  fontSize: '0.9rem',
  lineHeight: 1,
  letterSpacing: '-0.03em',
  fontWeight: 700,
})

export const compactHeroMiniArrow = style({
  color: vars.color.textSoft,
  fontSize: '0.95rem',
  lineHeight: 1,
})

export const compactHeroBadgeTarget = style({
  position: 'relative',
  zIndex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 34,
  fontSize: '0.92rem',
  lineHeight: 1,
  fontWeight: 700,
  letterSpacing: '-0.03em',
})

export const compactHeroBadgeCross = style({
  position: 'absolute',
  inset: 0,
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '14%',
      right: '14%',
      top: '51%',
      height: 2.5,
      borderRadius: 999,
      background: 'linear-gradient(90deg, rgba(217, 93, 57, 0.92), rgba(217, 93, 57, 0.55))',
      transform: 'rotate(-11deg)',
    },
  },
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

const controlBase = style({
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgElevated,
  color: vars.color.text,
  minHeight: vars.control.height,
  borderRadius: vars.control.radius,
  boxShadow: vars.shadow.panel,
  backdropFilter: 'blur(16px)',
  transition: 'background-color 180ms ease, border-color 180ms ease, transform 180ms ease',
})

export const localeSwitcher = style([
  controlBase,
  {
    display: 'flex',
    alignItems: 'center',
    gap: vars.control.gap,
    padding: `0 ${vars.control.paddingX}`,
  },
])

export const githubLink = style([
  controlBase,
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.control.gap,
    padding: `0 ${vars.control.paddingX}`,
    color: vars.color.text,
    textDecoration: 'none',
    fontWeight: 600,
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
  minHeight: '100%',
})

export const themeToggle = style([
  controlBase,
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: vars.control.height,
    height: vars.control.height,
    padding: 0,
    cursor: 'pointer',
  },
])

export const themeToggleTrack = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  width: 28,
  height: 28,
  justifyContent: 'center',
})

export const themeToggleThumb = style({
  display: 'grid',
  placeItems: 'center',
  width: 24,
  height: 24,
  borderRadius: 999,
  background: 'transparent',
  color: vars.color.textSoft,
  transition: 'color 180ms ease, transform 180ms ease',
  selectors: {
    ':root[data-theme="dark"] &': {
      color: vars.color.textSoft,
    },
    [`${themeToggle}:hover &`]: {
      color: vars.color.text,
      transform: 'scale(1.04)',
    },
  },
})

export const themeIcon = style({
  width: 15,
  height: 15,
})

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

export const keycap = style({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  width: 'min(320px, 100%)',
  aspectRatio: '1.9 / 1',
  padding: 24,
  borderRadius: 30,
  background: vars.color.bg,
  border: `1px solid ${vars.color.border}`,
  boxShadow: 'none',
  userSelect: 'none',
  selectors: {
    '&::before': {
      content: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 12,
      zIndex: 1,
      borderRadius: 22,
      border: `1px solid ${vars.color.border}`,
    },
  },
  '@media': {
    '(max-width: 640px)': {
      borderRadius: 24,
    },
  },
})

export const keycapMuted = style({
  opacity: 0.86,
  filter: 'saturate(0.78)',
})

export const keycapCross = style({
  position: 'absolute',
  inset: 0,
  zIndex: 3,
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '12%',
      right: '12%',
      top: '49%',
      height: 3,
      borderRadius: 999,
      background: 'linear-gradient(90deg, rgba(217, 93, 57, 0.9), rgba(217, 93, 57, 0.5))',
      transform: 'rotate(-12deg)',
      boxShadow: '0 0 12px rgba(217, 93, 57, 0.18)',
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

export const keycapLabelStatic = style({
  animation: 'none',
})

export const keycapLabelWide = style({
  fontSize: 'clamp(1.7rem, 4.6vw, 2.7rem)',
  textTransform: 'none',
})

export const commandKeycap = style({
  position: 'relative',
  zIndex: 2,
  display: 'grid',
  width: '100%',
  height: '100%',
  padding: '22px 20px 18px',
})

const appleModifierGlyphBase = style({
  position: 'absolute',
  top: 20,
  fontSize: '2.15rem',
  lineHeight: 1,
  letterSpacing: '-0.06em',
  animation: `${labelFlip} 1.8s ease`,
})

export const commandGlyphLeft = style([
  appleModifierGlyphBase,
  {
    left: 22,
  },
])

export const commandGlyphRight = style([
  appleModifierGlyphBase,
  {
    right: 22,
  },
])

export const commandGlyph = style({
  justifySelf: 'start',
  alignSelf: 'start',
  fontSize: '2.35rem',
  lineHeight: 1,
  letterSpacing: '-0.06em',
  animation: `${labelFlip} 1.8s ease`,
})

export const commandLabel = style({
  alignSelf: 'end',
  justifySelf: 'center',
  fontSize: '1.95rem',
  fontWeight: 700,
  letterSpacing: '-0.04em',
  textTransform: 'lowercase',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    flexWrap: 'wrap',
    marginBottom: 0,
  },
])

export const inlineMiniKeycap = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 78,
  minHeight: 42,
  padding: '8px 14px',
  borderRadius: 14,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bg,
  color: vars.color.text,
  fontSize: '0.95rem',
  fontWeight: 700,
  letterSpacing: '-0.03em',
  boxShadow: 'inset 0 -6px 10px rgba(0, 0, 0, 0.06)',
  userSelect: 'none',
})

export const inlineMiniKeycapCommand = style([
  inlineMiniKeycap,
  {
    minWidth: 102,
    justifyContent: 'center',
    gap: 10,
    padding: '8px 12px',
  },
])

export const inlineMiniCommandGlyph = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.05rem',
  lineHeight: 1,
})

export const inlineMiniCommandLabel = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.88rem',
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: '-0.03em',
  textTransform: 'lowercase',
})

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
