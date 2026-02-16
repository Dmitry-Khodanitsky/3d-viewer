import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@app/model/store'
import type { PayloadAction } from '@reduxjs/toolkit'

interface MeshState {
  modelUrl: string | null
  isWireframe: boolean
}

const initialState: MeshState = {
  modelUrl: null,
  isWireframe: false, // Флаг для сетки
}

const meshSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    toggleWireframe: (state) => {
      state.isWireframe = !state.isWireframe
    },
    setModalUrl: (state, { payload }: PayloadAction<string>) => {
      state.modelUrl = payload
    },
    removeModalUrl: (state) => {
      state.modelUrl = null
    },
  },
})

export default meshSlice.reducer
export const { setModalUrl, toggleWireframe } = meshSlice.actions
export const selectModelUrl = (state: RootState) => state.model.modelUrl
export const selectIsWireframe = (state: RootState) => state.model.isWireframe
