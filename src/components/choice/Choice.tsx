import * as React from 'react'

interface Props {
  choice: string
  votes: number
  percentage: number
  url: string
  onClick: (url: string) => void
}

export const Choice: React.FC<Props> = ({
  choice = '',
  votes = 0,
  percentage = 0,
  url = '',
  onClick,
}) => {
  return (
    <div onClick={() => onClick(url)}>
      <span>{choice}</span> <span>{votes}</span> <span>{percentage}</span>
    </div>
  )
}
