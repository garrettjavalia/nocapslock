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
  background: 'none',
  boxShadow: 'none',
  transform: 'translateY(-50%)',
  lineHeight: 0,
  opacity: 'var(--compact-opacity, 0)',
  cursor: 'pointer',
  userSelect: 'none',
  willChange: 'opacity',
  transition: 'opacity 120ms linear',
  '@media': {
    '(max-width: 780px)': {
      opacity: 1,
      transition: 'none',
    },
  },
})
