import { ActionIcon } from '@mantine/core'

type TProps = {
  handleClick: () => void
  children: React.ReactNode
}

export const ActionButton = ({ handleClick, children }: TProps) => {
  return (
    <ActionIcon variant="filled" aria-label="cube" onClick={handleClick}>
      {children}
    </ActionIcon>
  )
}
