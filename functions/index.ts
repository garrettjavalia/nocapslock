import {
  detectPreferredLocaleFromAcceptLanguage,
} from '../src/i18n/localeDetection'
import { getLocalePath } from '../src/i18n/paths'

type PagesContext = {
  request: Request
  next: () => Promise<Response>
}

export async function onRequest(context: PagesContext): Promise<Response> {
  const url = new URL(context.request.url)

  if (url.pathname !== '/') {
    return context.next()
  }

  const locale = detectPreferredLocaleFromAcceptLanguage(
    context.request.headers.get('accept-language'),
  )
  const redirectUrl = new URL(getLocalePath(locale), url)
  redirectUrl.search = url.search

  return new Response(null, {
    status: 307,
    headers: {
      Location: redirectUrl.toString(),
      Vary: 'Accept-Language',
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  })
}
