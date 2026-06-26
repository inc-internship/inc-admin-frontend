import { stripLocaleFromPathname } from '@/shared/i18n/routing'
import { SIDEBAR_NAV_ITEMS } from './config'
import { SidebarItemId } from './types'

const normalizePath = (path: string) => {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1)
  }

  return path
}

const matchesPath = (pathname: string, href: string) => {
  const normalizedPathname = normalizePath(stripLocaleFromPathname(pathname))
  const normalizedHref = normalizePath(href)

  if (normalizedHref === '/') {
    return normalizedPathname === '/'
  }

  return normalizedPathname === normalizedHref || normalizedPathname.startsWith(`${normalizedHref}/`)
}

export const getActiveSidebarItem = (pathname: string): SidebarItemId | undefined => {
  return SIDEBAR_NAV_ITEMS.find(item => matchesPath(pathname, item.href))?.id
}
