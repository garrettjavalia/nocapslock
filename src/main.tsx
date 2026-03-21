import type { RouteObject } from 'react-router-dom'
import { ViteReactSSG } from 'vite-react-ssg'
import { LocalizedApp } from './LocalizedApp'
import { RootLocaleRedirect } from './RootLocaleRedirect'
import './styles/theme.css.ts'

const routes: RouteObject[] = [
  { path: '/', element: <RootLocaleRedirect /> },
  { path: '/en/', element: <LocalizedApp locale="en" /> },
  { path: '/ko/', element: <LocalizedApp locale="ko" /> },
]

export const createRoot = ViteReactSSG(
  { routes },
  () => {},
)
