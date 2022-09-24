import { createSlice } from "@reduxjs/toolkit"

export const testSlice = createSlice({
    name: 'testRTK',
    initialState: {
      myname : "555555555555"
    },
    reducers: {
      incre6: state => { state.myname += "66666666" },
      decre7: state => { state.myname += "77777777" }
    }
  })
  
  export const { incre6, decre7 } = testSlice.actions