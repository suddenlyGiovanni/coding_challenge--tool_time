import * as React from 'react'

import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'


const useStyles = makeStyles(
  createStyles({
    listItem: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // backgroundColor: 'lightgrey',
      marginTop: 5,
      marginBottom: 5,
    },
    copyElem: {
      minWidth: 100,
    },
  })
)

interface Props {
  choice: string
  votes: number
  percentage: number
  url: string
  onClick: (url: string) => void
  selected?: boolean
}

export const Choice: React.FC<Props> = ({
  choice = '',
  votes = 0,
  percentage = 0,
  url = '',
  selected = false,
  onClick,
}) => {
  const classes = useStyles()

  return (
    <ListItem
      className={classes.listItem}
      button
      selected={selected}
      onClick={() => onClick(url)}
    >
      <Typography className={classes.copyElem}>{choice}</Typography>
      <Typography className={classes.copyElem}>Votes: {votes}</Typography>
      <Typography className={classes.copyElem}>{percentage}%</Typography>
    </ListItem>
  )
}
