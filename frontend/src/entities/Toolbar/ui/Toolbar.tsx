import { Flex, Group, Paper } from '@mantine/core'
import { CameraControl, WireframeControl } from '@/features/'

export const Toolbar = () => {
  return (
    <Flex align="center" justify="center">
      <Paper radius="xl" withBorder>
        <Group align="center" p={5}>
          <CameraControl />
          <WireframeControl />
          <CameraControl />
          <CameraControl />
        </Group>
      </Paper>
    </Flex>
  )
}
