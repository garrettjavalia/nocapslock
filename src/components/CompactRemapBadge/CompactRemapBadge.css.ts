import { style } from '@vanilla-extract/css'

const badgeWidth = 'clamp(156px, 18vw, 196px)'
const badgeHeight = `calc(${badgeWidth} / 1.9)`

export const compactHeroBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: badgeWidth,
  height: badgeHeight,
  flex: '0 0 auto',
  padding: 0,
  border: 0,
  background: 'transparent',
  boxShadow: 'none',
  lineHeight: 0,
  opacity: 'var(--compact-opacity, 0)',
  cursor: 'pointer',
  userSelect: 'none',
  willChange: 'opacity',
  transition: 'opacity 120ms linear',
})
