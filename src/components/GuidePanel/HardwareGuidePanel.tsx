import { getGuidePath } from '../../guides'
import { guideSectionIds } from '../../guideAnchors'
import type { Locale } from '../../i18n'
import * as styles from '../../styles/app.css'
import { HeadlineCopyLinkButton } from '../CopyLink'
import * as guideStyles from '../GuideSections/GuideSections.css'

type HardwareGuidePanelProps = {
  locale: Locale
}

export function HardwareGuidePanel({ locale }: HardwareGuidePanelProps) {
  const content = {
    title: '전용 하드웨어',
    summary:
      '일부 키보드는 Caps Lock, Control, Escape 같은 키를 운영체제가 아니라 키보드 자체에서 바꿀 수 있습니다. 이런 기능을 지원한다면 Windows, macOS, Linux 설정보다 더 간단하게 해결할 수 있습니다.',
    advantagesTitle: '장점',
    advantages: [
      '다른 컴퓨터에 연결해도 설정이 키보드와 함께 유지될 수 있습니다.',
      '로그인 전 화면이나 메인 사용자 세션 밖에서도 동작할 수 있습니다.',
      '회사 PC처럼 운영체제 수준 변경이 제한된 환경에서 특히 유용할 수 있습니다.',
    ],
    cautionsTitle: '주의할 점',
    cautions: [
      '모든 키보드가 이 방식을 지원하는 것은 아닙니다.',
      '일부 도구는 유선 USB 연결에서만 동작합니다.',
      '펌웨어 기반 도구는 강력하지만, 처음 시작하기 가장 쉬운 방법은 아닐 수 있습니다.',
    ],
    referencesTitle: '참고 자료',
    sections: [
      {
        id: guideSectionIds.hardwareSwitches,
        title: '하드웨어 스위치와 내장 모드',
        body: [
          '일부 키보드는 배열 변경 기능을 하드웨어에서 바로 제공합니다. 대표적인 예가 DIP 스위치로 Control과 Caps Lock을 바꾸거나, Backspace와 Delete를 바꾸거나, 플랫폼별 모드를 전환하는 방식입니다.',
          'HHKB처럼 이 기능이 잘 알려진 제품도 있습니다. 모델에 따라 DIP 스위치나 내장 레이어로 Control, Caps Lock, Fn 계열 배치를 조정할 수 있습니다.',
          '바꿀 수 있는 범위는 비교적 좁지만, 빠르고 안정적이며 백그라운드 소프트웨어가 필요하지 않습니다.',
        ],
        examplesTitle: '예시 제품',
        examples: [
          {
            label: 'HHKB',
            href: 'https://happyhackingkb.com/',
            guideLabel: 'DIP 스위치 문서',
            guideHref: 'https://happyhackingkb.com/manual/studio/ug-us/en/ug/topic/set_dipswitch.html',
          },
        ],
        references: [
          {
            label: 'HHKB 공식 다운로드와 키맵 도구',
            href: 'https://happyhackingkb.com/download/',
          },
          {
            label: 'HHKB Studio DIP 스위치 매뉴얼',
            href: 'https://happyhackingkb.com/manual/studio/ug-us/en/ug/topic/set_dipswitch.html',
          },
          {
            label: 'HHKB Studio 레이어와 Fn 키 문서',
            href: 'https://happyhackingkb.com/manual/studio/ug-us/en/ug/topic/use_fnkeys_layer.html',
          },
        ],
      },
      {
        id: guideSectionIds.hardwareVendorTools,
        title: '설정 도구와 펌웨어 기반 remap',
        body: [
          '일부 키보드는 제조사에서 전용 설정 도구를 제공합니다. 보통 시각적인 레이아웃 편집기에서 키를 바꾸고, 레이어나 단축키를 함께 설정할 수 있습니다.',
          '이런 도구는 제조사 자체 펌웨어나 QMK, VIA, Vial, ZMK 같은 오픈소스 펌웨어를 기반으로 동작합니다.',
          '전용 설정 도구를 쓰는 방식은 직접 펌웨어를 수정하거나 컴파일하는 것보다 시작하기 쉽습니다. 다만 지원 모델에서만 쓸 수 있고, 일부 도구는 유선 USB 연결이 필요합니다.',
        ],
        examplesTitle: '예시 제품',
        examples: [
          {
            label: 'HHKB',
            href: 'https://happyhackingkb.com/',
            guideLabel: '설정 가이드',
            guideHref: 'https://happyhackingkb.com/manual/studio/ug-us/en/ug/topic/keymaptool.html',
          },
          {
            label: 'Keychron',
            href: 'https://www.keychron.com/',
            guideLabel: '설정 도구 페이지',
            guideHref: 'https://launcher.keychron.com/',
          },
          {
            label: 'ZSA',
            href: 'https://www.zsa.io/',
            guideLabel: '설정 도구 페이지',
            guideHref: 'https://configure.zsa.io/',
          },
          {
            label: 'Wooting',
            href: 'https://wooting.io/',
            guideLabel: '설정 도구 페이지',
            guideHref: 'https://wootility.io/',
          },
          {
            label: 'Dygma',
            href: 'https://dygma.com/',
            guideLabel: '설정 도구 페이지',
            guideHref: 'https://dygma.com/bazecor',
          },
          {
            label: 'NuPhy',
            href: 'https://nuphy.com/',
            guideLabel: '설정 가이드',
            guideHref: 'https://nuphy.com/pages/via-usage-guide-for-nuphy-keyboards',
          },
        ],
        references: [
          {
            label: 'HHKB 다운로드와 키맵 도구',
            href: 'https://happyhackingkb.com/download/',
          },
          {
            label: 'HHKB Studio 키맵 도구 매뉴얼',
            href: 'https://happyhackingkb.com/manual/studio/ug-us/en/ug/topic/keymaptool.html',
          },
          {
            label: 'Keychron Launcher remap 가이드',
            href: 'https://www.keychron.com/blogs/news/how-to-remap-a-key-on-launcher',
          },
          {
            label: 'ZSA Voyager와 Oryx 소개',
            href: 'https://www.zsa.io/voyager',
          },
          {
            label: 'ZSA 플래싱과 Keymapp 문서',
            href: 'https://www.zsa.io/flash',
          },
          {
            label: 'Wooting 80HE와 Wootility 소개',
            href: 'https://wooting.io/wooting-80he',
          },
          {
            label: 'Wooting remap 예시 문서',
            href: 'https://help.wooting.io/article/95-swap-around-option-and-command-key-on-mac-osx',
          },
          {
            label: 'Dygma Bazecor 다운로드',
            href: 'https://support.dygma.com/hc/en-us/articles/22652367088797-How-to-download-the-latest-version-of-Bazecor',
          },
          {
            label: 'Dygma 레이아웃 커스터마이즈 가이드',
            href: 'https://support.dygma.com/hc/en-us/articles/22652578889501-How-to-customize-the-layout',
          },
          {
            label: 'QMK keymap 문서',
            href: 'https://docs.qmk.fm/keymap',
          },
          {
            label: 'VIA 문서',
            href: 'https://caniusevia.com/docs/specification/',
          },
          {
            label: 'Vial 사용자 문서',
            href: 'https://get.vial.today/manual/first-use.html',
          },
          {
            label: 'ZMK Studio 문서',
            href: 'https://zmk.dev/docs/features/studio',
          },
          {
            label: 'NuPhy VIA 사용 가이드',
            href: 'https://nuphy.com/pages/via-usage-guide-for-nuphy-keyboards',
          },
        ],
      },
    ],
  }
  const references = Array.from(
    new Map(
      content.sections
        .flatMap((section) => [
          ...section.references,
          ...section.examples.map((example) => ({
            label: `${example.label} 공식 페이지`,
            href: example.href,
          })),
          ...section.examples.map((example) => ({
            label: `${example.label} ${example.guideLabel}`,
            href: example.guideHref,
          })),
        ])
        .map((reference) => [reference.href, reference]),
    ).values(),
  )

  return (
    <article id={guideSectionIds.hardware} className={styles.guideCard}>
      <div className={styles.guideCardTitleRow}>
        <h3 className={styles.guideCardTitle}>{content.title}</h3>
        <HeadlineCopyLinkButton
          label={content.title}
          path={getGuidePath(locale, 'hardware')}
          hash={guideSectionIds.hardware}
        />
      </div>
      <p className={styles.panelCopy}>{content.summary}</p>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{content.advantagesTitle}</p>
        <ul className={guideStyles.notesList}>
          {content.advantages.map((item) => (
            <li key={item} className={guideStyles.noteItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{content.cautionsTitle}</p>
        <ul className={guideStyles.notesList}>
          {content.cautions.map((item) => (
            <li key={item} className={guideStyles.noteItem}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {content.sections.map((section) => (
        <section key={section.id} id={section.id} className={guideStyles.section}>
          <div className={styles.guideCardTitleRow}>
            <h4 className={styles.guideSubheading}>{section.title}</h4>
            <HeadlineCopyLinkButton
              label={section.title}
              path={getGuidePath(locale, 'hardware')}
              hash={section.id}
            />
          </div>
          {section.body.map((paragraph) => (
            <p key={paragraph} className={styles.panelCopy}>
              {paragraph}
            </p>
          ))}
          {'examples' in section && section.examples ? (
            <>
              <p className={guideStyles.label}>{section.examplesTitle}</p>
              <ul className={guideStyles.notesList}>
                {section.examples.map((example) => (
                  <li key={example.href} className={guideStyles.noteItem}>
                    <a
                      className={guideStyles.inlineLink}
                      href={example.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {example.label}
                    </a>{' '}
                    (
                    <a
                      className={guideStyles.inlineLink}
                      href={example.guideHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {example.guideLabel}
                    </a>
                    )
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </section>
      ))}

      <section className={guideStyles.section}>
        <p className={guideStyles.label}>{content.referencesTitle}</p>
        <div className={guideStyles.linkList}>
          {references.map((reference) => (
            <a
              key={reference.href}
              className={guideStyles.sourceLink}
              href={reference.href}
              target="_blank"
              rel="noreferrer"
            >
              {reference.label}
            </a>
          ))}
        </div>
      </section>
    </article>
  )
}
