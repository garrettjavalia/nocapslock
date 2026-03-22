import { LinkIcon as PrimerLinkIcon } from '@primer/octicons-react'

type LinkIconProps = {
  className?: string
}

export function LinkIcon({ className }: LinkIconProps) {
  return <PrimerLinkIcon aria-hidden="true" className={className} size={16} />
}
