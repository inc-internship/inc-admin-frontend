'use client'

import { usePathname } from 'next/navigation'
import { useI18n } from '@/shared/i18n'
import { SIDEBAR_NAV_ITEMS } from '../model/config'
import { getActiveSidebarItem } from '../model/getActiveSidebarItem'
import { SidebarNavItem } from './SidebarNavItem'
import s from './Sidebar.module.scss'

export const Sidebar = () => {
  const { t } = useI18n()
  const pathname = usePathname()
  const activeItemId = getActiveSidebarItem(pathname ?? '/')

  return (
    <aside className={s.sidebar} aria-label={t('sidebar.sidebarLabel')}>
      <nav className={s.navigation} aria-label={t('sidebar.navigation')}>
        <ul className={s.list}>
          {SIDEBAR_NAV_ITEMS.map(item => (
            <li key={item.id} data-sidebar-item-id={item.id}>
              <SidebarNavItem item={item} isActive={item.id === activeItemId} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
