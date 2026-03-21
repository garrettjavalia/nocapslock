import { useEffect, useState } from 'react'
import { downloadTextFile } from '../../utils/downloadTextFile'
import * as styles from './GuideCodeBlock.css'

type GuideCodeBlockProps = {
  code: string
  copyLabel: string
  copiedLabel: string
  downloadLabel?: string
  filename?: string
}

export function GuideCodeBlock({
  code,
  copyLabel,
  copiedLabel,
  downloadLabel,
  filename,
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
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        {downloadLabel && filename ? (
          <button
            type="button"
            className={styles.button}
            onClick={() => downloadTextFile(filename, code)}
          >
            {downloadLabel}
          </button>
        ) : null}
        <button type="button" className={styles.button} onClick={handleCopy}>
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
      <pre className={styles.codeBlock}>
        <code>{code}</code>
      </pre>
    </div>
  )
}
