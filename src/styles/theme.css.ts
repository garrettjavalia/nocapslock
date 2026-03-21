import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    bg: '#f6f3ec',
    bgElevated: 'rgba(255, 255, 255, 0.82)',
    bgStrong: '#ffffff',
    keycapBg: '#ffffff',
    text: '#1c150d',
    textSoft: '#62584b',
    border: 'rgba(88, 69, 45, 0.12)',
    keycapBorder: 'rgba(88, 69, 45, 0.12)',
    accent: '#d95d39',
    accentStrong: '#9c3417',
    accentSoft: 'rgba(217, 93, 57, 0.12)',
  },
  shadow: {
    panel: '0 18px 50px rgba(54, 34, 12, 0.09)',
    panelDark: '0 18px 60px rgba(0, 0, 0, 0.28)',
    keycap: 'inset 0 -10px 16px rgba(0, 0, 0, 0.08), 0 18px 32px rgba(0, 0, 0, 0.12)',
  },
  control: {
    height: '46px',
    radius: '999px',
    paddingX: '16px',
    gap: '10px',
  },
})

globalStyle(':root', {
  colorScheme: 'light dark',
})

globalStyle(':root[data-theme="dark"]', {
  vars: {
    [vars.color.bg]: '#131313',
    [vars.color.bgElevated]: 'rgba(27, 27, 27, 0.88)',
    [vars.color.bgStrong]: '#1e1e1e',
    [vars.color.keycapBg]: 'rgba(43, 43, 43, 0.98)',
    [vars.color.text]: '#f5efe6',
    [vars.color.textSoft]: '#c0b5a7',
    [vars.color.border]: 'rgba(148, 148, 148, 0.16)',
    [vars.color.keycapBorder]: 'rgba(170, 170, 170, 0.18)',
    [vars.color.accent]: '#ff8a5b',
    [vars.color.accentStrong]: '#ffb18d',
    [vars.color.accentSoft]: 'rgba(255, 138, 91, 0.16)',
    [vars.shadow.panel]: '0 18px 60px rgba(0, 0, 0, 0.28)',
    [vars.shadow.panelDark]: '0 18px 60px rgba(0, 0, 0, 0.28)',
    [vars.shadow.keycap]:
      'inset 0 -10px 16px rgba(0, 0, 0, 0.18), 0 18px 32px rgba(0, 0, 0, 0.24)',
  },
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('html', {
  background: `radial-gradient(circle at top left, rgba(217, 93, 57, 0.12), transparent 28%), radial-gradient(circle at 80% 10%, rgba(33, 118, 255, 0.08), transparent 22%), ${vars.color.bg}`,
  color: vars.color.text,
  fontFamily: '"IBM Plex Sans", "SUIT Variable", "Pretendard Variable", sans-serif',
  scrollBehavior: 'smooth',
})

globalStyle('body', {
  margin: 0,
  minWidth: '320px',
})

globalStyle('button, textarea, a, select', {
  font: 'inherit',
})

globalStyle('h1, h2, h3, p', {
  marginTop: 0,
})
