'use client'

import { ReactNode } from 'react'
import { Typography } from '@/shared/ui/Typography'
import { useI18n } from '@/shared/i18n'
import s from './PagePlaceholder.module.scss'

type Props = {
  /** i18n key for the page title. */
  titleKey: string
  children?: ReactNode
}

/** Temporary page body: renders a localized title inside the app shell. */
export const PagePlaceholder = ({ titleKey, children }: Props) => {
  const { t } = useI18n()

  return (
    <section className={s.placeholder}>
      <Typography variant="h1">{t(titleKey)}</Typography>
      {children}
    </section>
  )
}
