import { Toolbar, Viewport } from '@/widgets'
import { Container, Flex } from '@mantine/core'
import { selectModelUrl } from '@/entities/Mesh/model/meshSlice'
import { useSelector } from 'react-redux'
import { UploadZone } from '@/widgets/UploadZone'
import { ModelUploader } from '@/features'

export const Workspace = () => {
  const modelUrl = useSelector(selectModelUrl)
  return (
    <Flex justify="center" align="center" w="100%" h="100%">
      {modelUrl ? <Viewport /> : <ModelUploader />}
    </Flex>
  )
}
