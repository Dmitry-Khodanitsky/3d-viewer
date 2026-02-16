import uiReducer from './uiSlice'
import meshReducer from '@/entities/Mesh/model/meshSlice'
import cameraReducer from '@/entities/Camera/model/cameraSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    model: meshReducer,
    camera: cameraReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Это критично для работы с File/Blob
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
