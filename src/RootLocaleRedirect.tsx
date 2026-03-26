import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Head } from 'vite-react-ssg'
import { detectPreferredLocale, getLocalePath, supportedLocales } from './i18n'
import { siteOrigin } from './site'

export function RootLocaleRedirect() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(getLocalePath(detectPreferredLocale()), { replace: true })
  }, [navigate])

  return (
    <Head>
      {supportedLocales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={locale}
          href={`${siteOrigin}${getLocalePath(locale)}`}
        />
      ))}
    </Head>
  )
}
