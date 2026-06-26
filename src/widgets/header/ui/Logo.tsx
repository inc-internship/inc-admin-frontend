'use client'

import Link from 'next/link'
import { ROUTES, getLocalizedRoute } from '@/shared/constants'
import { useI18n } from '@/shared/i18n'
import s from './Header.module.scss'

export const Logo = () => {
  const { locale, t } = useI18n()

  return (
    <Link
      href={getLocalizedRoute(locale, ROUTES.main)}
      className={s.logo}
      aria-label={t('header.logoLabel')}
    >
      <span className={s.logoName}>Inctagram</span>
      <span className={s.logoSuffix}>
        <span className={s.logoSuper}>Super</span>
        <span className={s.logoAdmin}>Admin</span>
      </span>
    </Link>
  )
}
