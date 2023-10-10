/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { login, register } from './thunks'

import { User } from '@/lib/type'

const user = null;

const initialState: Iuser = user? 
    {
        user,
        isLoggedIn: true,
        status: 'idle',
    } : {
        user: null,
        isLoggedIn: false,
        status: 'idle',
    }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading'
        state.isLoggedIn = false
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'idle'
        state.isLoggedIn = false
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'idle'
        state.isLoggedIn = false
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle'
        state.user = action.payload.user.user;
        console.log(action.payload.user.user)
        state.isLoggedIn = true
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'idle'
        state.isLoggedIn = false
        state.user = null;
      })
      
  },
})

export interface Iuser {
  user: User | null ;
  status: 'idle' | 'loading' | 'failed';
  isLoggedIn: boolean;
}
