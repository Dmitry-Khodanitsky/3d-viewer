import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setModalUrl } from '@/entities/Mesh/model/meshSlice'
import { Stack, Text, Container, Center, Paper, Button } from '@mantine/core'
import { useRef } from 'react'
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'

export const ModelUploader = () => {
  const openRef = useRef<() => void>(null)
  const dispatch = useDispatch()
  const updateFiles = (incomingFiles: any) => {
    const url = URL.createObjectURL(incomingFiles[0])
    dispatch(setModalUrl(url))
  }

  return (
    <Dropzone
      w="100%"
      h="100%"
      onDrop={(files) => updateFiles(files)}
      onReject={(files) => console.log('rejected files', files)}
      accept={{
        'model/gltf-binary': ['.glb'],
        'model/gltf+json': ['.gltf'],
        'text/plain': ['.obj'],
      }}
      styles={{
        inner: { height: '100%' },
      }}
    >
      <Stack
        align="center"
        justify="center"
        gap="xs"
        h="100%"
        style={{ pointerEvents: 'none' }}
      
      >
        <Text>Загрузите 3D модель</Text>
        <Button color="cyan" variant="outline" radius="xl">
          Select a file
        </Button>
        <Text size="md">Or</Text>
        <Text size="xl">drag and drop a file here</Text>
      </Stack>
    </Dropzone>
  )
}
