import { ShareIcon as PrimerShareIcon } from '@primer/octicons-react'

type ShareIconProps = {
  className?: string
}

export function ShareIcon({ className }: ShareIconProps) {
  return <PrimerShareIcon aria-hidden="true" className={className} size={16} />
}
