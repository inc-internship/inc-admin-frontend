import type { Metadata } from 'next'
import '@/app/styles/index.scss'

export const metadata: Metadata = {
  title: 'INC Admin',
  description: 'Administrative dashboard starter for the INC platform.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
