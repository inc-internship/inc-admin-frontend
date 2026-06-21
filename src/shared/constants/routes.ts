import {type Locale} from '@/shared/i18n/config'
import {getLocalizedPath} from '@/shared/i18n/routing'

export const ROUTES = {
    main: '/',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]

export const getLocalizedRoute = (locale: Locale, route: RoutePath) => {
    return getLocalizedPath(locale, route)
}