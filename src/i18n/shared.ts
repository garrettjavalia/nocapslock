import type { Locale } from './schema'

export const supportedLocales: Locale[] = ['en', 'ko']

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
}

export const defaultLocale: Locale = 'en'

export const sharedGuideCopy = {
  en: {
    keepCapsLockNote:
      'If you still need [[Caps Lock]] sometimes, keep it on another key you rarely use instead of removing it completely.',
    rightAltWarning:
      'Changing [[Right Alt]] can affect multilingual input behavior on some non-English keyboard layouts.',
    powerToysInstallationLabel: 'PowerToys installation',
    powerToysKeyboardManagerLabel: 'PowerToys Keyboard Manager',
    scanCodeTablePdfLabel: 'Microsoft PDF: USB HID to PS/2 Scan Code Translation Table',
  },
  ko: {
    keepCapsLockNote:
      '[[Caps Lock]]이 가끔 필요하다면, 완전히 없애기보다 잘 쓰지 않는 다른 키 하나를 [[Caps Lock]]으로 남겨두는 편이 안전합니다.',
    rightAltWarning:
      '영문 외 레이아웃에서는 [[Right Alt]] 변경이 다국어 관련 동작에 영향을 줄 수 있습니다.',
    powerToysInstallationLabel: 'PowerToys 설치',
    powerToysKeyboardManagerLabel: 'PowerToys Keyboard Manager',
    scanCodeTablePdfLabel: 'Microsoft PDF: USB HID to PS/2 Scan Code Translation Table',
  },
} as const
