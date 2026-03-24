import { createVar, globalStyle, keyframes, style } from '@vanilla-extract/css'
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
const appleModifierPaddingInline = createVar()
const appleModifierPaddingBlock = createVar()
const appleModifierGlyphFontSize = createVar()
const appleModifierLabelFontSize = createVar()

const faceFlip = keyframes({
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

const animatedFaceItem = {
  willChange: 'transform, opacity' as const,
  animation: `${faceFlip} ${keycapAnimationDuration} ease`,
}

// Inline mini keycaps
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
      background: `linear-gradient(90deg, ${vars.color.keycapStrikeStart}, ${vars.color.keycapStrikeEnd})`,
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
    [appleModifierPaddingInline]: 'clamp(10px, 11.25cqmin, 36px)',
    [appleModifierPaddingBlock]: 'clamp(8px, 8.75cqmin, 28px)',
    [appleModifierGlyphFontSize]: 'clamp(1.3rem, 23.5cqmin, 4.5rem)',
    [appleModifierLabelFontSize]: 'clamp(1.2rem, 23.5cqmin, 4.5rem)',
  },
  position: 'relative',
  width: '100%',
  maxWidth: 320,
  minWidth: 0,
  aspectRatio: '2 / 1',
  containerType: 'size',
})

// Large keycap shell
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
  boxShadow: vars.shadow.keycap,
  userSelect: 'none',
  overflow: 'hidden',
  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: keycapInnerInset,
      zIndex: 1,
      borderRadius: keycapInnerRadius,
      border: `1px solid ${vars.color.keycapBorder}`,
    },
  },
})

export const keycapMuted = style({
  color: vars.color.textSoft,
})

globalStyle(`${keycapMuted} .${keycapSurface}`, {
  background: vars.color.bgElevated,
  borderColor: vars.color.border,
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
      background: `linear-gradient(90deg, ${vars.color.keycapStrikeStart}, ${vars.color.keycapStrikeEnd})`,
      transform: 'rotate(-12deg)',
    },
  },
})

// Large keycap faces
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
  ...animatedFaceItem,
})

export const keycapFaceStatic = style({
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

export const keycapFaceContent = style({
  display: 'grid',
  placeItems: 'center',
  justifySelf: 'center',
  alignSelf: 'center',
  inlineSize: 'fit-content',
  minInlineSize: '60%',
  maxInlineSize: '100%',
  blockSize: '100%',
  minWidth: 0,
  minHeight: 0,
})

export const appleModifierFace = style([
  keycapFaceContent,
  {
    gridTemplateRows: '1fr auto',
    alignItems: 'stretch',
    justifyItems: 'stretch',
    padding: `${appleModifierPaddingBlock} ${appleModifierPaddingInline}`,
  },
])

export const appleModifierGlyphRow = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  width: '100%',
  minWidth: 0,
  minHeight: 0,
})

export const appleModifierGlyph = style({
  fontSize: appleModifierGlyphFontSize,
  lineHeight: 1,
  letterSpacing: '-0.06em',
  textAlign: 'right',
  ...animatedFaceItem,
})

export const appleModifierLabel = style({
  alignSelf: 'end',
  justifySelf: 'center',
  maxWidth: '100%',
  paddingLeft: 0,
  fontSize: appleModifierLabelFontSize,
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: '-0.04em',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  textTransform: 'lowercase',
  ...animatedFaceItem,
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
  boxShadow: vars.shadow.keycapMini,
  userSelect: 'text',
  WebkitUserSelect: 'text',
  position: 'relative',
  zIndex: 0,
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
