import * as React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(
  createStyles({
    card: {
      minWidth: 275,
      minHeight: 170,
    },
    actionArea: {
      minHeight: '100%',
    },
    title: {
      fontSize: 14,
    },
  })
)
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
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.actionArea} onClick={onClick}>
        <CardContent>
          <Typography variant="h5">{question}</Typography>

          <Typography variant="subtitle2">
            {new Date(publishedAt).toDateString()}
          </Typography>

          <Typography variant={'body1'}>choices {numberOfChoices}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
