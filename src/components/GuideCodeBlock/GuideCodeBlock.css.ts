import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const wrap = style({
  position: 'relative',
})

export const actions = style({
  position: 'absolute',
  top: 10,
  right: 10,
  zIndex: 1,
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
})

export const codeBlock = style({
  margin: 0,
  padding: '54px 16px 16px',
  borderRadius: 18,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bg,
  color: vars.color.text,
  overflowX: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  lineHeight: 1.6,
})
