'use client'

import type { ReactNode } from 'react'
import { selectIsSessionInitialized } from '@/app/providers/store'
import { useAppSelector } from '@/shared/store'
import { PageSpinner } from '@/shared/ui/Spinner'

type AuthGateProps = Readonly<{
  children: ReactNode
}>

/** Blocks rendering until the session has been initialized (avoids auth flicker). */
export const AuthGate = ({ children }: AuthGateProps) => {
  const isInitialized = useAppSelector(selectIsSessionInitialized)

  if (!isInitialized) {
    return <PageSpinner />
  }

  return children
}
