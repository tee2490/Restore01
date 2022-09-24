import { createSlice } from "@reduxjs/toolkit"

export const homeSlice = createSlice({
    name: 'screen',
    initialState: {
      fullscreen : false
    },
    reducers: {
      setscreen: (state) => { state.fullscreen =  !state.fullscreen  },
    }
  })
  
  export const { setscreen } = homeSlice.actions