import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

const controlHoverBorder = `color-mix(in srgb, ${vars.color.accent} 16%, ${vars.color.border})`
const controlFocusShadow = `${vars.shadow.panel}, 0 0 0 3px ${vars.color.accentSoft}`

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
  flexWrap: 'wrap',
})

export const localeSwitcher = style([
  controlBase,
  {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: vars.control.gap,
    padding: `0 ${vars.control.paddingX}`,
    selectors: {
      '&:focus-within': {
        background: vars.color.bgStrong,
        borderColor: vars.color.accent,
        boxShadow: controlFocusShadow,
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        right: 16,
        top: '50%',
        width: 8,
        height: 8,
        borderRight: `1.5px solid ${vars.color.textSoft}`,
        borderBottom: `1.5px solid ${vars.color.textSoft}`,
        transform: 'translateY(-62%) rotate(45deg)',
        pointerEvents: 'none',
      },
      '&:hover::after, &:focus-within::after': {
        borderRightColor: vars.color.text,
        borderBottomColor: vars.color.text,
      },
    },
  },
])

export const githubLink = style([
  controlBase,
  {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.control.gap,
    padding: `0 ${vars.control.paddingX}`,
    color: vars.color.text,
    textDecoration: 'none',
    fontWeight: 600,
  },
])

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

export const controlIcon = style({
  width: 15,
  height: 15,
})

export const localeLabel = style({
  fontSize: '0.92rem',
  color: vars.color.textSoft,
})

export const localeSelect = style({
  appearance: 'none',
  display: 'block',
  height: vars.control.height,
  border: 0,
  background: 'transparent',
  color: vars.color.text,
  outline: 'none',
  cursor: 'pointer',
  minHeight: 0,
  paddingRight: 18,
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
