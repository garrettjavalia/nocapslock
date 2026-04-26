import type { RouteObject } from 'react-router-dom'
import { ViteReactSSG } from 'vite-react-ssg'
import { getGuidePath } from './guides'
import { supportedLocales, type Locale } from './i18n'
import { LocalizedApp } from './LocalizedApp'
import { RootLocaleRedirect } from './RootLocaleRedirect'
import './styles/theme.css.ts'

function createLocaleRoutes(locale: Locale): RouteObject[] {
  return [
    { path: getGuidePath(locale), element: <LocalizedApp locale={locale} /> },
    { path: getGuidePath(locale, 'windows'), element: <LocalizedApp locale={locale} guidePlatform="windows" /> },
    {
      path: getGuidePath(locale, 'windows', 'powertoys'),
      element: <LocalizedApp locale={locale} guidePlatform="windows" windowsMethod="powertoys" />,
    },
    {
      path: getGuidePath(locale, 'windows', 'registry'),
      element: <LocalizedApp locale={locale} guidePlatform="windows" windowsMethod="registry" />,
    },
    { path: getGuidePath(locale, 'mac'), element: <LocalizedApp locale={locale} guidePlatform="mac" /> },
    { path: getGuidePath(locale, 'linux'), element: <LocalizedApp locale={locale} guidePlatform="linux" /> },
    { path: getGuidePath(locale, 'hardware'), element: <LocalizedApp locale={locale} guidePlatform="hardware" /> },
  ]
}

const routes: RouteObject[] = [
  { path: '/', element: <RootLocaleRedirect /> },
  ...supportedLocales.flatMap((locale) => createLocaleRoutes(locale)),
]

export const createRoot = ViteReactSSG(
  { routes },
  () => {},
)
