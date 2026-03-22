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
    [keycapPadding]: '24px',
    [keycapRadius]: '30px',
    [keycapInnerInset]: '12px',
    [keycapInnerRadius]: '22px',
    [keycapCrossInset]: '12%',
    [keycapCrossTop]: '49%',
    [keycapCrossHeight]: '3px',
    [keycapLabelFontSize]: 'clamp(1.8rem, 5vw, 3rem)',
    [keycapLabelWideFontSize]: 'clamp(1.95rem, 4.9vw, 3.05rem)',
    [commandPaddingInline]: '18px',
    [commandPaddingBlock]: '14px',
    [commandGlyphFontSize]: '2.35rem',
    [commandLabelFontSize]: '2.35rem',
  },
  position: 'relative',
  display: 'grid',
  placeItems: 'center',
  width: 'min(320px, 100%)',
  aspectRatio: '1.9 / 1',
  padding: keycapPadding,
  borderRadius: keycapRadius,
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
      inset: keycapInnerInset,
      zIndex: 1,
      borderRadius: keycapInnerRadius,
      border: `1px solid ${vars.color.keycapBorder}`,
    },
  },
  '@media': {
    '(max-width: 640px)': {
      vars: {
        [keycapRadius]: '24px',
      },
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
    [keycapPadding]: '14px',
    [keycapRadius]: '24px',
    [keycapInnerInset]: '8px',
    [keycapInnerRadius]: '14px',
    [keycapCrossInset]: '14%',
    [keycapCrossTop]: '50%',
    [keycapCrossHeight]: '2.5px',
    [keycapLabelFontSize]: 'clamp(1.35rem, 2.05vw, 2rem)',
    [keycapLabelWideFontSize]: 'clamp(1.3rem, 1.75vw, 1.8rem)',
    [commandPaddingInline]: '12px',
    [commandPaddingBlock]: '10px',
    [commandGlyphFontSize]: '1.72rem',
    [commandLabelFontSize]: '1.72rem',
  },
  width: '100%',
  height: '100%',
  aspectRatio: 'auto',
  overflow: 'hidden',
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
  fontSize: keycapLabelFontSize,
  fontWeight: 700,
  letterSpacing: '-0.05em',
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

export const commandKeycap = style({
  position: 'relative',
  zIndex: 2,
  display: 'grid',
  gridTemplateRows: '1fr auto',
  width: '100%',
  height: '100%',
  padding: `${commandPaddingBlock} ${commandPaddingInline}`,
})

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
  willChange: 'transform, opacity',
  animation: `${labelFlip} ${keycapAnimationDuration} ease`,
})

export const commandLabel = style({
  alignSelf: 'end',
  justifySelf: 'center',
  paddingLeft: 0,
  fontSize: commandLabelFontSize,
  fontWeight: 700,
  lineHeight: 1,
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
