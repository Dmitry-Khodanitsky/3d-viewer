import { useState } from 'react'
import { Burger, Container, Group, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Logo } from '@/shared/'

const links = [
  { link: '/about', label: 'Заглушка 1' },
  { link: '/pricing', label: 'Заглушка 2' },
  { link: '/learn', label: 'Заглушка 3' },
  { link: '/community', label: 'Заглушка 4' },
]

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)

  const items = links.map((link) => (
    <Button size='xs' key={link.label}>{link.label}</Button>
  ))

  return (
    <Container fluid>
      <Group justify="space-between">
        <Logo />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Group>

      <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
    </Container>
  )
}
