const COOKIE_NAME = 'auth_hint'
const MAX_AGE_30_DAYS = 60 * 60 * 24 * 30

/**
 * Lightweight, non-sensitive hint that the user is likely authenticated.
 * Lets the server read a "maybe logged in" signal (e.g. to render a skeleton)
 * without exposing the access token. Real protection stays on the guards.
 */
export const setAuthHintCookie = () => {
  document.cookie = `${COOKIE_NAME}=1; path=/; SameSite=Strict; max-age=${MAX_AGE_30_DAYS}`
}

export const clearAuthHintCookie = () => {
  document.cookie = `${COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}
