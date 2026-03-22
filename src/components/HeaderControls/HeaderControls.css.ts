import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

const controlHoverBorder = `color-mix(in srgb, ${vars.color.accent} 16%, ${vars.color.border})`
const controlFocusShadow = `${vars.shadow.panel}, 0 0 0 3px ${vars.color.accentSoft}`
const menuOpenFromBottom = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-4px) scale(0.98)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
})
const menuOpenFromTop = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(4px) scale(0.98)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
})

const controlBase = style({
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgElevated,
  color: vars.color.text,
  minHeight: vars.control.height,
  borderRadius: vars.control.radius,
  boxShadow: vars.shadow.panel,
  backdropFilter: 'blur(16px)',
  transition: 'background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease, color 180ms ease',
  selectors: {
    '&:hover': {
      background: vars.color.bgStrong,
      borderColor: controlHoverBorder,
    },
    '&:focus-visible': {
      outline: 'none',
      borderColor: vars.color.accent,
      boxShadow: controlFocusShadow,
    },
  },
})

export const topbarActions = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 12,
  flexWrap: 'nowrap',
  minWidth: 0,
})

export const iconControl = style([
  controlBase,
  {
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: vars.control.height,
    height: vars.control.height,
    padding: 0,
    color: vars.color.textSoft,
    selectors: {
      '&:hover': {
        background: vars.color.bgStrong,
        borderColor: controlHoverBorder,
        color: vars.color.text,
      },
      '&:focus-visible': {
        outline: 'none',
        borderColor: vars.color.accent,
        boxShadow: controlFocusShadow,
        color: vars.color.accentStrong,
      },
      '&[data-copied="true"]': {
        borderColor: controlHoverBorder,
        background: vars.color.accentSoft,
        color: vars.color.accentStrong,
      },
    },
  },
])

export const githubIconLink = style([
  iconControl,
  {
    textDecoration: 'none',
  },
])

export const controlIcon = style({
  width: 15,
  height: 15,
})

export const localeMenuTrigger = style([
  iconControl,
  {
    selectors: {
      '&[data-state="open"]': {
        borderColor: controlHoverBorder,
        background: vars.color.accentSoft,
        color: vars.color.accentStrong,
        boxShadow: controlFocusShadow,
      },
    },
  },
])

export const localeMenuContent = style({
  minWidth: 188,
  padding: 8,
  borderRadius: 18,
  border: `1px solid ${vars.color.border}`,
  background: vars.color.bgElevated,
  boxShadow: vars.shadow.panel,
  backdropFilter: 'blur(18px)',
  zIndex: 30,
  transformOrigin: 'var(--radix-dropdown-menu-content-transform-origin)',
  animation: `${menuOpenFromBottom} 160ms ease`,
  selectors: {
    '&[data-side="top"]': {
      animationName: menuOpenFromTop,
    },
  },
})

export const localeMenuHeading = style({
  padding: '8px 10px 6px',
  color: vars.color.textSoft,
  fontSize: '0.78rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
})

export const localeMenuItem = style({
  display: 'grid',
  gridTemplateColumns: '16px minmax(0, 1fr)',
  alignItems: 'center',
  gap: 10,
  minHeight: 38,
  padding: '0 10px',
  borderRadius: 12,
  color: vars.color.text,
  cursor: 'pointer',
  outline: 'none',
  userSelect: 'none',
  selectors: {
    '&[data-highlighted]': {
      background: vars.color.accentSoft,
      color: vars.color.accentStrong,
    },
    '&[data-state="checked"]': {
      fontWeight: 600,
    },
  },
})

export const localeMenuIndicatorSlot = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 16,
  height: 16,
})

export const localeMenuIndicator = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.accentStrong,
})

export const menuIndicatorIcon = style({
  width: 13,
  height: 13,
})

export const localeMenuItemLabel = style({
  whiteSpace: 'nowrap',
})

export const themeToggle = style([
  controlBase,
  {
    flexShrink: 0,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: vars.control.height,
    height: vars.control.height,
    padding: 0,
    cursor: 'pointer',
  },
])

export const themeToggleTrack = style({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  width: 28,
  height: 28,
  justifyContent: 'center',
})

export const themeToggleThumb = style({
  display: 'grid',
  placeItems: 'center',
  width: 24,
  height: 24,
  borderRadius: 999,
  background: 'transparent',
  color: vars.color.textSoft,
  transition: 'color 180ms ease',
  selectors: {
    ':root[data-theme="dark"] &': {
      color: vars.color.textSoft,
    },
    [`${themeToggle}:hover &`]: {
      color: vars.color.text,
    },
    [`${themeToggle}:focus-visible &`]: {
      color: vars.color.accentStrong,
    },
  },
})

export const themeIcon = style({
  width: 15,
  height: 15,
})
