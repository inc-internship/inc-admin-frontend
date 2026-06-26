import { AuthGate, PrivateOnly } from '@/app/providers/auth'
import { Header } from '@/widgets/header'
import { AppShell } from '@/widgets/app-shell'

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <AuthGate>
      <PrivateOnly>
        <Header />
        <AppShell>{children}</AppShell>
      </PrivateOnly>
    </AuthGate>
  )
}
