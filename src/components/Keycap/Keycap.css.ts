import { createVar, keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

const keycapAnimationDuration = '1.6s'
const keycapPadding = createVar()
const keycapRadius = createVar()
const keycapInnerInset = createVar()
const keycapInnerRadius = createVar()
const keycapCrossInset = createVar()
const keycapCrossTop = createVar()
const keycapCrossHeight = createVar()
const keycapLabelFontSize = createVar()
const keycapLabelWideFontSize = createVar()
const commandPaddingInline = createVar()
const commandPaddingBlock = createVar()
const commandGlyphFontSize = createVar()
const commandLabelFontSize = createVar()

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
  pointerEvents: 'none',
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
  vars: {
    [keycapPadding]: 'clamp(12px, 15cqmin, 56px)',
    [keycapRadius]: 'clamp(18px, 18.75cqmin, 72px)',
    [keycapInnerInset]: 'clamp(6px, 7.5cqmin, 28px)',
    [keycapInnerRadius]: 'clamp(10px, 13.75cqmin, 52px)',
    [keycapCrossInset]: '12%',
    [keycapCrossTop]: '49%',
    [keycapCrossHeight]: 'clamp(2px, 1.875cqmin, 5px)',
    [keycapLabelFontSize]: 'clamp(1.2rem, 30cqmin, 5rem)',
    [keycapLabelWideFontSize]: 'clamp(1.15rem, 30.5cqmin, 5rem)',
    [commandPaddingInline]: 'clamp(10px, 11.25cqmin, 36px)',
    [commandPaddingBlock]: 'clamp(8px, 8.75cqmin, 28px)',
    [commandGlyphFontSize]: 'clamp(1.3rem, 23.5cqmin, 4.5rem)',
    [commandLabelFontSize]: 'clamp(1.2rem, 23.5cqmin, 4.5rem)',
  },
  position: 'relative',
  width: '100%',
  maxWidth: 320,
  minWidth: 0,
  aspectRatio: '2 / 1',
  containerType: 'size',
})

export const keycapSurface = style({
  position: 'relative',
  display: 'grid',
  alignItems: 'stretch',
  justifyItems: 'stretch',
  width: '100%',
  height: '100%',
  minWidth: 0,
  padding: keycapPadding,
  borderRadius: keycapRadius,
  background: vars.color.keycapBg,
  border: `1px solid ${vars.color.keycapBorder}`,
  boxShadow: 'inset 0 -10px 16px rgba(0, 0, 0, 0.06)',
  userSelect: 'none',
  overflow: 'hidden',
  selectors: {
    '&::before': {
      content: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: keycapInnerInset,
      zIndex: 1,
      borderRadius: keycapInnerRadius,
      border: `1px solid ${vars.color.keycapBorder}`,
    },
  },
  '@supports': {
    '(color: color-mix(in srgb, black, white))': {
      boxShadow: `inset 0 -10px 16px color-mix(in srgb, ${vars.color.text} 8%, transparent)`,
    },
  },
})

export const keycapBadge = style({
  vars: {
    [keycapPadding]: 'clamp(10px, 10cqmin, 18px)',
    [keycapRadius]: 'clamp(12px, 12cqmin, 28px)',
    [keycapInnerInset]: 'clamp(5px, 4.5cqmin, 10px)',
    [keycapInnerRadius]: 'clamp(8px, 7cqmin, 18px)',
    [keycapCrossInset]: '14%',
    [keycapCrossTop]: '50%',
    [keycapCrossHeight]: 'clamp(2px, 1.75cqmin, 4px)',
    [keycapLabelFontSize]: 'clamp(1rem, 16cqmin, 2.6rem)',
    [keycapLabelWideFontSize]: 'clamp(0.95rem, 14.5cqmin, 2.2rem)',
    [commandPaddingInline]: 'clamp(8px, 6cqmin, 14px)',
    [commandPaddingBlock]: 'clamp(6px, 5cqmin, 12px)',
    [commandGlyphFontSize]: 'clamp(1.1rem, 13.76cqmin, 2.2rem)',
    [commandLabelFontSize]: 'clamp(1rem, 13.76cqmin, 2.2rem)',
  },
  width: '100%',
  height: '100%',
  maxWidth: 'none',
  aspectRatio: 'auto',
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
      left: keycapCrossInset,
      right: keycapCrossInset,
      top: keycapCrossTop,
      height: keycapCrossHeight,
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
  maxWidth: '100%',
  fontSize: keycapLabelFontSize,
  fontWeight: 700,
  lineHeight: 0.92,
  letterSpacing: '-0.05em',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  willChange: 'transform, opacity',
  animation: `${labelFlip} ${keycapAnimationDuration} ease`,
})

export const keycapLabelStatic = style({
  animation: 'none',
})

export const keycapLabelWide = style({
  fontSize: keycapLabelWideFontSize,
  textTransform: 'none',
})

export const keycapFace = style({
  position: 'relative',
  zIndex: 2,
  display: 'grid',
  placeItems: 'center',
  width: '100%',
  height: '100%',
  minWidth: 0,
  minHeight: 0,
})

export const commandKeycap = style([
  keycapFace,
  {
    gridTemplateRows: '1fr auto',
    padding: `${commandPaddingBlock} ${commandPaddingInline}`,
  },
])

export const commandGlyphRow = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  minWidth: 0,
  minHeight: 0,
})

export const commandGlyphRight = style({
  fontSize: commandGlyphFontSize,
  lineHeight: 1,
  letterSpacing: '-0.06em',
  textAlign: 'right',
  willChange: 'transform, opacity',
  animation: `${labelFlip} ${keycapAnimationDuration} ease`,
})

export const commandLabel = style({
  alignSelf: 'end',
  justifySelf: 'center',
  maxWidth: '100%',
  paddingLeft: 0,
  fontSize: commandLabelFontSize,
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: '-0.04em',
  textAlign: 'center',
  whiteSpace: 'nowrap',
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
  userSelect: 'text',
  WebkitUserSelect: 'text',
  position: 'relative',
  zIndex: 0,
  selectors: {
    ':root[data-theme="dark"] &': {
      boxShadow: 'inset 0 -4px 8px rgba(0, 0, 0, 0.18)',
    },
  },
})

export const inlineMiniKeycapSelectable = style({
  userSelect: 'text',
  WebkitUserSelect: 'text',
})

export const inlineMiniKeycapNonSelectable = style({
  userSelect: 'none',
  WebkitUserSelect: 'none',
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
