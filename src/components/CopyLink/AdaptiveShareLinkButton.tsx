import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { CopyLinkButton } from './CopyLinkButton'
import { buildLinkUrl } from './linkUrl'

type AdaptiveShareLinkButtonProps = {
  label: string
  path?: string
  hash?: string
  className?: string
  copyChildren: ReactNode
  shareChildren: ReactNode
}

function isLikelyMobileShareSurface() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false
  }

  const userAgent = navigator.userAgent
  const isMobileUserAgent = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent)
  const isIPadOSDesktopMode = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
  const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches
  return isMobileUserAgent || isIPadOSDesktopMode || hasCoarsePointer
}

function canUseNativeShare() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false
  }

  return typeof navigator.share === 'function' && window.isSecureContext
}

export function AdaptiveShareLinkButton({
  label,
  path,
  hash,
  className,
  copyChildren,
  shareChildren,
}: AdaptiveShareLinkButtonProps) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const [showsShareIcon, setShowsShareIcon] = useState(false)
  const [supportsNativeShare, setSupportsNativeShare] = useState(false)

  useEffect(() => {
    if (!copied) {
      return
    }

    const timeout = window.setTimeout(() => {
      setCopied(false)
    }, 1800)

    return () => window.clearTimeout(timeout)
  }, [copied])

  useEffect(() => {
    setShowsShareIcon(isLikelyMobileShareSurface())
    setSupportsNativeShare(canUseNativeShare())
  }, [])

  if (!showsShareIcon) {
    return (
      <CopyLinkButton label={label} path={path} hash={hash} className={className}>
        {copyChildren}
      </CopyLinkButton>
    )
  }

  const actionLabel = copied ? t('linkCopy.copied') : t('linkCopy.share')
  const accessibleLabel = `${actionLabel}: ${label}`

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()

    try {
      const url = buildLinkUrl(path, hash).toString()
      if (supportsNativeShare) {
        await navigator.share({
          title: document.title,
          text: label,
          url,
        })
        return
      }

      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return
      }

      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      aria-label={accessibleLabel}
      title={accessibleLabel}
      data-copied={copied ? 'true' : 'false'}
    >
      {shareChildren}
    </button>
  )
}
