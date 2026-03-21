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
    linksLabel: string
    commandLabel: string
    copyCommandLabel: string
    copiedCommandLabel: string
    downloadCommandLabel: string
    configLabel: string
    copyConfigLabel: string
    copiedConfigLabel: string
    downloadConfigLabel: string
    stepsLabel: string
    notesLabel: string
    registryGenerator: {
      title: string
      intro: string
      sourceLabel: string
      targetLabel: string
      remapPreviewLabel: string
      revertPreviewLabel: string
      downloadRemapLabel: string
      downloadRevertLabel: string
      noChangesLabel: string
      registryPathLabel: string
      restartNote: string
      resetLabel: string
        keys: {
          capslock: string
          leftCtrl: string
          rightCtrl: string
          leftAlt: string
          rightAlt: string
        }
    }
    windowsMethods: {
      intro: string
      prosLabel: string
      consLabel: string
      methods: Array<{
        id: 'powertoys' | 'registry'
        title: string
        summary: string
        officialLinks?: Array<{
          label: string
          href: string
        }>
        pros: string[]
        cons: string[]
        steps: Array<{
          title: string
          body: string
        }>
        notes?: string[]
      }>
    }
    platforms: Array<{
      id: 'windows' | 'mac' | 'linux'
      title: string
      summary: string
      officialLinks?: Array<{
        label: string
        href: string
      }>
      installScript?: string
      installFilename?: string
      installStepIndex?: number
      configSnippet?: string
      configFilename?: string
      configStepIndex?: number
      steps?: Array<{
        title: string
        body: string
      }>
      notes?: string[]
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
      'Caps Lock is taking up one of the most valuable spots on your keyboard. If you remap it to a shortcut key you actually use, your hands will feel much more comfortable.',
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
        mac: 'macOS',
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
      kicker: 'Setup guide',
      title: 'Setup guides by operating system',
      intro:
        'Pick the operating system you use and follow the setup steps that match it.',
      linksLabel: 'Official sources',
      commandLabel: 'Install script',
      copyCommandLabel: 'Copy script',
      copiedCommandLabel: 'Copied',
      downloadCommandLabel: 'Download script',
      configLabel: 'Example config',
      copyConfigLabel: 'Copy config',
      copiedConfigLabel: 'Copied',
      downloadConfigLabel: 'Download config',
      stepsLabel: 'Step by step',
      notesLabel: 'Notes',
      registryGenerator: {
        title: 'Registry remap file generator',
        intro:
          'Use this generator if you want a downloadable .reg file that rewrites the Windows Scancode Map directly. It is useful when you want a system-wide remap without keeping PowerToys running.',
        sourceLabel: 'Physical key position',
        targetLabel: 'Send this key instead',
        remapPreviewLabel: 'Generated remap file',
        revertPreviewLabel: 'Revert file',
        downloadRemapLabel: 'Download remap .reg',
        downloadRevertLabel: 'Download revert .reg',
        noChangesLabel: 'Choose at least one different target to generate a remap file.',
        registryPathLabel:
          'Registry path: HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout',
        restartNote:
          'This registry method changes keys globally. If the new mapping does not appear immediately, sign out or restart Windows.',
        resetLabel: 'Reset selections',
        keys: {
          capslock: 'Caps Lock',
          leftCtrl: 'Left Ctrl',
          rightCtrl: 'Right Ctrl',
          leftAlt: 'Left Alt',
          rightAlt: 'Right Alt',
        },
      },
      windowsMethods: {
        intro:
          'On Windows, PowerToys and the registry route are parallel options, not steps you have to follow in order. Pick the one that fits you first, then follow only that section.',
        prosLabel: 'Advantages',
        consLabel: 'Things to know',
        methods: [
          {
            id: 'powertoys',
            title: 'PowerToys Keyboard Manager',
            summary:
              'This is the easiest route if you want a graphical UI and expect to tweak mappings again later.',
            officialLinks: [
              {
                label: 'PowerToys installation',
                href: 'https://learn.microsoft.com/en-us/windows/powertoys/install',
              },
              {
                label: 'PowerToys Keyboard Manager',
                href: 'https://learn.microsoft.com/en-us/windows/powertoys/keyboard-manager',
              },
            ],
            pros: [
              'It is the quickest setup path and easy to edit later from a graphical settings screen.',
              'It can remap a key to another key or even to a shortcut, not only to another physical key position.',
              'Microsoft documents that remaps apply immediately after you confirm them.',
            ],
            cons: [
              'PowerToys must keep running in the background or the remap stops applying.',
              'Microsoft documents that Keyboard Manager does not work on the Windows sign-in screen or other password prompts.',
              'Modifier-key remaps can still interfere with some gestures, special keys, or elevated apps.',
            ],
            steps: [
              {
                title: '1. Install PowerToys',
                body: 'Install PowerToys from the Microsoft Store, GitHub release page, or winget. Microsoft documents all three routes in its installation guide.',
              },
              {
                title: '2. Open Keyboard Manager and choose Remap a key',
                body: 'In PowerToys Settings, open Keyboard Manager and select Remap a key. Then add a new row for Caps Lock.',
              },
              {
                title: '3. Choose the target key you want',
                body: 'Map Caps Lock to Control, Escape, Alt, or any other key you prefer. If you want the classic productivity setup, Control is the most common target.',
              },
              {
                title: '4. Save and test the new mapping',
                body: 'Confirm the change, then test it in the apps you use most. If you later decide you want the remap to work before sign-in too, switch to the registry route instead.',
              },
            ],
            notes: [
              'If a target app is running as administrator and PowerToys is not, remapping may not apply there until PowerToys is also run with elevation.',
              'If you still need Caps Lock sometimes, keep it on another key you rarely use instead of removing it completely.',
            ],
          },
          {
            id: 'registry',
            title: 'Registry-based Scancode Map',
            summary:
              'This route is better when you want a system-level remap that works without PowerToys and can stay active on sign-in screens too.',
            officialLinks: [
              {
                label: 'Microsoft scan code table',
                href: 'https://download.microsoft.com/download/1/6/1/161ba512-40e2-4cc9-843a-923143f3456c/translate.pdf',
              },
            ],
            pros: [
              'It works at the Windows keyboard layout level, so it can stay active on sign-in and password screens.',
              'It does not depend on keeping a background utility running.',
              'The remap and revert files are easy to archive so you can reproduce or undo the setup later.',
            ],
            cons: [
              'It is less convenient than a GUI and usually needs sign-out or a restart before it is fully applied.',
              'It only remaps physical key positions, so it is less flexible than PowerToys for shortcut-style remaps.',
              'Moving Right Alt can affect AltGr behavior on some non-English keyboard layouts.',
            ],
            steps: [
              {
                title: '1. Choose the key swaps you want below',
                body: 'Use the generator to decide what each physical position should send instead. The preview updates immediately so you can inspect the generated file before downloading it.',
              },
              {
                title: '2. Download both the remap and revert files',
                body: 'Keep the revert file next to the remap file. That way you can undo the change quickly even if the new layout feels wrong right away.',
              },
              {
                title: '3. Apply the remap file with administrator approval',
                body: 'Open the generated .reg file and allow Windows to merge it into the registry. Because this writes to the system keyboard layout, administrator confirmation is expected.',
              },
              {
                title: '4. Sign out or restart Windows, then test it',
                body: 'After Windows reloads the keyboard layout, test the new positions in normal apps and on the sign-in path you care about. If needed, run the revert file and restart again.',
              },
            ],
            notes: [
              'Review the generated preview before downloading it if you want to double-check the scan code pairs by hand.',
              'If you still need Caps Lock sometimes, map one of your less-used keys back to Caps Lock instead of deleting it from your layout completely.',
            ],
          },
        ],
      },
      platforms: [
        {
          id: 'windows',
          title: 'Windows',
          summary:
            'On Windows, the easiest path is PowerToys Keyboard Manager. If you want a system-wide remap that does not depend on PowerToys running in the background, you can use the registry-based Scancode Map approach below.',
          officialLinks: [
            {
              label: 'PowerToys installation',
              href: 'https://learn.microsoft.com/en-us/windows/powertoys/install',
            },
            {
              label: 'PowerToys Keyboard Manager',
              href: 'https://learn.microsoft.com/en-us/windows/powertoys/keyboard-manager',
            },
            {
              label: 'Microsoft scan code table',
              href: 'https://download.microsoft.com/download/1/6/1/161ba512-40e2-4cc9-843a-923143f3456c/translate.pdf',
            },
          ],
          steps: [
            {
              title: '1. Use PowerToys if you want the easiest GUI route',
              body: 'Install PowerToys, open Keyboard Manager, choose Remap a key, then map Caps Lock to the key you want. Microsoft documents that PowerToys remaps apply immediately, but only while PowerToys is running, and they do not work on the sign-in screen.',
            },
            {
              title: '2. Use the registry route if you want a system-wide remap',
              body: 'The generator below creates .reg files for the Scancode Map value used by Windows keyboard remapping tools. This route is useful when you want the remap to live at the system level instead of depending on PowerToys staying open. Because the mapping is stored in the system keyboard layout, it can also keep working on password and sign-in screens where PowerToys does not run.',
            },
            {
              title: '3. Download both the remap file and the revert file',
              body: 'Apply the generated remap .reg file with administrator approval, and keep the revert .reg file nearby so you can quickly undo the change later. The revert file simply removes the Scancode Map value.',
            },
            {
              title: '4. Know which keys you are moving',
              body: 'The generator below covers Caps Lock, left and right Control, and left and right Alt. The scan code list comes from Microsoft’s keyboard scan code translation table, so the file preview shows a mapping you can inspect before you download it.',
            },
          ],
          notes: [
            'If you use a non-English layout, remember that Right Alt can also act as AltGr on many keyboards, so moving it may affect some alternate characters.',
            'Keep the revert file somewhere easy to reach before you apply the remap, so you can undo the change quickly if the new layout feels wrong.',
          ],
          placeholder: '',
        },
        {
          id: 'mac',
          title: 'macOS',
          summary:
            'On macOS, Karabiner-Elements is the standard way to remap Caps Lock while keeping the rest of your keyboard behavior predictable.',
          officialLinks: [
            {
              label: 'Karabiner-Elements homepage',
              href: 'https://karabiner-elements.pqrs.org/',
            },
            {
              label: 'Karabiner installation guide',
              href: 'https://karabiner-elements.pqrs.org/docs/getting-started/installation/',
            },
            {
              label: 'Karabiner simple modifications',
              href: 'https://karabiner-elements.pqrs.org/docs/manual/configuration/configure-simple-modifications/',
            },
            {
              label: 'Karabiner required macOS settings',
              href: 'https://karabiner-elements.pqrs.org/docs/manual/misc/required-macos-settings/',
            },
            {
              label: 'Apple Input Sources settings',
              href: 'https://support.apple.com/guide/mac-help/change-input-sources-settings-on-mac-mchl84525d76/mac',
            },
          ],
          steps: [
            {
              title: '1. Install Karabiner-Elements and finish the permission prompts',
              body: 'Install Karabiner-Elements first, then make sure the background service, Input Monitoring permission, and driver extension are all allowed. Karabiner’s official documentation calls these required macOS settings.',
            },
            {
              title: '2. Remap Caps Lock in Simple Modifications',
              body: 'Open Karabiner-Elements, choose Simple Modifications, select the keyboard you want to edit, and change caps_lock to left_control. If you prefer a different target such as Escape, you can choose that here too.',
            },
            {
              title: '3. Optional: only continue if Caps Lock is already your language-switch key',
              body: 'The next steps are only for multilingual setups that already depend on Caps Lock for input-source switching. If Caps Lock is not doing that job on your Mac, you can stop after the basic remap and skip the rest of this section.',
            },
            {
              title: '4. Optional: pick a spare right-side modifier',
              body: 'Choose a spare right-side modifier for language switching first. A common choice is right_command -> f18. If you prefer, you can also use right_option -> f18 instead, as long as that key is not already important in your layout.',
            },
            {
              title: '5. Optional: map that right-side key to F18 in Karabiner',
              body: 'In Simple Modifications, add either right_command -> f18 or right_option -> f18, depending on which key you picked in the previous step. This frees Caps Lock for remapping while keeping a dedicated language-switch key on the right side of the keyboard.',
            },
            {
              title: '6. Optional: assign F18 to input-source switching in macOS',
              body: 'Open Apple menu > System Settings > Keyboard > Keyboard Shortcuts > Input Sources, then assign F18 to “Select next source in Input menu.” This recreates a reliable language-switch key after Caps Lock has been repurposed. F18 is suggested here because Apple already uses the top-row function keys for built-in features, and Karabiner documents special handling for F1-F12.',
            },
          ],
          notes: [
            'If you want to verify key names before saving changes, Karabiner’s EventViewer is the official tool for checking what macOS and Karabiner see from each key.',
            'Apple also documents a built-in option to use Caps Lock to switch to and from the last used Latin input source. The right-command-to-F18 route is useful when you want to keep language switching available without sacrificing your Caps Lock remap.',
            'If you still need a real Caps Lock key sometimes, remap a key you rarely touch back to caps_lock instead of removing it entirely.',
          ],
          placeholder: '',
        },
        {
          id: 'linux',
          title: 'Linux',
          summary:
            'For Linux, keyd is a strong system-wide way to remap Caps Lock into Control or Escape without depending on a specific desktop environment.',
          officialLinks: [
            {
              label: 'keyd repository',
              href: 'https://github.com/rvaiya/keyd',
            },
            {
              label: 'keyd README quickstart',
              href: 'https://github.com/rvaiya/keyd#quickstart',
            },
            {
              label: 'keyd releases',
              href: 'https://github.com/rvaiya/keyd/releases',
            },
          ],
          installScript: `git clone https://github.com/rvaiya/keyd
cd keyd
make
sudo make install
sudo systemctl enable --now keyd`,
          installFilename: 'keyd-setup.sh',
          installStepIndex: 0,
          configSnippet: `[ids]
*

[main]
# Maps Caps Lock to Escape when tapped and Control when held.
capslock = overload(control, esc)

          # Optional: put Caps Lock on Escape too.
esc = capslock`,
          configFilename: 'default.conf',
          configStepIndex: 1,
          steps: [
            {
              title: '1. Install keyd',
              body: 'Install keyd first. The official project documents a source install flow with git clone, make, sudo make install, and sudo systemctl enable --now keyd. If you prefer a tagged version, you can start from the official releases page.',
            },
            {
              title: '2. Create /etc/keyd/default.conf',
              body: 'Create /etc/keyd/default.conf and start with a simple overload mapping. This setup makes Caps Lock send Escape when tapped and Control when held.',
            },
            {
              title: '3. Reload the daemon',
              body: 'After saving the file, run sudo keyd reload so the new mapping takes effect. If something does not apply cleanly, check the service log with journalctl -eu keyd.',
            },
            {
              title: '4. Check key names when your keyboard is unusual',
              body: 'If your keyboard layout is unusual or a key name is unclear, use keyd monitor to inspect the names that keyd sees. If you need the original device events, stop keyd first and then run the monitor command again.',
            },
            {
              title: '5. Keep the emergency stop sequence in mind',
              body: 'If you make a bad config and need to recover quickly, the official documentation notes that backspace+escape+enter should terminate keyd.',
            },
          ],
          notes: [
            'The upstream README says master is the development branch, while tagged releases should be considered stable.',
            'Debian 13+ and Ubuntu 25.04+ are also documented as supporting apt install keyd, but the source install above is the most broadly portable option.',
            'If you still need Caps Lock sometimes, you can keep it on another key you rarely use rather than removing it from the layout completely.',
          ],
          placeholder: '',
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
      '캡스락은 키보드에서 가장 아까운 자리를 차지하고 있습니다. 실제로 자주 쓰는 단축키용 키로 바꾸면 손이 훨씬 편해집니다.',
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
        mac: 'macOS',
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
      kicker: '설정 가이드',
      title: '운영체제별 설정 가이드',
      intro:
        '사용 중인 운영체제를 골라, 그에 맞는 설정 방법을 차근차근 따라가 보세요.',
      linksLabel: '공식 출처',
      commandLabel: '설치 스크립트',
      copyCommandLabel: '스크립트 복사',
      copiedCommandLabel: '복사됨',
      downloadCommandLabel: '스크립트 다운로드',
      configLabel: '예시 설정',
      copyConfigLabel: '설정 복사',
      copiedConfigLabel: '복사됨',
      downloadConfigLabel: '설정 다운로드',
      stepsLabel: '단계별 안내',
      notesLabel: '참고 사항',
      registryGenerator: {
        title: '레지스트리 파일 생성기',
        intro:
          'PowerToys를 계속 켜 두지 않고 시스템 전체에 적용되는 방식이 필요하다면, 아래 생성기로 Windows Scancode Map용 .reg 파일을 바로 만들 수 있습니다.',
        sourceLabel: '현재 키 위치',
        targetLabel: '대신 보낼 키',
        remapPreviewLabel: '생성된 변경용 .reg 파일',
        revertPreviewLabel: '원복용 .reg 파일',
        downloadRemapLabel: '변경용 .reg 다운로드',
        downloadRevertLabel: '원복용 .reg 다운로드',
        noChangesLabel: '하나 이상 다른 키로 바꿔야 변경용 파일을 만들 수 있습니다.',
        registryPathLabel:
          '레지스트리 경로: HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout',
        restartNote:
          '이 레지스트리 방식은 시스템 전체에 적용됩니다. 변경이 바로 보이지 않으면 로그아웃하거나 Windows를 다시 시작하세요.',
        resetLabel: '선택 초기화',
        keys: {
          capslock: 'Caps Lock',
          leftCtrl: '왼쪽 Ctrl',
          rightCtrl: '오른쪽 Ctrl',
          leftAlt: '왼쪽 Alt',
          rightAlt: '오른쪽 Alt',
        },
      },
      windowsMethods: {
        intro:
          'Windows에서는 PowerToys 방식과 레지스트리 방식이 순서대로 따라야 하는 단계가 아니라, 나란히 놓인 선택지입니다. 먼저 자신에게 맞는 방법 하나를 고른 뒤 그 방법만 따라가면 됩니다.',
        prosLabel: '장점',
        consLabel: '주의할 점',
        methods: [
          {
            id: 'powertoys',
            title: 'PowerToys Keyboard Manager',
            summary:
              '그래픽 UI로 빠르게 바꾸고, 나중에 다시 수정할 가능성이 있다면 이 방법이 가장 편합니다.',
            officialLinks: [
              {
                label: 'PowerToys 설치',
                href: 'https://learn.microsoft.com/en-us/windows/powertoys/install',
              },
              {
                label: 'PowerToys Keyboard Manager',
                href: 'https://learn.microsoft.com/en-us/windows/powertoys/keyboard-manager',
              },
            ],
            pros: [
              '설정 화면에서 바로 바꿀 수 있어 가장 빠르고, 나중에 수정하거나 되돌리기도 쉽습니다.',
              '키를 다른 키로 보내는 것뿐 아니라 단축키로 보내는 방식까지 다룰 수 있습니다.',
              'Microsoft 문서 기준으로 저장 후 바로 적용됩니다.',
            ],
            cons: [
              'PowerToys가 백그라운드에서 계속 실행 중이어야 매핑이 유지됩니다.',
              'Microsoft 문서 기준으로 로그인 화면이나 암호 입력 화면에서는 동작하지 않습니다.',
              '보조키 재배치는 일부 제스처, 특수키, 관리자 권한 앱과 충돌할 수 있습니다.',
            ],
            steps: [
              {
                title: '1. PowerToys 설치',
                body: 'Microsoft Store, GitHub 릴리스 페이지, 또는 winget 중 편한 경로로 PowerToys를 설치합니다. Microsoft 설치 안내 문서에 이 경로들이 모두 정리되어 있습니다.',
              },
              {
                title: '2. Keyboard Manager에서 Remap a key 열기',
                body: 'PowerToys 설정에서 Keyboard Manager로 들어가 Remap a key를 누른 뒤, Caps Lock용 새 매핑 행을 추가합니다.',
              },
              {
                title: '3. 원하는 목표 키 선택',
                body: 'Caps Lock을 Control, Escape, Alt 등 원하는 키로 바꿉니다. 생산성 용도로는 Control이 가장 흔한 선택입니다.',
              },
              {
                title: '4. 저장 후 실제 앱에서 확인',
                body: '변경을 저장한 뒤 자주 쓰는 앱에서 바로 테스트해 보세요. 나중에 로그인 화면에서도 같은 동작이 필요하다면 그때는 레지스트리 방식을 선택하는 편이 낫습니다.',
              },
            ],
            notes: [
              '대상 앱이 관리자 권한으로 실행 중인데 PowerToys는 일반 권한이라면, 그 앱 안에서는 재매핑이 바로 적용되지 않을 수 있습니다.',
              'Caps Lock이 가끔은 꼭 필요하다면, 완전히 없애기보다 잘 쓰지 않는 다른 키 하나를 Caps Lock으로 남겨두는 편이 안전합니다.',
            ],
          },
          {
            id: 'registry',
            title: '레지스트리 기반 Scancode Map',
            summary:
              'PowerToys 없이 시스템 수준에서 동작하게 하고 싶거나, 로그인 화면에서도 같은 키 배열을 쓰고 싶다면 이 방법이 더 잘 맞습니다.',
            officialLinks: [
              {
                label: 'Microsoft 스캔 코드 표',
                href: 'https://download.microsoft.com/download/1/6/1/161ba512-40e2-4cc9-843a-923143f3456c/translate.pdf',
              },
            ],
            pros: [
              'Windows 키보드 레이아웃 수준에서 적용되므로 로그인 화면과 암호 입력 화면에서도 유지될 수 있습니다.',
              'PowerToys 같은 백그라운드 유틸리티를 계속 켜 둘 필요가 없습니다.',
              '변경용 파일과 원복용 파일을 함께 보관해 두면 나중에 같은 설정을 다시 재현하거나 되돌리기 쉽습니다.',
            ],
            cons: [
              'GUI 방식보다 불편하고, 제대로 적용되기 전에 로그아웃이나 재시작이 필요한 경우가 많습니다.',
              '단축키 조합처럼 유연한 재매핑보다는 물리 키 위치 교환에 더 가깝습니다.',
              '영문 외 레이아웃에서는 오른쪽 Alt 이동이 AltGr 동작에 영향을 줄 수 있습니다.',
            ],
            steps: [
              {
                title: '1. 아래 생성기에서 바꿀 키 위치 선택',
                body: '각 물리 키 위치가 어떤 키를 대신 보낼지 정합니다. 선택을 바꾸면 미리보기 파일도 바로 갱신되므로, 다운로드 전에 내용을 직접 검토할 수 있습니다.',
              },
              {
                title: '2. 변경용과 원복용 파일을 함께 다운로드',
                body: '새 배열이 손에 맞지 않을 수도 있으니 원복용 파일도 바로 옆에 같이 받아 두세요. 그래야 되돌릴 때 훨씬 편합니다.',
              },
              {
                title: '3. 관리자 승인으로 변경용 .reg 적용',
                body: '생성된 .reg 파일을 열어 Windows에 병합합니다. 시스템 키보드 레이아웃을 건드리는 작업이므로 관리자 승인이 필요한 것이 정상입니다.',
              },
              {
                title: '4. 로그아웃 또는 재시작 후 확인',
                body: 'Windows가 키보드 레이아웃을 다시 불러온 뒤, 평소 쓰는 앱과 로그인 경로까지 함께 테스트해 보세요. 마음에 들지 않으면 원복용 파일을 실행한 뒤 다시 재시작하면 됩니다.',
              },
            ],
            notes: [
              '원한다면 다운로드 전에 미리보기 내용을 직접 읽어 보면서 스캔 코드 쌍이 의도대로 들어갔는지 검토할 수 있습니다.',
              'Caps Lock이 가끔은 꼭 필요하다면, 완전히 지우기보다 잘 안 쓰는 키 하나를 Caps Lock으로 되돌려 두는 편이 안전합니다.',
            ],
          },
        ],
      },
      platforms: [
        {
          id: 'windows',
          title: 'Windows',
          summary:
            'Windows에서는 PowerToys Keyboard Manager가 가장 간단한 방법이고, PowerToys를 켜 두지 않는 시스템 전체 변경이 필요할 때는 아래 레지스트리 기반 Scancode Map 방식을 쓸 수 있습니다.',
          officialLinks: [
            {
              label: 'PowerToys 설치',
              href: 'https://learn.microsoft.com/en-us/windows/powertoys/install',
            },
            {
              label: 'PowerToys Keyboard Manager',
              href: 'https://learn.microsoft.com/en-us/windows/powertoys/keyboard-manager',
            },
            {
              label: 'Microsoft 스캔 코드 표',
              href: 'https://download.microsoft.com/download/1/6/1/161ba512-40e2-4cc9-843a-923143f3456c/translate.pdf',
            },
          ],
          steps: [
            {
              title: '1. 가장 쉬운 방법은 PowerToys Keyboard Manager',
              body: 'PowerToys를 설치한 뒤 Keyboard Manager에서 Remap a key를 열고 Caps Lock을 원하는 키로 바꿉니다. Microsoft 문서에 따르면 PowerToys 방식은 즉시 적용되지만, PowerToys가 백그라운드에서 실행 중이어야 하고 로그인 화면에서는 동작하지 않습니다.',
            },
            {
              title: '2. 시스템 전체 재매핑이 필요하면 레지스트리 방식 사용',
              body: '아래 생성기는 Windows 키 재배치 도구들이 사용하는 Scancode Map 값을 기준으로 .reg 파일을 만들어 줍니다. PowerToys를 계속 켜 두지 않고 시스템 수준에서 재배치하고 싶을 때 적합합니다. 이 매핑은 시스템 키보드 레이아웃 수준에 저장되므로, PowerToys가 동작하지 않는 로그인 화면이나 암호 입력 화면에서도 계속 쓸 수 있다는 장점이 있습니다.',
            },
            {
              title: '3. 변경용 파일과 원복용 파일을 함께 받아두기',
              body: '생성된 변경용 .reg 파일은 관리자 승인 후 적용하고, 나중에 빠르게 되돌릴 수 있도록 원복용 .reg 파일도 함께 보관해 두세요. 원복용 파일은 Scancode Map 값을 제거하는 역할을 합니다.',
            },
            {
              title: '4. 어떤 키를 움직이는지 확인하기',
              body: '이 생성기는 Caps Lock, 왼쪽과 오른쪽 Control, 왼쪽과 오른쪽 Alt 위치를 대상으로 합니다. 스캔 코드 값은 Microsoft의 키보드 스캔 코드 변환 표를 기준으로 잡았으므로, 다운로드 전에 미리보기 내용도 함께 확인할 수 있습니다.',
            },
          ],
          notes: [
            '영문 외 레이아웃에서는 오른쪽 Alt가 AltGr처럼 쓰이는 경우가 많아서, 이 키를 옮기면 일부 특수문자 입력에 영향이 생길 수 있습니다.',
            '변경용 파일을 적용하기 전에는 원복용 파일도 함께 받아 두는 편이 안전합니다. 새 배열이 손에 맞지 않으면 빠르게 되돌릴 수 있기 때문입니다.',
          ],
          placeholder: '',
        },
        {
          id: 'mac',
          title: 'macOS',
          summary:
            'macOS에서는 Karabiner-Elements가 Caps Lock 재매핑을 안정적으로 다루는 가장 표준적인 방법에 가깝습니다.',
          officialLinks: [
            {
              label: 'Karabiner-Elements 공식 홈페이지',
              href: 'https://karabiner-elements.pqrs.org/',
            },
            {
              label: 'Karabiner 설치 안내',
              href: 'https://karabiner-elements.pqrs.org/docs/getting-started/installation/',
            },
            {
              label: 'Karabiner Simple Modifications',
              href: 'https://karabiner-elements.pqrs.org/docs/manual/configuration/configure-simple-modifications/',
            },
            {
              label: 'Karabiner 필수 macOS 설정',
              href: 'https://karabiner-elements.pqrs.org/docs/manual/misc/required-macos-settings/',
            },
            {
              label: 'Apple 입력 소스 설정',
              href: 'https://support.apple.com/guide/mac-help/change-input-sources-settings-on-mac-mchl84525d76/mac',
            },
          ],
          steps: [
            {
              title: '1. Karabiner-Elements 설치와 권한 허용',
              body: '먼저 Karabiner-Elements를 설치한 뒤, 백그라운드 서비스, 입력 모니터링 권한, 드라이버 확장을 모두 허용합니다. Karabiner 공식 문서도 이 항목들을 필수 macOS 설정으로 안내합니다.',
            },
            {
              title: '2. Simple Modifications에서 Caps Lock 변경',
              body: 'Karabiner-Elements를 열고 Simple Modifications로 들어간 뒤, 수정할 키보드를 고르고 caps_lock을 left_control로 바꿉니다. Escape 같은 다른 목표 키가 더 편하다면 그 키를 선택해도 됩니다.',
            },
            {
              title: '3. 선택 사항: Caps Lock이 이미 언어 전환 키일 때만 이어서 보기',
              body: '다음 단계들은 Caps Lock이 이미 입력 소스 전환 용도로 쓰이는 다국어 macOS 환경을 위한 안내입니다. 현재 Caps Lock이 그런 역할을 하고 있지 않다면, 기본 재매핑만으로 충분하므로 아래 선택 사항 단계들은 건너뛰어도 됩니다.',
            },
            {
              title: '4. 선택 사항: 오른쪽 보조키 하나 고르기',
              body: '먼저 오른쪽 보조키 중 하나를 입력 언어 전환용으로 정합니다. 보통은 right_command -> f18이 무난하고, 필요하면 right_option -> f18을 써도 됩니다. 다만 그 키가 현재 레이아웃에서 중요한 문자를 만드는 데 쓰이지 않는지 먼저 확인하는 편이 좋습니다.',
            },
            {
              title: '5. 선택 사항: Karabiner에서 그 오른쪽 키를 F18로 바꾸기',
              body: 'Simple Modifications에서 앞 단계에서 고른 키를 right_command -> f18 또는 right_option -> f18으로 추가합니다. 이렇게 하면 Caps Lock을 재매핑용으로 비우면서도, 키보드 오른쪽에 입력 언어 전환 전용 키를 따로 둘 수 있습니다.',
            },
            {
              title: '6. 선택 사항: macOS에서 F18을 입력 소스 전환 키로 배정',
              body: 'Apple 메뉴 > 시스템 설정 > 키보드 > 키보드 단축키 > 입력 소스로 들어간 뒤, “입력 메뉴에서 다음 소스 선택” 항목에 F18을 지정합니다. 그러면 Caps Lock을 다른 역할로 바꾼 뒤에도 입력 언어 전환 키를 유지할 수 있습니다. 여기서 F18을 권하는 이유는 Apple이 상단 F1-F12 키를 기본 시스템 기능과 연결하고 있고, Karabiner도 F1-F12에 별도 처리가 필요한 경우가 있다고 안내하기 때문입니다.',
            },
          ],
          notes: [
            '저장 전에 실제 키 이름을 확인하고 싶다면 Karabiner 공식 도구인 EventViewer를 쓰는 것이 가장 정확합니다.',
            'Apple은 Caps Lock으로 마지막으로 사용한 라틴 입력 소스와 전환하는 기본 기능도 문서화하고 있습니다. 하지만 Caps Lock 자체를 재배치하고 싶다면, right_command -> f18 경로가 더 유연합니다.',
            'Caps Lock이 가끔은 꼭 필요하다면, 완전히 없애기보다 잘 쓰지 않는 다른 키 하나를 caps_lock으로 남겨두는 편이 좋습니다.',
          ],
          placeholder: '',
        },
        {
          id: 'linux',
          title: 'Linux',
          summary:
            'Linux에서는 특정 데스크톱 환경에 묶이지 않고 시스템 전체에서 동작하는 keyd가 Caps Lock 재매핑에 잘 맞습니다.',
          officialLinks: [
            {
              label: 'keyd 저장소',
              href: 'https://github.com/rvaiya/keyd',
            },
            {
              label: 'keyd README 빠른 시작',
              href: 'https://github.com/rvaiya/keyd#quickstart',
            },
            {
              label: 'keyd 릴리스',
              href: 'https://github.com/rvaiya/keyd/releases',
            },
          ],
          installScript: `git clone https://github.com/rvaiya/keyd
cd keyd
make
sudo make install
sudo systemctl enable --now keyd`,
          installFilename: 'keyd-setup.sh',
          installStepIndex: 0,
          configSnippet: `[ids]
*

[main]
# Caps Lock을 탭하면 Escape, 누르고 있으면 Control로 동작시킵니다.
capslock = overload(control, esc)

# 선택 사항: Escape를 Caps Lock 위치로 되돌립니다.
esc = capslock`,
          configFilename: 'default.conf',
          configStepIndex: 1,
          steps: [
            {
              title: '1. keyd 설치',
              body: '먼저 keyd를 설치합니다. 공식 프로젝트는 git clone, make, sudo make install, sudo systemctl enable --now keyd 순서의 소스 설치 방법을 안내합니다. 안정적인 버전을 선호한다면 공식 릴리스 페이지에서 태그 버전을 먼저 고를 수 있습니다.',
            },
            {
              title: '2. /etc/keyd/default.conf 작성',
              body: '이어서 /etc/keyd/default.conf를 작성합니다. 아래 예시처럼 가장 단순한 overload 설정부터 시작하면 Caps Lock을 탭했을 때는 Escape, 누르고 있을 때는 Control로 동작하게 만들 수 있습니다.',
            },
            {
              title: '3. 데몬 다시 불러오기',
              body: '설정을 저장한 뒤 sudo keyd reload를 실행해 새 매핑을 반영합니다. 적용이 되지 않으면 journalctl -eu keyd로 서비스 로그를 확인하는 것이 가장 빠릅니다.',
            },
            {
              title: '4. 키 이름 확인',
              body: '키보드가 특이하거나 키 이름이 헷갈릴 때는 keyd monitor를 사용합니다. 원래 입력 이벤트를 보고 싶다면 keyd를 잠시 멈춘 뒤 다시 모니터링하면 됩니다.',
            },
            {
              title: '5. 비상 종료 키 기억해두기',
              body: '설정이 잘못되어 키보드가 불편해졌다면 backspace+escape+enter 조합으로 keyd를 종료할 수 있다고 공식 문서에 안내되어 있습니다.',
            },
          ],
          notes: [
            '공식 README는 master 브랜치를 개발 브랜치로 설명하고, 태그된 릴리스를 안정 버전으로 보라고 안내합니다.',
            'README에는 Debian 13 이상과 Ubuntu 25.04 이상에서 apt install keyd도 안내되어 있지만, 위 스크립트는 배포판 전반에 설명하기 쉬운 설치 흐름입니다.',
            'Caps Lock이 가끔은 꼭 필요하다면, 완전히 없애기보다 잘 안 쓰는 다른 키 하나에 Caps Lock을 남겨두는 편이 좋습니다.',
          ],
          placeholder: '',
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
