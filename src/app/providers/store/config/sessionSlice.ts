import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

type SessionState = {
  isAuthenticated: boolean
  isInitialized: boolean
  userEmail: string | null
}

const initialState: SessionState = {
  isAuthenticated: false,
  isInitialized: false,
  userEmail: null,
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    initializeSession: (
      state,
      action: PayloadAction<{ isAuthenticated: boolean; userEmail?: string | null }>,
    ) => {
      state.isInitialized = true
      state.isAuthenticated = action.payload.isAuthenticated
      state.userEmail = action.payload.userEmail ?? null
    },
    setAuthenticated: (state, action: PayloadAction<{ userEmail?: string | null }>) => {
      state.isAuthenticated = true
      state.userEmail = action.payload.userEmail ?? null
    },
    clearSession: state => {
      state.isAuthenticated = false
      state.userEmail = null
    },
  },
})

export const { clearSession, initializeSession, setAuthenticated } = sessionSlice.actions
export const sessionReducer = sessionSlice.reducer

export const selectIsAuthenticated = (state: RootState) => state.session.isAuthenticated
export const selectIsSessionInitialized = (state: RootState) => state.session.isInitialized
export const selectUserEmail = (state: RootState) => state.session.userEmail
