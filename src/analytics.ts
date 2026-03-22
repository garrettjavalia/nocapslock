import { siteOrigin } from './site'

declare global {
  interface Window {
    dataLayer?: unknown[][]
    gtag?: (...args: unknown[]) => void
  }
}

type TrackPageViewParams = {
  path: string
  title: string
}

function sendToGoogleTag(...args: unknown[]) {
  if (typeof window === 'undefined') {
    return
  }

  if (typeof window.gtag === 'function') {
    window.gtag(...args)
    return
  }

  window.dataLayer = window.dataLayer ?? []
  window.dataLayer.push(args)
}

export function trackPageView({
  path,
  title,
}: TrackPageViewParams) {
  if (typeof window === 'undefined') {
    return
  }

  sendToGoogleTag('event', 'page_view', {
    page_location: new URL(path, siteOrigin).toString(),
    page_path: path,
    page_title: title,
  })
}
