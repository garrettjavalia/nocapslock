import type { RouteObject } from 'react-router-dom'
import { ViteReactSSG } from 'vite-react-ssg'
import { App } from './App'
import './styles/theme.css.ts'

const routes: RouteObject[] = [
  { path: '/', element: <App /> },
  { path: '/en/', element: <App /> },
  { path: '/ko/', element: <App /> },
]

export const createRoot = ViteReactSSG(
  { routes },
  () => {},
)
