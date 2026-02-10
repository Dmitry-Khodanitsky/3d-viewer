import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@app/model/store'
import type { PayloadAction } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

interface viewportState {
  isOrthographic: boolean
}

const initialState: viewportState = {
  isOrthographic: false,
}

const viewportSlice = createSlice({
  name: 'viewport',
  initialState,
  reducers: {
    toggleCameraView: (state) => {
      state.isOrthographic = !state.isOrthographic
      console.log(current(state))
    },
  },
})

export default viewportSlice.reducer
export const { toggleCameraView } = viewportSlice.actions
export const selectCameraView = (state: RootState) =>
  state.viewport.isOrthographic
