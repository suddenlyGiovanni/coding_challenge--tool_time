import * as React from 'react'

interface Props {
  question: string
  publishedAt: string
  numberOfChoices: number
  onClick: () => void
}

export const Question: React.FC<Props> = ({
  question = '',
  publishedAt = '',
  numberOfChoices = 0,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <span>{question}</span>
      <span>{publishedAt}</span>
      <span>{numberOfChoices}</span>
    </div>
  )
}
