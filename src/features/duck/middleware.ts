import { Middleware, Dispatch } from 'redux'
import { RootState, RootAction, getType } from 'typesafe-actions'

import * as duckActions from './actions'
import { apiActions } from 'features/api'

export const duckMiddleware: Middleware<
  {},
  RootState,
  Dispatch<RootAction>
> = () => next => action => {
  next(action)

  if (action.type === getType(duckActions.fetchDucks)) {
    next(
      apiActions.apiRequest({
        feature: getType(duckActions.fetchDucks),
        method: 'GET',
        baseURL: 'https://4cacf9e9-faef-4017-a283-0fe1fb2974c4.mock.pstmn.io',
        url: '/get',
      })
    )
  }

  if (action.meta && action.meta.feature === getType(duckActions.fetchDucks)) {
    if (action.type === getType(apiActions.apiSuccess)) {
      next(duckActions.setDucks(action.payload))
    }
  }
}
