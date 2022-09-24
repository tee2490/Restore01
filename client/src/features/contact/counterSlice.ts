import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      num: 0
    },
    reducers: {
      incremented: (state,action) => { state.num += action.payload },
      decremented: (state,action) => { state.num -= action.payload }
    }
  })
  
  export const { incremented, decremented } = counterSlice.actions