import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi'
import { sessionReducer } from './sessionSlice'

export const rootReducer = combineReducers({
  session: sessionReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
