import type { Metadata } from 'next'
import { LoginPage } from '@/views/login'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function Login() {
  return <LoginPage />
}
