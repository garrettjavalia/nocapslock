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

function canUseNativeShare() {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return false
  }

  if (typeof navigator.share !== 'function') {
    return false
  }

  const userAgent = navigator.userAgent
  const isMobileUserAgent = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent)
  const isIPadOSDesktopMode = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
  return isMobileUserAgent || isIPadOSDesktopMode
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
  const [supportsNativeShare, setSupportsNativeShare] = useState(false)

  useEffect(() => {
    setSupportsNativeShare(canUseNativeShare())
  }, [])

  if (!supportsNativeShare) {
    return (
      <CopyLinkButton label={label} path={path} hash={hash} className={className}>
        {copyChildren}
      </CopyLinkButton>
    )
  }

  const accessibleLabel = `${t('linkCopy.share')}: ${label}`

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()

    try {
      const url = buildLinkUrl(path, hash).toString()
      await navigator.share({
        title: document.title,
        text: label,
        url,
      })
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return
      }
    }
  }

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      aria-label={accessibleLabel}
      title={accessibleLabel}
    >
      {shareChildren}
    </button>
  )
}
