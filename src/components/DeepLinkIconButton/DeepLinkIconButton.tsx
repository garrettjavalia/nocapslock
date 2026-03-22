import { useEffect, useState, type MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import * as styles from './DeepLinkIconButton.css'

type DeepLinkIconButtonProps = {
  label: string
  path?: string
  hash?: string
  className?: string
}

export function DeepLinkIconButton({
  label,
  path,
  hash,
  className,
}: DeepLinkIconButtonProps) {
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
      const url = path
        ? new URL(path, window.location.origin)
        : new URL(window.location.href)

      url.hash = hash ?? ''
      await navigator.clipboard.writeText(url.toString())
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  const actionLabel = copied ? t('linkCopy.copied') : t('linkCopy.copy')
  const accessibleLabel = `${actionLabel}: ${label}`
  const buttonClassName = className ? `${styles.button} ${className}` : styles.button

  return (
    <button
      type="button"
      className={buttonClassName}
      onClick={handleClick}
      aria-label={accessibleLabel}
      title={accessibleLabel}
      data-copied={copied ? 'true' : 'false'}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={styles.icon}
      >
        <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L10.5 5.43" />
        <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07l2.33-2.33" />
      </svg>
    </button>
  )
}
