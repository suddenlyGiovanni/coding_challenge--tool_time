import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { makeStyles } from '@material-ui/styles'
import Container from '@material-ui/core/Container'

import { store } from 'store'
import { Home } from 'screens/home/Home'
import QuestionsView from 'screens/questions-view/QuestionsView'
import QuestionsDetailView from 'screens/questions-detail-view/QuestionsDetailView'

import 'styles/index.css'

import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
  },
})

const Root: React.FC = () => {
  const classes = useStyles()

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container className={classes.root} maxWidth={'lg'}>
          <Switch>
            <Route exact path="/" component={QuestionsView} />
            <Route
              path="/questions/:questionId"
              component={QuestionsDetailView}
            />
            <Route component={Home} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Root />, rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
