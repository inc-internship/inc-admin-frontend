/**
 * Persisted auth marker.
 *
 * There is no auth backend yet, so the presence of this token in localStorage
 * is what `AuthInitializer` treats as "the user is authenticated". Once a real
 * auth API exists, store the real access token here from the login mutation.
 */
export const ACCESS_TOKEN_KEY = 'adminAccessToken'

export const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') {
    return null
  }

  return window.localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const setAccessToken = (token: string) => {
  window.localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export const clearAccessToken = () => {
  window.localStorage.removeItem(ACCESS_TOKEN_KEY)
}
