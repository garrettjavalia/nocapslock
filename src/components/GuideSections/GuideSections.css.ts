import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

export const label = style({
  margin: 0,
  color: vars.color.textSoft,
  fontSize: '1.12rem',
  fontWeight: 700,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
})

export const sublabel = style({
  margin: 0,
  color: vars.color.textSoft,
  fontSize: '0.84rem',
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
  transition: 'border-color 140ms ease, background 140ms ease, color 140ms ease, box-shadow 140ms ease',
  selectors: {
    '&:hover': {
      borderColor: vars.color.accent,
      background: vars.color.accentSoft,
      color: vars.color.accentStrong,
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.accent,
      boxShadow: `0 0 0 3px ${vars.color.accentSoft}`,
      color: vars.color.accentStrong,
    },
  },
})

export const inlineLink = style({
  color: vars.color.accentStrong,
  fontWeight: 600,
  textDecorationLine: 'underline',
  textDecorationThickness: '0.08em',
  textUnderlineOffset: '0.14em',
  selectors: {
    '&:hover': {
      color: vars.color.accent,
    },
    '&:focus-visible': {
      outline: `2px solid ${vars.color.accent}`,
      outlineOffset: 2,
      borderRadius: 4,
    },
  },
})

export const stepList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
})

export const stepItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
})

export const substepGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 18,
  paddingLeft: 18,
  borderLeft: `1px solid ${vars.color.border}`,
})

export const stepTitle = style({
  margin: 0,
  fontSize: '1rem',
  lineHeight: 1.45,
})

export const stepBody = style({
  margin: 0,
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
