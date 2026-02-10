import { Container, Group } from '@mantine/core'
import { CameraControl } from '@/features/'

export const Toolbar = () => {
  const demoProps = {
    bg: 'var(--mantine-color-blue-light)',
    display: 'flex',
  }
  return (
    <Container fluid {...demoProps}>
      <Group align="center" p={5}>
        <CameraControl />
      </Group>
    </Container>
  )
}
