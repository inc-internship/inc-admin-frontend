'use client'

import {useI18n} from '@/shared/i18n'
import type {MainPageData} from '../model/types'
import s from './MainPage.module.scss'

export const MainPage = ({}: MainPageData) => {
    const {t} = useI18n()

    return (
        <main className={s.main}>
            <h1>{t('main.title')}</h1>
            Main page
        </main>
    )
}