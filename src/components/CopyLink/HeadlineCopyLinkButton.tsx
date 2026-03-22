import { CopyLinkButton, type CopyLinkButtonProps } from './CopyLinkButton'
import { LinkIcon } from './LinkIcon'
import * as styles from './HeadlineCopyLinkButton.css'

type HeadlineCopyLinkButtonProps = Omit<CopyLinkButtonProps, 'children'>

export function HeadlineCopyLinkButton({
  label,
  path,
  hash,
  className,
}: HeadlineCopyLinkButtonProps) {
  const buttonClassName = className ? `${styles.button} ${className}` : styles.button

  return (
    <CopyLinkButton
      label={label}
      path={path}
      hash={hash}
      className={buttonClassName}
    >
      <LinkIcon className={styles.icon} />
    </CopyLinkButton>
  )
}
