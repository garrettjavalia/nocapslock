import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const section = style({
  display: 'grid',
  gap: 10,
})

export const label = style({
  marginBottom: 0,
  color: vars.color.textSoft,
  fontSize: '0.82rem',
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
})

export const linkList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
})

export const sourceLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  minHeight: 36,
  padding: '0 14px',
  borderRadius: 999,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgElevated,
  color: vars.color.text,
  textDecoration: 'none',
  fontWeight: 600,
})

export const stepList = style({
  display: 'grid',
  gap: 18,
})

export const stepItem = style({
  display: 'grid',
  gap: 8,
})

export const stepTitle = style({
  marginBottom: 8,
  fontSize: '1rem',
})

export const stepBody = style({
  marginBottom: 0,
  color: vars.color.textSoft,
  lineHeight: 1.65,
})

export const notesList = style({
  margin: 0,
  paddingLeft: 18,
  display: 'grid',
  gap: 8,
  color: vars.color.textSoft,
})

export const noteItem = style({
  lineHeight: 1.6,
})
