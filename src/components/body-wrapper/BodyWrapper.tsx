import * as React from 'react'

// Material UI
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles = makeStyles(
  createStyles({
    title: {
      marginBottom: 20,
      fontSize: '5rem',
    },
  })
)

interface Props {
  title: string
}
export const BodyWrapper: React.FC<Props> = ({ title, children }) => {
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="md">
      <Typography className={classes.title} variant="h1">
        {title}
      </Typography>
      {children}
    </Container>
  )
}
