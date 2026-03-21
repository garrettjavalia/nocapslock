import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { detectPreferredLocale, getLocalePath } from './i18n'

export function RootLocaleRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(getLocalePath(detectPreferredLocale()), { replace: true })
  }, [navigate])

  return null
}
