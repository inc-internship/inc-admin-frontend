'use client'

import { useEffect } from 'react'
import { initializeSession } from '@/app/providers/store'
import { useAppDispatch } from '@/shared/store'
import { getAccessToken } from '@/shared/lib/authToken'

/**
 * Bootstraps the auth session once on mount.
 *
 * No backend yet: the presence of the persisted token marks the user as
 * authenticated. When an auth API is added, replace this with a refresh/getMe
 * flow (see `inc-frontend` AuthInitializer for the full version).
 */
export const AuthInitializer = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const isAuthenticated = Boolean(getAccessToken())

    dispatch(initializeSession({ isAuthenticated }))
  }, [dispatch])

  return null
}
