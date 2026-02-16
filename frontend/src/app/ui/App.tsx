import '@mantine/core/styles.css'
import { MantineProvider, ColorSchemeScript, Flex } from '@mantine/core'
import { Workspace } from '@/pages'
import { Header } from '@/widgets'

export default function App() {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="dark" />
      <MantineProvider defaultColorScheme="dark">
        <Flex direction="column" h="100vh">
          <Header></Header>
          <Workspace />
        </Flex>
      </MantineProvider>
    </>
  )
}
