import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 18,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bg,
  overflow: 'hidden',
})

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  flexWrap: 'wrap',
  padding: '12px 16px',
  borderBottom: `1px solid ${vars.color.border}`,
})

export const filename = style({
  margin: 0,
  color: vars.color.textSoft,
  fontSize: '0.82rem',
  fontWeight: 700,
  letterSpacing: '0.04em',
})

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
})

export const button = style({
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgElevated,
  color: vars.color.text,
  minHeight: 32,
  padding: '0 12px',
  borderRadius: 999,
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '0.86rem',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.48,
    },
  },
})

export const codeBlock = style({
  margin: 0,
  padding: '16px',
  color: vars.color.text,
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  lineHeight: 1.6,
})

export const placeholder = style({
  margin: 0,
  padding: '16px',
  color: vars.color.textSoft,
  lineHeight: 1.6,
})
