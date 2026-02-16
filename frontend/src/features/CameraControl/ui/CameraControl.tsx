import { ActionButton } from '@/shared'
import { IconCube } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { toggleCameraView } from '@/entities/Camera/model/cameraSlice'

export const CameraControl = () => {
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(toggleCameraView()) // Экшен вызывается как функция ()
  }
  return (
    <ActionButton handleClick={handleToggle}>
      <IconCube stroke={1.5} style={{ width: '70%', height: '70%' }} />
    </ActionButton>
  )
}
