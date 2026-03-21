import { useEffect, useState } from 'react'
import { downloadTextFile } from '../../utils/downloadTextFile'
import * as styles from './GuideCodeBlock.css'

type GuideCodeBlockProps = {
  code: string
  copyLabel: string
  copiedLabel: string
  downloadLabel?: string
  filename?: string
  headerText?: string
  disabled?: boolean
  placeholderText?: string
}

export function GuideCodeBlock({
  code,
  copyLabel,
  copiedLabel,
  downloadLabel,
  filename,
  headerText,
  disabled = false,
  placeholderText,
}: GuideCodeBlockProps) {
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

  const handleCopy = async () => {
    if (disabled) {
      return
    }

    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        {filename || headerText ? (
          <p className={styles.filename}>{filename ?? headerText}</p>
        ) : (
          <span />
        )}
        <div className={styles.actions}>
          {downloadLabel && filename ? (
            <button
              type="button"
              className={styles.button}
              disabled={disabled}
              onClick={() => downloadTextFile(filename, code)}
            >
              {downloadLabel}
            </button>
          ) : null}
          <button type="button" className={styles.button} onClick={handleCopy} disabled={disabled}>
            {copied ? copiedLabel : copyLabel}
          </button>
        </div>
      </div>
      {disabled && placeholderText ? (
        <p className={styles.placeholder}>{placeholderText}</p>
      ) : (
        <pre className={styles.codeBlock}>
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}
