export const API_ENDPOINT_NAMES = {} as const

export const ENDPOINTS_WITH_REFRESH = new Set<string>([])

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const API_V1_URL = process.env.NODE_ENV === 'development' ? '/api/v1' : `${BASE_URL}/api/v1`

export const SERVER_API_V1_URL = `${process.env.INTERNAL_API_URL ?? BASE_URL}/api/v1`

export {ROUTES, getLocalizedRoute, type RoutePath} from './routes'
