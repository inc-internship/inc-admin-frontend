'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { Typography } from '@/shared/ui/Typography'
import { useI18n } from '@/shared/i18n'
import s from './LoginPage.module.scss'

/**
 * Sign In screen — markup only for now.
 *
 * There is no auth backend yet, so `handleSubmit` does not authenticate.
 * Wire it to the login API + session later (see plan). To preview the
 * private area meanwhile, set `localStorage.adminAccessToken` and reload.
 */
export const LoginPage = () => {
  const { t } = useI18n()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <Card className={s.card}>
      <Typography variant="h1" align="center" className={s.title}>
        {t('login.title')}
      </Typography>

      <form className={s.form} onSubmit={handleSubmit} noValidate>
        <Input
          type="email"
          label={t('login.email')}
          placeholder={t('login.emailPlaceholder')}
          value={email}
          onChange={event => setEmail(event.target.value)}
          autoComplete="email"
        />
        <Input
          type="password"
          label={t('login.password')}
          value={password}
          onChange={event => setPassword(event.target.value)}
          autoComplete="current-password"
        />
        <Button type="submit" variant="primary" fullWidth className={s.submit}>
          {t('login.submit')}
        </Button>
      </form>
    </Card>
  )
}
