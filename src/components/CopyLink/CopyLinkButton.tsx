import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { buildLinkUrl } from './linkUrl'

export type CopyLinkButtonProps = {
  label: string
  path?: string
  hash?: string
  className?: string
  children: ReactNode
}

export function CopyLinkButton({
  label,
  path,
  hash,
  className,
  children,
}: CopyLinkButtonProps) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) {
      return
    }

    const timeout = window.setTimeout(() => {
      setCopied(false)
    }, 1800)

    return () => window.clearTimeout(timeout)
  }, [copied])

  const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()

    try {
      const url = buildLinkUrl(path, hash)
      await navigator.clipboard.writeText(url.toString())
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const actionLabel = copied ? t('linkCopy.copied') : t('linkCopy.copy')
  const accessibleLabel = `${actionLabel}: ${label}`

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      aria-label={accessibleLabel}
      title={accessibleLabel}
      data-copied={copied ? 'true' : 'false'}
    >
      {children}
    </button>
  )
}
