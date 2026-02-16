import { ActionIcon } from '@mantine/core'

type TProps = {
  handleClick: () => void
  children: React.ReactNode
}

export const ActionButton = ({ handleClick, children }: TProps) => {
  return (
    <ActionIcon variant="outline" aria-label="cube" color='cyan' radius='xl' onClick={handleClick}>
      {children}
    </ActionIcon>
  )
}
