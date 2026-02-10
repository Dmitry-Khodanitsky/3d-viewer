import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { PayloadAction } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    currentTheme: 'light',
    modal: {
      isOpened: false,
      type: null, // addChannel, removeChannel, renameChannel
      extra: null, // принимает id канала при удалении и переименовывании {id: String(number)}
    },
  },
  reducers: {
    setCurrentTheme: (state, { payload }: PayloadAction<string>) => {
      state.currentTheme = payload
    },
  },
})

export default uiSlice.reducer
export const { setCurrentTheme } = uiSlice.actions
export const modalState = (state: RootState) => state.ui.modal
