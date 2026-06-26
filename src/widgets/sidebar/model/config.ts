import { ROUTES } from '@/shared/constants'
import { SidebarNavItem } from './types'

export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  {
    id: 'users',
    labelKey: 'sidebar.usersList',
    href: ROUTES.main,
    icon: 'personOutline',
    activeIcon: 'person',
  },
  // Pages below are not built yet — shown but disabled so they don't 404.
  // Drop `disabled` (and add the matching page) once each screen exists.
  {
    id: 'statistics',
    labelKey: 'sidebar.statistics',
    href: ROUTES.statistics,
    icon: 'trendingUpOutline',
    activeIcon: 'trendingUp',
    disabled: true,
  },
  {
    id: 'payments',
    labelKey: 'sidebar.paymentsList',
    href: ROUTES.payments,
    icon: 'creditCardOutline',
    activeIcon: 'creditCard',
    disabled: true,
  },
  {
    id: 'posts',
    labelKey: 'sidebar.postsList',
    href: ROUTES.posts,
    icon: 'imageOutline',
    activeIcon: 'image',
    disabled: true,
  },
]
