import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@app/model/store'
import type { PayloadAction } from '@reduxjs/toolkit'

interface MeshState {
  modelUrl: string | null
}

const initialState: MeshState = {
  modelUrl: null,
}

const meshSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    setModalUrl: (state, { payload }: PayloadAction<string>) => {
      state.modelUrl = payload
    },
    removeModalUrl: (state) => {
      state.modelUrl = null
    },
  },
})

export default meshSlice.reducer
export const { setModalUrl, removeModalUrl } = meshSlice.actions
export const selectModelUrl = (state: RootState) => state.model.modelUrl
