import { Toolbar, Viewport } from '@/widgets'
import { Container } from '@mantine/core'
import { ModelUploader } from '@/features'
import { selectModelUrl } from '@/entities/Mesh/model/meshSlice'
import { useSelector } from 'react-redux'

export const Workspace = () => {
  const modelUrl = useSelector(selectModelUrl)
  return (
    <Container>
      <Toolbar />
      {modelUrl ? <Viewport /> : <ModelUploader />}
    </Container>
  )
}
