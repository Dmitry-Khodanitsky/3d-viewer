import { ActionButton } from '@/shared'
import { IconGrid4x4 } from '@tabler/icons-react'
import { useDispatch } from 'react-redux'
import { toggleWireframe } from '@/entities/Mesh/model/meshSlice'

export const WireframeControl = () => {
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(toggleWireframe()) // Экшен вызывается как функция ()
  }
  return (
    <ActionButton handleClick={handleToggle}>
      <IconGrid4x4 stroke={1.5} style={{ width: '70%', height: '70%' }} />
    </ActionButton>
  )
}
