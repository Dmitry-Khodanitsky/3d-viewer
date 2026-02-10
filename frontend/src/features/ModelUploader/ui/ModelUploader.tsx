import { Dropzone, FileMosaic } from '@files-ui/react'
import type { ExtFile } from '@files-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setModalUrl, removeModalUrl } from '@/entities/Mesh/model/meshSlice'
import { Container } from '@mantine/core'

export const ModelUploader = () => {
  const [files, setFiles] = useState<ExtFile[]>([])
  const dispatch = useDispatch()

  const updateFiles = (incomingFiles: ExtFile[]) => {
    setFiles(incomingFiles)
  }

  const removeFile = (id: string | number | undefined) => {
    setFiles((prev) => prev.filter((x) => x.id !== id))
    // Если удаляем текущую активную модель
    dispatch(removeModalUrl())
  }

  const handleUploadToScene = () => {
    // Берем первый валидный файл из списка
    const fileToUpload = files[0]?.file

    if (fileToUpload) {
      // 1. Создаем ссылку
      const url = URL.createObjectURL(fileToUpload)

      // 2. Отправляем в Redux
      dispatch(setModalUrl(url))

      console.log('Модель загружена в сцену:', url)
    }
  }

  return (
    <Container>
      <Dropzone
        onChange={updateFiles}
        value={files}
        maxFiles={1} // Если нужна только одна модель
        accept=".gltf,.glb,.obj" // Ограничиваем типы файлов
      >
        {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
      </Dropzone>

      <button
        onClick={handleUploadToScene}
        disabled={files.length === 0}
        style={{ marginTop: '10px' }}
      >
        Отобразить модель
      </button>
    </Container>
  )
}
