import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

const keycapAnimationDuration = '1.6s'

const labelFlip = keyframes({
  '0%': {
    opacity: 0,
    transform: 'scale(0.88)',
  },
  '18%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '82%': {
    opacity: 1,
    transform: 'scale(1)',
  },
  '100%': {
    opacity: 0.88,
    transform: 'scale(1)',
  },
})

export const inlineMiniKeycapWrap = style({
  position: 'relative',
  display: 'inline-flex',
  verticalAlign: 'middle',
})

export const inlineMiniKeycapCross = style({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
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

export const keycap = style({
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  width: 'min(320px, 100%)',
  aspectRatio: '1.9 / 1',
  padding: 24,
  borderRadius: 30,
  background: vars.color.keycapBg,
  border: `1px solid ${vars.color.keycapBorder}`,
  boxShadow: 'inset 0 -10px 16px rgba(0, 0, 0, 0.06)',
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
      border: `1px solid ${vars.color.keycapBorder}`,
    },
  },
  '@media': {
    '(max-width: 640px)': {
      borderRadius: 24,
    },
  },
  '@supports': {
    '(color: color-mix(in srgb, black, white))': {
      boxShadow: `inset 0 -10px 16px color-mix(in srgb, ${vars.color.text} 8%, transparent)`,
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
  willChange: 'transform, opacity',
  animation: `${labelFlip} ${keycapAnimationDuration} ease`,
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
  willChange: 'transform, opacity',
  animation: `${labelFlip} ${keycapAnimationDuration} ease`,
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
  willChange: 'transform, opacity',
  animation: `${labelFlip} ${keycapAnimationDuration} ease`,
})

export const commandLabel = style({
  alignSelf: 'end',
  justifySelf: 'center',
  paddingLeft: 0,
  fontSize: '1.95rem',
  fontWeight: 700,
  letterSpacing: '-0.04em',
  textTransform: 'lowercase',
  willChange: 'transform, opacity',
  animation: `${labelFlip} ${keycapAnimationDuration} ease`,
})

export const inlineMiniKeycap = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  minWidth: 78,
  minHeight: 42,
  padding: '8px 14px',
  borderRadius: 14,
  border: `1px solid ${vars.color.keycapBorder}`,
  background: vars.color.keycapBg,
  color: vars.color.text,
  fontSize: '0.95rem',
  fontWeight: 700,
  letterSpacing: '-0.03em',
  boxShadow: 'inset 0 -6px 10px rgba(0, 0, 0, 0.06)',
  userSelect: 'none',
  position: 'relative',
  zIndex: 0,
  selectors: {
    ':root[data-theme="dark"] &': {
      boxShadow: 'inset 0 -4px 8px rgba(0, 0, 0, 0.18)',
    },
  },
})

export const inlineMiniKeycapSmall = style([
  inlineMiniKeycap,
  {
    minWidth: 58,
    minHeight: 32,
    padding: '4px 10px',
    borderRadius: 11,
    fontSize: '0.82rem',
  },
])

export const inlineMiniKeycapXSmall = style([
  inlineMiniKeycap,
  {
    minWidth: 28,
    minHeight: 22,
    padding: '1px 6px',
    borderRadius: 8,
    fontSize: '0.66rem',
  },
])

export const inlineMiniKeycapCommand = style([
  inlineMiniKeycap,
  {
    minWidth: 102,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: '8px 12px',
  },
])

export const inlineMiniKeycapCommandSmall = style([
  inlineMiniKeycapCommand,
  {
    minWidth: 82,
    minHeight: 32,
    padding: '4px 10px',
    borderRadius: 11,
    gap: 8,
  },
])

export const inlineMiniKeycapCommandXSmall = style([
  inlineMiniKeycapCommand,
  {
    minWidth: 52,
    minHeight: 22,
    padding: '1px 6px',
    borderRadius: 8,
    gap: 4,
  },
])

export const inlineMiniCommandGlyph = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.05rem',
  lineHeight: 1,
})

export const inlineMiniCommandGlyphSmall = style([
  inlineMiniCommandGlyph,
  {
    fontSize: '0.92rem',
  },
])

export const inlineMiniCommandGlyphXSmall = style([
  inlineMiniCommandGlyph,
  {
    fontSize: '0.72rem',
  },
])

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

export const inlineMiniCommandLabelSmall = style([
  inlineMiniCommandLabel,
  {
    fontSize: '0.76rem',
  },
])

export const inlineMiniCommandLabelXSmall = style([
  inlineMiniCommandLabel,
  {
    fontSize: '0.58rem',
    letterSpacing: '-0.02em',
  },
])
