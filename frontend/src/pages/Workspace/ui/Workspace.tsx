import { Toolbar, Viewport } from '@/widgets'
import { ModelUploader } from '@/features'
import { selectModelUrl } from '@/entities/Mesh/model/meshSlice'
import { useSelector } from 'react-redux'

export const Workspace = () => {
  const modelUrl = useSelector(selectModelUrl)
  return (
    <>
      <Toolbar />
      {modelUrl ? <Viewport /> : <ModelUploader />}
    </>
  )
}
