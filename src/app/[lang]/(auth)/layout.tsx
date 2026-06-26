import { GuestOnly } from '@/app/providers/auth'
import { Header } from '@/widgets/header'
import s from './layout.module.scss'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <GuestOnly>
      <Header />
      <div className={s.wrapper}>{children}</div>
    </GuestOnly>
  )
}
