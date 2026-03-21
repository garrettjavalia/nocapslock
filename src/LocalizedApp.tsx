import { useMemo } from 'react'
import { I18nextProvider } from 'react-i18next'
import { App } from './App'
import { createI18nInstance, type Locale } from './i18n'

type LocalizedAppProps = {
  locale: Locale
}

export function LocalizedApp({ locale }: LocalizedAppProps) {
  const i18n = useMemo(() => createI18nInstance(locale), [locale])

  return (
    <I18nextProvider i18n={i18n}>
      <App locale={locale} />
    </I18nextProvider>
  )
}
