import { Stack, Text } from '@mantine/core'
import { ModelUploader } from '@/features'

export const UploadZone = () => {
  return (
    <Stack align="center" justify="center" gap="md" h="100%" w="100%">
      <ModelUploader />
    </Stack>
  )
}
