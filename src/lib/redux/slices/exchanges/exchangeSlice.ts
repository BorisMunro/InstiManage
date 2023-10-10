/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { createExchange, deleteExchange, getAllExchanges } from './thunks'


const initialState =  
    {
        exchanges: [],
        status: 'idle',
    }

export const exchangeSlice = createSlice({
  name: 'exchage',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    filterExchange: ((state, action) => {
      state.exchanges = state.exchanges.filter(item => item.exchanger == action.payload.exchanger);
    })
  },
  extraReducers: (builder) => {
    builder
      .addCase(createExchange.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createExchange.fulfilled, (state, action) => {
        state.status = 'idle'
        state.exchanges = action.payload.exchanges; 
      })
      .addCase(createExchange.rejected, (state, action) => {
        state.status = 'idle'
      })
      .addCase(getAllExchanges.fulfilled, (state, action) => {
        state.status = 'idle'
        state.exchanges = action.payload.exchanges; 
      })
      .addCase(getAllExchanges.rejected, (state, action) => {
        state.status = 'idle'
      })
      .addCase(deleteExchange.fulfilled, (state, action) => {
        state.status = 'idle'
        state.exchanges = action.payload.exchanges; 
      })

      // .addCase(login.fulfilled, (state, action) => {
      //   state.status = 'idle'
      //   state.user = action.payload.user.user;
      //   console.log(action.payload.user.user)
      //   state.isLoggedIn = true
      // })
      // .addCase(login.rejected, (state, action) => {
      //   state.status = 'idle'
      //   state.isLoggedIn = false
      //   state.user = null;
      // })
  },
})
const { reducer, actions } = exchangeSlice;

export const { filterExchange } = actions

