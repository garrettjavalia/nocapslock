import { keyframes, style } from '@vanilla-extract/css'

// Compact badge fades in as you scroll from ~76 px → 144 px
const compactFadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

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
  transform: 'translateY(-50%)',
  lineHeight: 0,
  opacity: 0,
  cursor: 'pointer',
  userSelect: 'none',
  willChange: 'opacity',
  '@supports': {
    '(animation-timeline: scroll())': {
      animationName: compactFadeIn,
      animationTimingFunction: 'linear',
      animationFillMode: 'both',
      animationTimeline: 'scroll(root block)',
      animationRange: '76px 144px',
    },
  },
  '@media': {
    '(max-width: 780px)': {
      animation: 'none',
      opacity: 1,
    },
  },
})
