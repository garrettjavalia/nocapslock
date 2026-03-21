export type Locale = 'en' | 'ko'
type DeviceLabelKey = 'mac' | 'android' | 'ios' | 'windows' | 'linux' | 'unix' | 'other'

type Copy = {
  metaTitle: string
  metaDescription: string
  metaKeywords: string
  brand: string
  githubLabel: string
  eyebrow: string
  heroTitle: string
  heroLead: string
  themeToggle: {
    light: string
    dark: string
  }
  localeSwitcherLabel: string
  keySection: {
    kicker: string
    title: string
    captionTemplate: string
    beforeLabel: string
    afterLabel: string
    remapLabel: string
    disabledLabel: string
    alternativeLabel: string
    deviceLabels: Record<DeviceLabelKey, string>
    labels: string[]
  }
  demoSection: {
    kicker: string
    title: string
    bodyTemplate: string
    statusIdle: string
    statusArmed: string
    statusPrefix: string
    instructions: string
    restoreNote: string
    text: string
  }
  guideSection: {
    kicker: string
    title: string
    intro: string
    platforms: Array<{
      id: 'windows' | 'mac' | 'linux'
      title: string
      placeholder: string
    }>
  }
}

export const supportedLocales: Locale[] = ['en', 'ko']

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
}

export const defaultLocale: Locale = 'en'

export const messages: Record<Locale, Copy> = {
  en: {
    metaTitle: 'No Capslock Anymore | Turn Caps Lock into a Better Key',
    metaDescription:
      'A multilingual landing page that explains why remapping Caps Lock to Control, Command, or Escape is useful, and lets you try it right in the browser.',
    metaKeywords:
      'caps lock remap, caps lock to control, caps lock to command, caps lock to escape, keyboard productivity, karabiner, keyd, powertoys',
    brand: 'NoCapslock',
    githubLabel: 'GitHub',
    eyebrow: 'Keyboard Productivity',
    heroTitle: 'No Capslock Anymore!',
    heroLead:
      'Caps Lock is taking up one of the most valuable spots on your keyboard. If you remap it to a shortcut key you actually use, your hands can move much less.',
    themeToggle: {
      light: 'Light mode',
      dark: 'Dark mode',
    },
    localeSwitcherLabel: 'Language',
    keySection: {
      kicker: 'Try remapping it',
      title: 'The same key can do much better work',
      captionTemplate: 'On {device}, the most useful default is {key}.',
      beforeLabel: 'Before',
      afterLabel: 'After',
      remapLabel: 'Remap',
      disabledLabel: 'Caps Lock mode off',
      alternativeLabel: 'Alternative',
      deviceLabels: {
        mac: 'MacOS',
        android: 'Android',
        ios: 'iOS',
        windows: 'Windows',
        linux: 'Linux',
        unix: 'Unix',
        other: 'this machine',
      },
      labels: ['Caps Lock', 'Command', 'Control', 'Escape'],
    },
    demoSection: {
      kicker: 'Try it yourself',
      title: 'Try using Caps Lock like a shortcut helper',
      bodyTemplate:
        'Inside this textarea, {caps} behaves like a {control} helper for {a}, {c}, {v}, and {x}. You can check the feel first before changing your whole system. Clipboard actions may ask for browser permission the first time.',
      statusIdle: 'Waiting',
      statusArmed: 'Virtual modifier active',
      statusPrefix: 'Status',
      instructions:
        'Press Caps Lock once, then press A, C, V, or X within 1 second. You need to press Caps Lock again for each shortcut. The next supported key will be treated like a Command or Control shortcut in this demo.',
      restoreNote:
        'After trying the demo, turn Caps Lock back to its normal state so it does not affect your next task. There may still be browser- and operating-system-specific bugs.',
      text: `Try this box with Caps Lock.

Use Caps Lock + A to select all.
Use Caps Lock + C to copy.
Use Caps Lock + V to paste.
Use Caps Lock + X to cut.

This is only a browser-level simulation, but it is enough to feel the difference.`,
    },
    guideSection: {
      kicker: 'Coming next',
      title: 'Setup guides by operating system',
      intro:
        'We want to review the actual setup methods carefully before publishing them, so for now this section is only holding the place.',
      platforms: [
        {
          id: 'windows',
          title: 'Windows',
          placeholder: 'Windows setup details will be added after the registry and PowerToys steps are fully reviewed.',
        },
        {
          id: 'mac',
          title: 'macOS',
          placeholder: 'macOS setup details will be added after the Karabiner-Elements and system settings guidance is reviewed.',
        },
        {
          id: 'linux',
          title: 'Linux',
          placeholder: 'Linux setup details will be added after the keyd workflow and distro-specific notes are reviewed.',
        },
      ],
    },
  },
  ko: {
    metaTitle: 'No Capslock Anymore | 캡스락을 더 좋은 키로 바꾸기',
    metaDescription:
      '캡스락을 Control, Command, Escape로 바꾸는 이유를 소개하고, 브라우저에서 바로 체험할 수 있는 다국어 랜딩 페이지입니다.',
    metaKeywords:
      '캡스락 변경, caps lock remap, caps lock to control, caps lock to command, caps lock to escape, 키보드 생산성',
    brand: '노캡스락',
    githubLabel: 'GitHub',
    eyebrow: '키보드 생산성',
    heroTitle: '이제 캡스락은 그만!',
    heroLead:
      '캡스락은 키보드에서 가장 아까운 자리를 차지하고 있습니다. 실제로 자주 쓰는 단축키용 키로 바꾸면 손의 이동이 훨씬 줄어듭니다.',
    themeToggle: {
      light: '라이트 모드',
      dark: '다크 모드',
    },
    localeSwitcherLabel: '언어',
    keySection: {
      kicker: '바꿔보세요',
      title: '같은 키라도 훨씬 좋은 역할을 맡길 수 있습니다',
      captionTemplate: '{device}에서는 보통 {key}가 가장 유용합니다.',
      beforeLabel: '변경 전',
      afterLabel: '변경 후',
      remapLabel: '변경',
      disabledLabel: 'Caps Lock 모드 끄기',
      alternativeLabel: '다른 선택지',
      deviceLabels: {
        mac: 'MacOS',
        android: 'Android',
        ios: 'iOS',
        windows: 'Windows',
        linux: 'Linux',
        unix: 'Unix',
        other: '이 기기',
      },
      labels: ['Caps Lock', 'Command', 'Control', 'Escape'],
    },
    demoSection: {
      kicker: '직접 체험하기',
      title: 'Caps Lock을 단축키 보조키처럼 써보기',
      bodyTemplate:
        '아래 텍스트 영역에서는 {caps}이 {a}, {c}, {v}, {x}에 대해 {control} 보조키처럼 동작합니다. 시스템 전체를 바꾸기 전에 감각부터 먼저 확인할 수 있습니다. 클립보드 관련 동작은 처음 한 번 브라우저 권한을 물어볼 수 있습니다.',
      statusIdle: '대기 중',
      statusArmed: '가상 보조키 활성',
      statusPrefix: '상태',
      instructions:
        'Caps Lock을 한 번 누른 뒤 1초 안에 A, C, V, X 중 하나를 누르면 이 데모 안에서 Command 또는 Control 단축키처럼 동작합니다. 단축키를 한 번 쓸 때마다 Caps Lock을 다시 눌러야 합니다.',
      restoreNote:
        '체험이 끝나면 다음 작업에 지장이 없도록 Caps Lock을 다시 원래 상태로 돌려두세요. 브라우저와 운영체제에 따라 버그가 있을 수 있습니다.',
      text: `이 박스에서 Caps Lock을 눌러 보세요.

Caps Lock + A 는 전체 선택,
Caps Lock + C 는 복사,
Caps Lock + V 는 붙여넣기,
Caps Lock + X 는 잘라내기처럼 동작합니다.

브라우저 안에서만 흉내 내는 체험이지만, 손의 차이는 충분히 느낄 수 있습니다.`,
    },
    guideSection: {
      kicker: '추가 예정',
      title: '운영체제별 설정 가이드',
      intro:
        '이 부분은 실제 도입 방법을 충분히 검토한 뒤 공개하려고 하므로, 지금은 자리만 먼저 잡아 두었습니다.',
      platforms: [
        {
          id: 'windows',
          title: 'Windows',
          placeholder: '레지스트리 수정과 PowerToys 안내는 검토가 끝나면 이곳에 정리할 예정입니다.',
        },
        {
          id: 'mac',
          title: 'macOS',
          placeholder: 'Karabiner-Elements와 시스템 설정 안내는 검토 후 이곳에 정리할 예정입니다.',
        },
        {
          id: 'linux',
          title: 'Linux',
          placeholder: 'keyd와 배포판별 주의사항은 검토 후 이곳에 정리할 예정입니다.',
        },
      ],
    },
  },
}

export function getLocaleFromPath(pathname: string): Locale | null {
  if (pathname.startsWith('/ko')) return 'ko'
  if (pathname.startsWith('/en')) return 'en'
  return null
}

export function getLocalePath(locale: Locale): string {
  return locale === 'ko' ? '/ko/' : '/en/'
}

export function detectPreferredLocale(): Locale {
  if (typeof navigator === 'undefined') {
    return defaultLocale
  }

  const candidates = [navigator.language, ...(navigator.languages ?? [])]
    .filter(Boolean)
    .map((value) => value.toLowerCase())

  if (candidates.some((value) => value.startsWith('ko'))) return 'ko'
  return 'en'
}
