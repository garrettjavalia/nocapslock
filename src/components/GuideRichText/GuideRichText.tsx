import { Fragment } from 'react'
import { Keycap, type PlatformId } from '../Keycap'

type GuideRichTextProps = {
  text: string
  platform: PlatformId
}

const tokenPattern = /(\[\[[^[\]]+\]\])/g

export function GuideRichText({ text, platform }: GuideRichTextProps) {
  const parts = text.split(tokenPattern)

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[\[([^[\]]+)\]\]$/)
        if (!match) {
          return <Fragment key={`text-${index}`}>{part}</Fragment>
        }

        const keyLabel = match[1].trim()
        return <Keycap key={`key-${index}`} keyLabel={keyLabel} mini miniSize="xs" platform={platform} />
      })}
    </>
  )
}
