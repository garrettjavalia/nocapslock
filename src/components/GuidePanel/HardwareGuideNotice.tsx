import { Trans } from 'react-i18next'
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
      <Trans
        i18nKey="guide.hardware.notice"
        components={{
          hardwareGuideLink: (
            <NavLink
              to={getGuidePath(locale, 'hardware')}
              preventScrollReset
              className={guideStyles.inlineLink}
            />
          ),
        }}
      />
    </p>
  )
}
