export type SidebarItemId = 'users' | 'statistics' | 'payments' | 'posts'

export type SidebarIconName =
  | 'personOutline'
  | 'person'
  | 'trendingUpOutline'
  | 'trendingUp'
  | 'creditCardOutline'
  | 'creditCard'
  | 'imageOutline'
  | 'image'

export type SidebarNavItem = {
  id: SidebarItemId
  labelKey: string
  href: string
  icon: SidebarIconName
  activeIcon?: SidebarIconName
  disabled?: boolean
}
