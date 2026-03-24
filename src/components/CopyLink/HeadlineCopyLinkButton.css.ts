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
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgStrong,
  boxShadow: `inset 0 1px 0 ${vars.color.bgElevated}`,
  color: vars.color.textSoft,
  cursor: 'pointer',
  flexShrink: 0,
  transition: 'border-color 140ms ease, background 140ms ease, color 140ms ease, box-shadow 140ms ease',
  selectors: {
    '&:hover': {
      background: vars.color.accentSoft,
      borderColor: vars.color.accent,
      color: vars.color.accentStrong,
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.accent,
      boxShadow: `0 0 0 3px ${vars.color.accentSoft}`,
      color: vars.color.accentStrong,
    },
    '&[data-copied="true"]': {
      borderColor: vars.color.accent,
      background: vars.color.accentSoft,
      color: vars.color.accentStrong,
    },
  },
})

export const icon = style({
  width: 15,
  height: 15,
})
