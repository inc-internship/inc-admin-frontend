'use client'

import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { selectIsAuthenticated, selectIsSessionInitialized } from '@/app/providers/store'
import { useAppSelector } from '@/shared/store'
import { ROUTES, getLocalizedRoute } from '@/shared/constants'
import { useI18n } from '@/shared/i18n'

type GuestOnlyProps = Readonly<{
  children: ReactNode
}>

/** Allows only guests (login page); authenticated users are sent to the app. */
export const GuestOnly = ({ children }: GuestOnlyProps) => {
  const router = useRouter()
  const { locale } = useI18n()
  const isAuthenticated = useAppSelector(selectIsAuthenticated)
  const isInitialized = useAppSelector(selectIsSessionInitialized)

  useEffect(() => {
    if (isAuthenticated) {
      router.replace(getLocalizedRoute(locale, ROUTES.main))
    }
  }, [isAuthenticated, locale, router])

  if (!isInitialized || isAuthenticated) {
    return null
  }

  return children
}
