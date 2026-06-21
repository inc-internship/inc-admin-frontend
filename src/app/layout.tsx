import type {Metadata} from 'next'
import '@/app/styles/index.scss'
import {AppProviders} from './providers'
import {DEFAULT_LOCALE} from '@/shared/i18n'

export const metadata: Metadata = {
    title: 'Main page',
    description: 'Main page',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang={DEFAULT_LOCALE}>
        <body>
        <AppProviders initialLocale={DEFAULT_LOCALE}>{children}</AppProviders>
        </body>
        </html>
    )
}