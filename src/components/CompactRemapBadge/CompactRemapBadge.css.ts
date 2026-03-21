import { style } from '@vanilla-extract/css'

export const compactHeroBadge = style({
  position: 'absolute',
  left: 0,
  top: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 40,
  padding: 0,
  border: 0,
  background: 'transparent',
  boxShadow: 'none',
  opacity: 'var(--compact-opacity, 0)',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  userSelect: 'none',
  willChange: 'opacity',
  transition: 'opacity 120ms linear',
})
