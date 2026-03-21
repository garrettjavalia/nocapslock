import { Children, type ReactNode } from 'react'
import { Keycap, type PlatformId } from './Keycap'

function childrenToText(children: ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string' || typeof child === 'number') {
        return String(child)
      }

      if (typeof child === 'object' && child !== null && 'props' in child) {
        return childrenToText((child as { props?: { children?: ReactNode } }).props?.children)
      }

      return ''
    })
    .join('')
}

type InlineTransKeycapProps = {
  children?: ReactNode
  platform: PlatformId
}

export function InlineTransKeycap({ children, platform }: InlineTransKeycapProps) {
  return (
    <Keycap
      keyLabel={childrenToText(children).trim()}
      mini
      miniSize="xs"
      platform={platform}
    />
  )
}
