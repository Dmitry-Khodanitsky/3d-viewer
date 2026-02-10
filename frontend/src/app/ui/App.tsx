import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { Workspace } from '@/pages'
import { Header } from '@/widgets'

const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
})

export default function App() {
  return (
    <MantineProvider theme={theme}>
      {
        <>
          <Header></Header>
          <Workspace />
        </>
      }
    </MantineProvider>
  )
}
