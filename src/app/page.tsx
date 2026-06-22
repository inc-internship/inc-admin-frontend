import { redirect } from 'next/navigation'
import { DEFAULT_LOCALE } from '@/shared/i18n'

export default function Page() {
  redirect(`/${DEFAULT_LOCALE}`)
}
