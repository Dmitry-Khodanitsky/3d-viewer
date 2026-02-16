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

const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  reducers: {
    toggleCameraView: (state) => {
      state.isOrthographic = !state.isOrthographic
      console.log(current(state))
    },
  },
})

export default cameraSlice.reducer
export const { toggleCameraView } = cameraSlice.actions
export const selectCameraView = (state: RootState) =>
  state.camera.isOrthographic
