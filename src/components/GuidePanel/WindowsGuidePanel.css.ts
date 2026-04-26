import { createVar, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

const methodHighlightBorder = createVar()
const methodHighlightRing = createVar()

export const intro = style({
  margin: 0,
  color: vars.color.textSoft,
  lineHeight: 1.65,
})

export const comparisonGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: 12,
  '@media': {
    '(max-width: 760px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const comparisonCard = style({
  vars: {
    [methodHighlightBorder]: '#df9c87',
    [methodHighlightRing]: '#f8e8e1',
  },
  position: 'relative',
  display: 'grid',
  padding: 16,
  borderRadius: 20,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgElevated,
  color: vars.color.text,
  textAlign: 'left',
  boxShadow: 'none',
  scrollMarginTop: 128,
  transition: 'border-color 140ms ease, background 140ms ease, box-shadow 140ms ease',
  selectors: {
    ':root[data-theme="dark"] &': {
      vars: {
        [methodHighlightBorder]: '#975f46',
        [methodHighlightRing]: '#4b342a',
      },
    },
    '&:target': {
      borderColor: methodHighlightBorder,
      boxShadow: `0 0 0 3px ${methodHighlightRing}`,
    },
  },
})

export const comparisonContent = style({
  position: 'relative',
  zIndex: 2,
  display: 'grid',
  gap: 16,
  pointerEvents: 'none',
})

export const comparisonOverlayLink = style({
  position: 'absolute',
  inset: 0,
  borderRadius: 20,
  zIndex: 1,
  selectors: {
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 4px ${methodHighlightRing}`,
    },
  },
})

export const comparisonBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

export const comparisonTitleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  flexWrap: 'wrap',
})

export const comparisonCopyButton = style({
  pointerEvents: 'auto',
})

export const comparisonCardActive = style({
  borderColor: methodHighlightBorder,
  background: vars.color.bgStrong,
  boxShadow: `0 0 0 3px ${methodHighlightRing}`,
})

export const comparisonTitle = style({
  margin: 0,
  fontSize: '1.02rem',
})

export const comparisonSummary = style({
  margin: 0,
  color: vars.color.textSoft,
  lineHeight: 1.6,
})

export const comparisonLabel = style({
  margin: 0,
  color: vars.color.textSoft,
  fontSize: '0.84rem',
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
})

export const bulletList = style({
  margin: 0,
  paddingLeft: 18,
  display: 'grid',
  gap: 6,
})

export const bulletItem = style({
  color: vars.color.textSoft,
  lineHeight: 1.55,
})

export const detailStack = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})
