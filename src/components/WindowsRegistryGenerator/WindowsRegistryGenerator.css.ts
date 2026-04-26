import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const generator = style({
  display: 'grid',
  gap: 14,
  padding: 18,
  borderRadius: 20,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgElevated,
  scrollMarginTop: 128,
  transition: 'border-color 160ms ease, box-shadow 160ms ease',
  selectors: {
    '&:target': {
      borderColor: vars.color.accent,
      boxShadow: `0 0 0 3px ${vars.color.accentSoft}`,
    },
  },
})

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  flexWrap: 'wrap',
})

export const headerBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
})

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  flexWrap: 'wrap',
})

export const title = style({
  margin: 0,
  fontSize: '1.05rem',
})

export const resetButton = style({
  minHeight: vars.control.height,
  padding: `0 ${vars.control.paddingX}`,
  borderRadius: vars.control.radius,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgStrong,
  color: vars.color.text,
  cursor: 'pointer',
  fontWeight: 600,
  whiteSpace: 'nowrap',
})

export const pathText = style({
  margin: 0,
  color: vars.color.textSoft,
  lineHeight: 1.6,
  wordBreak: 'break-word',
})

export const mappingCard = style({
  display: 'grid',
  gap: 12,
})

export const mappingHeader = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) auto minmax(220px, 260px) auto',
  gap: 12,
  alignItems: 'center',
  color: vars.color.textSoft,
  fontSize: '0.82rem',
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  '@media': {
    '(max-width: 720px)': {
      display: 'none',
    },
  },
})

export const mappingList = style({
  display: 'grid',
  gap: 10,
})

export const mappingRow = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) auto minmax(220px, 260px) auto',
  gap: 12,
  alignItems: 'center',
  '@media': {
    '(max-width: 720px)': {
      gridTemplateColumns: '1fr auto',
      gridTemplateRows: 'auto auto',
    },
  },
})

export const keyCellWrapper = style({
  '@media': {
    '(max-width: 720px)': {
      gridColumn: '1',
      gridRow: '1',
    },
  },
})

export const rowArrowWrapper = style({
  '@media': {
    '(max-width: 720px)': {
      display: 'none',
    },
  },
})

export const targetSelectWrapper = style({
  '@media': {
    '(max-width: 720px)': {
      gridColumn: '1',
      gridRow: '2',
    },
  },
})

export const removeButtonWrapper = style({
  '@media': {
    '(max-width: 720px)': {
      gridColumn: '2',
      gridRow: '1 / 3',
      display: 'flex',
      alignItems: 'center',
    },
  },
})

export const removeButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 36,
  height: 36,
  borderRadius: 999,
  border: `1px solid ${vars.color.border}`,
  background: 'transparent',
  color: vars.color.textSoft,
  cursor: 'pointer',
  fontSize: '1rem',
  lineHeight: 1,
  transition: 'background 120ms ease, color 120ms ease',
  selectors: {
    '&:hover': {
      background: vars.color.bgStrong,
      color: vars.color.text,
    },
  },
})

export const removeIcon = style({
  display: 'block',
  flexShrink: 0,
})

export const addSourceRow = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  paddingTop: 4,
})

export const addSourceSelect = style({
  display: 'inline-block',
  width: '100%',
  height: vars.control.height,
  minHeight: vars.control.height,
  padding: '0 40px 0 14px',
  borderRadius: vars.control.radius,
  border: `1px dashed ${vars.color.border}`,
  background: vars.color.bg,
  color: vars.color.textSoft,
  outline: 'none',
  cursor: 'pointer',
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  backgroundImage: `linear-gradient(45deg, ${vars.color.bg} 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, ${vars.color.bg} 50%)`,
  backgroundPosition: 'calc(100% - 18px) 19px, calc(100% - 12px) 19px',
  backgroundSize: '6px 6px, 6px 6px',
  backgroundRepeat: 'no-repeat',
  selectors: {
    '&:focus': {
      borderColor: vars.color.accent,
    },
  },
})

export const keyCell = style({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  minWidth: 0,
  flexWrap: 'wrap',
})

export const codeBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: 28,
  padding: '0 10px',
  borderRadius: 999,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bg,
  color: vars.color.textSoft,
  fontSize: '0.84rem',
  fontWeight: 600,
  fontFamily: '"IBM Plex Mono", "SFMono-Regular", "Menlo", monospace',
})

export const rowArrow = style({
  display: 'grid',
  placeItems: 'center',
  color: vars.color.textSoft,
  fontSize: '1.2rem',
  lineHeight: 1,
  '@media': {
    '(max-width: 720px)': {
      display: 'none',
    },
  },
})

export const targetSelect = style({
  display: 'inline-block',
  width: '100%',
  height: vars.control.height,
  minHeight: vars.control.height,
  padding: '0 40px 0 14px',
  borderRadius: vars.control.radius,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgStrong,
  color: vars.color.text,
  outline: 'none',
  cursor: 'pointer',
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  backgroundImage: `linear-gradient(45deg, ${vars.color.bgStrong} 50%, currentColor 50%), linear-gradient(135deg, currentColor 50%, ${vars.color.bgStrong} 50%)`,
  backgroundPosition: 'calc(100% - 18px) 19px, calc(100% - 12px) 19px',
  backgroundSize: '6px 6px, 6px 6px',
  backgroundRepeat: 'no-repeat',
})

export const previewGrid = style({
  display: 'grid',
  gap: 14,
  gridTemplateColumns: '1fr',
})

export const previewCard = style({
  display: 'grid',
  gap: 10,
})

export const previewLabel = style({
  margin: 0,
  color: vars.color.textSoft,
  fontSize: '0.82rem',
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
})
