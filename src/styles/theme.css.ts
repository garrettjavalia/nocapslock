import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    bg: '#f6f3ec',
    bgElevated: '#fdfdfc',
    bgStrong: '#ffffff',
    keycapBg: '#ffffff',
    pageGlowWarm: '#f3e1d7',
    pageGlowCool: '#e5e9ee',
    text: '#1c150d',
    textSoft: '#62584b',
    border: '#ddd6cc',
    borderAccent: '#e6d1c8',
    keycapBorder: '#ebe9e6',
    keycapStrikeStart: '#dc6a49',
    keycapStrikeEnd: '#eaa692',
    accent: '#d95d39',
    accentStrong: '#9c3417',
    accentSoft: '#f9eae5',
  },
  shadow: {
    panel: '0 18px 50px #e5e0d8',
    panelDark: '0 18px 60px #0e0e0e',
    keycap: 'inset 0 -10px 16px #f0f0f0, 0 18px 32px #dfdfde',
    keycapMini: 'inset 0 -6px 10px #f0f0f0',
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
    [vars.color.bgElevated]: '#1a1a1a',
    [vars.color.bgStrong]: '#1e1e1e',
    [vars.color.keycapBg]: '#2b2b2b',
    [vars.color.pageGlowWarm]: '#2f211c',
    [vars.color.pageGlowCool]: '#141b26',
    [vars.color.text]: '#f5efe6',
    [vars.color.textSoft]: '#c0b5a7',
    [vars.color.border]: '#4a4a4a',
    [vars.color.borderAccent]: '#4f3d35',
    [vars.color.keycapBorder]: '#424242',
    [vars.color.keycapStrikeStart]: '#ee8257',
    [vars.color.keycapStrikeEnd]: '#a05f45',
    [vars.color.accent]: '#ff8a5b',
    [vars.color.accentStrong]: '#ffb18d',
    [vars.color.accentSoft]: '#3f2c24',
    [vars.shadow.panel]: '0 18px 60px #0e0e0e',
    [vars.shadow.panelDark]: '0 18px 60px #0e0e0e',
    [vars.shadow.keycap]: 'inset 0 -10px 16px #232323, 0 18px 32px #141414',
    [vars.shadow.keycapMini]: 'inset 0 -4px 8px #232323',
  },
})

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('html', {
  background: `radial-gradient(circle at top left, ${vars.color.pageGlowWarm}, ${vars.color.bg} 28%), radial-gradient(circle at 80% 10%, ${vars.color.pageGlowCool}, ${vars.color.bg} 22%), ${vars.color.bg}`,
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
