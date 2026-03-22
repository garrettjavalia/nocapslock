import { useMemo } from 'react'
import { I18nextProvider } from 'react-i18next'
import { App } from './App'
import type { WindowsMethodId } from './guides'
import { createI18nInstance, type Locale } from './i18n'
import type { GuidePlatformId } from './i18n/schema'

type LocalizedAppProps = {
  locale: Locale
  guidePlatform?: GuidePlatformId | null
  windowsMethod?: WindowsMethodId | null
}

export function LocalizedApp({
  locale,
  guidePlatform = null,
  windowsMethod = null,
}: LocalizedAppProps) {
  const i18n = useMemo(() => createI18nInstance(locale), [locale])

  return (
    <I18nextProvider i18n={i18n}>
      <App locale={locale} guidePlatform={guidePlatform} windowsMethod={windowsMethod} />
    </I18nextProvider>
  )
}
