export function buildLinkUrl(path?: string, hash?: string) {
  const url = path ? new URL(path, window.location.origin) : new URL(window.location.href)
  url.hash = hash ?? ''
  return url
}
