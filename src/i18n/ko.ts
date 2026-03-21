import { sharedGuideCopy } from './shared'

export const koTranslation = {
  meta: {
    title: 'No Capslock Anymore | 캡스락을 더 좋은 키로 바꾸기',
    description:
      '캡스락을 Control, Command, Escape로 바꾸는 이유를 소개하고, 브라우저에서 바로 체험할 수 있는 다국어 웹페이지입니다.',
    keywords:
      '캡스락 변경, caps lock remap, caps lock to control, caps lock to command, caps lock to escape, 키보드 생산성',
  },
  chrome: {
    github: 'GitHub',
    language: '언어',
  },
  theme: {
    light: '라이트 모드',
    dark: '다크 모드',
  },
  hero: {
    title: '이제 캡스락은 그만!',
    lead:
      '캡스락은 키보드에서 가장 중요한 자리를 차지하고 있습니다. 실제로 자주 쓰는 단축키용 키로 바꾸면 손이 훨씬 편해집니다.',
  },
  preview: {
    kicker: '바꿔보세요',
    title: '같은 키를 훨씬 유용하게 쓸 수 있습니다',
    captionTemplate: '{device}에서는 보통 {key}가 가장 유용합니다.',
    device: {
      mac: 'macOS',
      android: 'Android',
      ios: 'iOS',
      windows: 'Windows',
      linux: 'Linux',
      unix: 'Unix',
      other: '이 기기',
    },
    key: {
      capsLock: 'Caps Lock',
      command: 'Command',
      control: 'Control',
      escape: 'Escape',
    },
  },
  demo: {
    kicker: '직접 체험하기',
    title: 'Caps Lock을 단축키 보조키처럼 써보기',
    bodyTemplate:
      '아래 텍스트 입력 영역에서는 [[Caps Lock]]이 [[A]], [[C]], [[V]], [[X]]에 대해 가상 [[{modifier}]] 보조키처럼 동작합니다. 시스템 설정을 바꾸기 전에 편리함을 먼저 느껴보실 수 있습니다. 클립보드 동작은 처음 한 번 브라우저 권한을 요청할 수 있습니다.',
    virtualModifierPrefix: '가상',
    status: {
      prefix: '상태',
      idle: '대기 중',
      armed: '가상 보조키 활성',
    },
    instructions:
      '[[Caps Lock]]을 한 번 누른 뒤 1초 안에 [[A]], [[C]], [[V]], [[X]] 중 하나를 누르면 이 데모에서는 [[{modifier}]] 단축키처럼 동작합니다. 단축키를 한 번 쓸 때마다 [[Caps Lock]]을 다시 눌러야 합니다.',
    restoreNote:
      '체험이 끝나면 다음 작업에 지장이 없도록 [[Caps Lock]]을 원래 상태로 돌려두세요. 브라우저와 운영체제에 따라 버그가 있을 수 있습니다.',
    text: `이 입력 영역에서 Caps Lock을 눌러 보세요.

Caps Lock + A 는 전체 선택,
Caps Lock + C 는 복사,
Caps Lock + V 는 붙여넣기,
Caps Lock + X 는 잘라내기처럼 동작합니다.

브라우저 안의 간단한 체험이지만 편리함을 느껴보실 수 있습니다.`,
  },
  guide: {
    kicker: '설정 가이드',
    title: '운영체제별 설정 가이드',
    intro: '사용 중인 운영체제를 골라, 그에 맞는 설정 방법을 차근차근 따라가 보세요.',
    label: {
      references: '참고 자료',
      steps: '단계별 안내',
      notes: '참고 사항',
    },
    codeBlock: {
      install: {
        label: '설치 스크립트',
        copy: '스크립트 복사',
        copied: '복사됨',
        download: '스크립트 다운로드',
      },
      config: {
        label: '예시 설정',
        copy: '설정 복사',
        copied: '복사됨',
        download: '설정 다운로드',
      },
    },
    registryGenerator: {
      title: '레지스트리 파일 생성기',
      sourceLabel: '현재 키 위치',
      targetLabel: '대신 보낼 키',
      remapPreviewLabel: '생성된 변경용 .reg 파일',
      revertPreviewLabel: '원복용 .reg 파일',
      copyFileLabel: '내용 복사',
      copiedFileLabel: '복사됨',
      downloadRemapLabel: '변경용 .reg 다운로드',
      downloadRevertLabel: '원복용 .reg 다운로드',
      noChangesLabel: '하나 이상 다른 키로 바꿔야 변경용 파일을 만들 수 있습니다.',
      registryPathLabel:
        '레지스트리 경로: HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Keyboard Layout',
      restartNote:
        '이 레지스트리 방식은 시스템 전체에 적용됩니다. 변경이 바로 보이지 않으면 로그아웃하거나 Windows를 다시 시작하세요.',
      resetLabel: '선택 초기화',
      key: {
        capsLock: 'Caps Lock',
        leftCtrl: '왼쪽 Ctrl',
        rightCtrl: '오른쪽 Ctrl',
        leftAlt: '왼쪽 Alt',
        rightAlt: '오른쪽 Alt',
      },
    },
    windows: {
      title: 'Windows',
      summary:
        'Windows에서는 PowerToys Keyboard Manager가 가장 간단한 방법이고, [[Caps Lock]]을 PowerToys 없이 시스템 전체에서 바꾸고 싶을 때는 아래 레지스트리 기반 Scancode Map 방식을 쓸 수 있습니다.',
      methodChoiceIntro: 'Windows에서는 PowerToys와 레지스트리 방식 중 하나만 고르면 됩니다.',
      method: {
        prosLabel: '장점',
        consLabel: '알아둘 점',
        powertoys: {
          title: 'PowerToys Keyboard Manager',
          summary:
            '설정 화면에서 빠르게 바꾸고, 나중에 다시 손볼 가능성이 있다면 이 방법이 가장 편합니다.',
          referenceLabel1: sharedGuideCopy.ko.powerToysInstallationLabel,
          referenceLabel2: sharedGuideCopy.ko.powerToysKeyboardManagerLabel,
          pro1: '설정 화면에서 바로 바꿀 수 있어 빠르고, 나중에 수정하거나 되돌리기도 쉽습니다.',
          pro2: '키를 다른 키로 보내는 것뿐 아니라 단축키로 보내는 방식까지 다룰 수 있습니다.',
          pro3: 'Microsoft 문서 기준으로 저장하면 바로 적용됩니다.',
          con1: 'PowerToys가 백그라운드에서 계속 실행 중이어야 매핑이 유지됩니다.',
          con2: 'Microsoft 문서 기준으로 로그인 화면이나 암호 입력 화면에서는 동작하지 않습니다.',
          con3: '보조키 재배치는 일부 제스처, 특수키, 관리자 권한 앱과 충돌할 수 있습니다.',
          steps: {
            step01: {
              title: '1. PowerToys 설치',
              body: 'Microsoft Store, GitHub 릴리스 페이지, 또는 winget 중 편한 경로로 PowerToys를 설치합니다. Microsoft 설치 안내 문서에 이 경로들이 모두 정리되어 있습니다.',
            },
            step02: {
              title: '2. Keyboard Manager에서 Remap a key 열기',
              body: 'PowerToys 설정에서 Keyboard Manager로 들어가 Remap a key를 누른 뒤, [[Caps Lock]]용 새 매핑 행을 추가합니다.',
            },
            step03: {
              title: '3. 원하는 목표 키 선택',
              body: '[[Caps Lock]]을 [[Control]], [[Escape]], [[Alt]] 등 원하는 키로 바꿉니다. 생산성 용도로는 [[Control]]이 가장 흔한 선택입니다.',
            },
            step04: {
              title: '4. 저장 후 실제 앱에서 확인',
              body: '변경을 저장한 뒤 자주 쓰는 앱에서 바로 확인해 보세요. 로그인 화면에서도 같은 동작이 필요하다면 레지스트리 방식이 더 잘 맞습니다.',
            },
          },
          note1:
            '대상 앱이 관리자 권한으로 실행 중인데 PowerToys는 일반 권한이라면, 그 앱 안에서는 재매핑이 바로 적용되지 않을 수 있습니다.',
          note2: sharedGuideCopy.ko.keepCapsLockNote,
        },
        registry: {
          title: '레지스트리 기반 Scancode Map',
          summary:
            'PowerToys 없이 시스템 전체에 적용하고 싶거나, 로그인 화면에서도 같은 키 배열을 쓰고 싶다면 이 방법이 더 잘 맞습니다.',
          referenceLabel1: sharedGuideCopy.ko.scanCodeTablePdfLabel,
          pro1: 'PowerToys에 의존하지 않고 시스템 전체에 적용할 수 있습니다.',
          pro2: 'PowerToys 같은 백그라운드 유틸리티를 계속 켜 둘 필요가 없습니다.',
          pro3: '변경용 파일과 원복용 파일을 함께 보관해 두면 나중에 다시 적용하거나 되돌리기 쉽습니다.',
          con1: 'GUI 방식보다 불편하고, 제대로 적용되기 전에 로그아웃이나 재시작이 필요한 경우가 많습니다.',
          con2: '단축키 조합처럼 유연한 재매핑보다는 물리 키 위치 교환에 더 가깝습니다.',
          con3: sharedGuideCopy.ko.rightAltWarning,
          steps: {
            step01: {
              title: '1. 아래 생성기에서 바꿀 키 위치 선택',
              body: '각 물리 키 위치가 어떤 키를 대신 보낼지 정합니다. 선택을 바꾸면 미리보기 파일도 바로 바뀌므로, 다운로드 전에 내용을 직접 확인할 수 있습니다.',
            },
            step02: {
              title: '2. 변경용과 원복용 파일을 함께 다운로드',
              body: '새 배열이 손에 맞지 않을 수도 있으니 원복용 파일도 함께 받아 두세요. 그래야 되돌릴 때 훨씬 편합니다.',
            },
            step03: {
              title: '3. 관리자 승인으로 변경용 .reg 적용',
              body: '생성된 .reg 파일을 열어 Windows에 병합합니다. 시스템 키보드 레이아웃을 건드리는 작업이므로 관리자 승인이 필요한 것이 정상입니다.',
            },
            step04: {
              title: '4. 로그아웃 또는 재시작 후 확인',
              body: 'Windows가 키보드 레이아웃을 다시 불러온 뒤, 평소 쓰는 앱에서 먼저 확인해 보세요. 로그인 화면까지 반영되는지는 환경에 따라 직접 확인해 두는 편이 좋습니다. 마음에 들지 않으면 원복용 파일을 실행한 뒤 다시 시작하면 됩니다.',
            },
          },
          note1:
            '원한다면 다운로드 전에 미리보기 내용을 직접 읽어 보면서 스캔 코드 쌍이 의도대로 들어갔는지 확인할 수 있습니다.',
          note2: sharedGuideCopy.ko.keepCapsLockNote,
        },
      },
    },
    mac: {
      title: 'macOS',
      summary:
        'macOS에서는 Karabiner-Elements가 [[Caps Lock]] 재매핑을 안정적으로 다루는 가장 표준적인 방법에 가깝습니다.',
      referenceLabel1: 'Karabiner-Elements 공식 홈페이지',
      referenceLabel2: 'Karabiner 설치 안내',
      referenceLabel3: 'Karabiner Simple Modifications',
      referenceLabel4: 'Karabiner 필수 macOS 설정',
      referenceLabel5: 'Karabiner 로그인 전 적용 안내',
      referenceLabel6: 'Apple 입력 소스 설정',
      steps: {
        step01: {
          title: '1. Karabiner-Elements 설치와 권한 허용',
          body: '먼저 Karabiner-Elements를 설치한 뒤, 백그라운드 서비스, 입력 모니터링 권한, 드라이버 확장을 모두 허용합니다. Karabiner 공식 문서도 이 항목들을 필수 macOS 설정으로 안내합니다.',
        },
        step02: {
          title: '2. Simple Modifications에서 [[Caps Lock]] 변경',
          body: 'Karabiner-Elements를 열고 Simple Modifications로 들어간 뒤, 수정할 키보드를 고르고 [[Caps Lock]]을 [[Left Control]]로 바꿉니다. [[Escape]]가 더 편하다면 그 키를 골라도 됩니다.',
        },
        step03: {
          title: '3. 선택 사항: 로그인 창에서도 같은 매핑 쓰기',
          body: '로그인 전에 뜨는 암호 입력 화면에서도 같은 키 매핑을 쓰고 싶다면, Karabiner 설정의 Misc 탭에서 “Copy the current configuration to the system default configuration” 버튼을 누르세요. 공식 문서에 따르면 이렇게 복사한 설정은 로그인 전 화면에도 적용됩니다.',
        },
        step04: {
          title: '4. 선택 사항: [[Caps Lock]]이 이미 언어 전환 키일 때만 이어서 보기',
          body: '다음 단계들은 [[Caps Lock]]이 이미 입력 소스 전환용으로 쓰이는 다국어 macOS 환경을 위한 안내입니다. 입력 전환을 다른 키로 옮겨 두면 [[Caps Lock]]을 재매핑하더라도 언어 전환 키를 따로 유지할 수 있고, 짧게 눌러 전환할 때 간혹 생기는 오류도 줄일 수 있습니다. 현재 [[Caps Lock]]이 그런 역할을 하고 있지 않다면, 기본 재매핑만으로 충분하므로 아래 단계는 건너뛰어도 됩니다.',
          substeps: {
            step04_1: {
              title: '4-1. 오른쪽 보조키 하나 고르기',
              body: '먼저 오른쪽 보조키 중 하나를 입력 언어 전환용으로 정합니다. 보통은 [[Right Command]] -> [[F18]]이 무난하고, 필요하면 [[Right Option]] -> [[F18]]을 써도 됩니다. 다만 그 키가 현재 레이아웃에서 중요한 문자를 만드는 데 쓰이지 않는지는 먼저 확인해 두는 편이 좋습니다.',
            },
            step04_2: {
              title: '4-2. Karabiner에서 그 오른쪽 키를 [[F18]]로 바꾸기',
              body: 'Simple Modifications에서 앞 단계에서 고른 키를 [[Right Command]] -> [[F18]] 또는 [[Right Option]] -> [[F18]]으로 추가합니다. 이렇게 하면 [[Caps Lock]]을 다른 용도로 바꾸더라도, 키보드 오른쪽에 입력 언어 전환용 키를 따로 둘 수 있습니다.',
            },
            step04_3: {
              title: '4-3. macOS에서 [[F18]]을 입력 소스 전환 키로 배정',
              body: 'Apple 메뉴 > 시스템 설정 > 키보드 > 키보드 단축키 > 입력 소스로 들어간 뒤, “입력 메뉴에서 다음 소스 선택” 항목에 [[F18]]을 지정합니다. 그러면 [[Caps Lock]]을 다른 역할로 바꾼 뒤에도 입력 언어 전환 키를 유지할 수 있습니다. 여기서는 [[F18]]을 실사용 예시로 사용합니다. Apple 문서상 [[F1]]부터 [[F12]]까지는 기본 시스템 기능과 연결되어 있으므로, 입력 소스 전환용 키는 그보다 높은 번호의 기능키가 다루기 편한 경우가 많습니다. 그중에서도 [[F18]]은 특수 기능과 겹치지 않아 무난하게 쓸 수 있었습니다.',
            },
          },
        },
      },
      note1: '저장 전에 실제 키 이름을 확인하고 싶다면 Karabiner 공식 도구인 EventViewer가 가장 정확합니다.',
      note2:
        'Apple은 [[Caps Lock]]으로 마지막으로 사용한 라틴 입력 소스로 전환하는 기본 기능도 문서화하고 있습니다. 하지만 [[Caps Lock]] 자체를 재배치하고 싶다면 [[Right Command]] -> [[F18]] 같은 별도 입력 전환 키를 두는 쪽이 더 유연합니다.',
      note3: sharedGuideCopy.ko.keepCapsLockNote,
    },
    linux: {
      title: 'Linux',
      summary:
        'Linux에서는 특정 데스크톱 환경에 묶이지 않고 시스템 전체에서 동작하는 keyd가 [[Caps Lock]] 재매핑에 잘 맞습니다.',
      referenceLabel1: 'keyd 저장소',
      referenceLabel2: 'keyd README 빠른 시작',
      referenceLabel3: 'keyd 릴리스',
      installScript: `git clone https://github.com/rvaiya/keyd
cd keyd
make
sudo make install
sudo systemctl enable --now keyd`,
      installFilename: 'keyd-setup.sh',
      configSnippet: `[ids]
*

[main]
# Caps Lock을 탭하면 Escape, 누르고 있으면 Control로 동작시킵니다.
capslock = overload(control, esc)

# 선택 사항: Escape를 Caps Lock 위치로 되돌립니다.
esc = capslock`,
      configFilename: 'default.conf',
      steps: {
        step01: {
          title: '1. keyd 설치',
          body: '먼저 keyd를 설치합니다. 공식 프로젝트는 git clone, make, sudo make install, sudo systemctl enable --now keyd 순서의 소스 설치 방법을 안내합니다. 안정 버전을 선호한다면 공식 릴리스 페이지에서 태그된 버전을 고르면 됩니다.',
        },
        step02: {
          title: '2. /etc/keyd/default.conf 작성',
          body: '이어서 /etc/keyd/default.conf를 작성합니다. 아래 예시처럼 가장 단순한 overload 설정부터 시작하면 [[Caps Lock]]을 탭했을 때는 [[Escape]], 누르고 있을 때는 [[Control]]로 쓸 수 있습니다.',
        },
        step03: {
          title: '3. 데몬 다시 불러오기',
          body: '설정을 저장한 뒤 sudo keyd reload를 실행해 새 매핑을 반영합니다. 적용되지 않으면 journalctl -eu keyd로 서비스 로그를 확인해 보세요.',
        },
        step04: {
          title: '4. 키 이름 확인',
          body: '키보드가 특이하거나 키 이름이 헷갈릴 때는 keyd monitor로 입력을 살펴보세요. 원래 입력 이벤트를 확인하려면 keyd를 잠시 멈춘 뒤 다시 살펴보면 됩니다.',
        },
        step05: {
          title: '5. 비상 종료 키 기억해두기',
          body: '설정이 잘못되어 키보드가 불편해졌다면 [[Backspace]] + [[Escape]] + [[Enter]] 조합으로 keyd를 종료할 수 있다고 공식 문서에 적혀 있습니다.',
        },
      },
      note1: '공식 README는 master 브랜치를 개발 브랜치로 설명하고, 태그된 릴리스를 안정 버전으로 보라고 안내합니다.',
      note2:
        'README에는 Debian 13 이상과 Ubuntu 25.04 이상에서 apt install keyd도 안내되어 있지만, 위 스크립트는 배포판 전반에 설명하기 쉬운 흐름입니다.',
      note3: sharedGuideCopy.ko.keepCapsLockNote,
    },
  },
} as const

export const koMessages = koTranslation
