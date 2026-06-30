import { ReactNode } from 'react'
import { Sidebar } from '@/widgets/sidebar'
import s from './AppShell.module.scss'

type Props = {
  children: ReactNode
  /** Sidebar slot. Defaults to the regular Sidebar; pass a skeleton/custom one if needed. */
  sidebar?: ReactNode
}

/** Authenticated app layout: sidebar on the left, padded content area on the right. */
export const AppShell = ({ children, sidebar = <Sidebar /> }: Props) => (
  <div className={s.page}>
    {sidebar}
    <main className={s.content}>{children}</main>
  </div>
)
