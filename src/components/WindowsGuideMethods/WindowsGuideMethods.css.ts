import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const wrapper = style({
  display: 'grid',
  gap: 18,
})

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
  display: 'grid',
  gap: 12,
  padding: 16,
  borderRadius: 20,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgElevated,
  color: vars.color.text,
  textAlign: 'left',
  cursor: 'pointer',
  appearance: 'none',
  WebkitAppearance: 'none',
  boxShadow: 'none',
  transition: 'border-color 140ms ease, background 140ms ease, box-shadow 140ms ease',
})

export const comparisonBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
})

export const comparisonCardActive = style({
  borderColor: vars.color.accent,
  background: vars.color.bgStrong,
  boxShadow: `0 0 0 3px ${vars.color.accentSoft}`,
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
  fontSize: '0.8rem',
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
})

export const bulletList = style({
  margin: 0,
  paddingLeft: 18,
  display: 'grid',
  gap: 8,
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
