export type Locale =
  | 'en-US'
  | 'ko-KR'
  | 'ja-JP'
  | 'es-ES'
  | 'pt-BR'
  | 'fr-FR'
  | 'de-DE'
export type GuidePlatformId = 'windows' | 'mac' | 'linux'

type WidenTranslationLeaf<T> =
  T extends string
    ? string
    : T extends readonly unknown[]
      ? { readonly [K in keyof T]: WidenTranslationLeaf<T[K]> }
      : T extends object
        ? { [K in keyof T]: WidenTranslationLeaf<T[K]> }
        : T

export type TranslationMessages = WidenTranslationLeaf<typeof import('./en').enTranslation>
