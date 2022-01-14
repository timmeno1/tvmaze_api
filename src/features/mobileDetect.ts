import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
interface mobileDetect {
  isMobile: boolean
}

// Define the initial state using that type
const initialState: mobileDetect = {
    isMobile: false,
}

export const mobileDetectSlice = createSlice({
  name: 'mobileDetectReducer',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    }
  },
})

export const { setIsMobile } = mobileDetectSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.mobileDetect.isMobile

export default mobileDetectSlice.reducer