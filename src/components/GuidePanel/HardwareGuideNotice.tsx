import { NavLink } from 'react-router-dom'
import { getGuidePath } from '../../guides'
import type { Locale } from '../../i18n'
import * as styles from '../../styles/app.css'
import * as guideStyles from '../GuideSections/GuideSections.css'

type HardwareGuideNoticeProps = {
  locale: Locale
}

export function HardwareGuideNotice({ locale }: HardwareGuideNoticeProps) {
  return (
    <p className={styles.guideIntro}>
      키보드가 DIP 스위치, 제조사 키맵 도구, QMK, VIA, Vial, ZMK 같은 펌웨어 remap을
      지원한다면, 운영체제 설정보다{' '}
      <NavLink
        to={getGuidePath(locale, 'hardware')}
        preventScrollReset
        className={guideStyles.inlineLink}
      >
        전용 하드웨어
      </NavLink>{' '}
      탭을 먼저 확인해 보세요.
    </p>
  )
}
