import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const button = style({
  position: 'relative',
  zIndex: 2,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  height: 30,
  padding: 0,
  borderRadius: 999,
  border: '1px solid transparent',
  background: 'transparent',
  color: vars.color.textSoft,
  cursor: 'pointer',
  flexShrink: 0,
  transition: 'border-color 140ms ease, background 140ms ease, color 140ms ease, box-shadow 140ms ease',
  selectors: {
    '&:hover': {
      background: vars.color.bg,
      color: vars.color.text,
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.accent,
      boxShadow: `0 0 0 3px ${vars.color.accentSoft}`,
      color: vars.color.accentStrong,
    },
    '&[data-copied="true"]': {
      background: vars.color.accentSoft,
      color: vars.color.accentStrong,
    },
  },
})

export const icon = style({
  width: 15,
  height: 15,
})
