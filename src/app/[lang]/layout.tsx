import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { AppProviders } from '@/app/providers'
import { SUPPORTED_LOCALES, isLocale } from '@/shared/i18n'

type LangLayoutProps = Readonly<{
  children: ReactNode
  params: Promise<{
    lang: string
  }>
}>

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map(lang => ({ lang }))
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  return <AppProviders initialLocale={lang}>{children}</AppProviders>
}
