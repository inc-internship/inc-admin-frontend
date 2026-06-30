'use client'

import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { selectIsAuthenticated } from '@/app/providers/store'
import { useAppSelector } from '@/shared/store'
import { ROUTES, getLocalizedRoute } from '@/shared/constants'
import { useI18n } from '@/shared/i18n'
import { PageSpinner } from '@/shared/ui/Spinner'

type PrivateOnlyProps = Readonly<{
  children: ReactNode
}>

/** Allows only authenticated users; otherwise redirects to the login page. */
export const PrivateOnly = ({ children }: PrivateOnlyProps) => {
  const router = useRouter()
  const { locale } = useI18n()
  const isAuthenticated = useAppSelector(selectIsAuthenticated)

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(getLocalizedRoute(locale, ROUTES.login))
    }
  }, [isAuthenticated, locale, router])

  if (!isAuthenticated) {
    return <PageSpinner />
  }

  return children
}
