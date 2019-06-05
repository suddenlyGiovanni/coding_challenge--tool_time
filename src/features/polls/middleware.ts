import { Middleware, Dispatch } from 'redux'
import { RootState, RootAction, getType } from 'typesafe-actions'

import * as pollsActions from './actions'
import { apiActions } from 'features/api'

const BASE_URL = 'https://private-anon-2ecb3eac74-pollsapi.apiary-mock.com'

export const pollsMiddleware: Middleware<
  {},
  RootState,
  Dispatch<RootAction>
> = () => next => action => {
  next(action)

  if (action.type === getType(pollsActions.fetchQuestions)) {
    // listen for the fetch question action
    // dispatch a api fetch request with the correct data
    next(
      apiActions.apiRequest({
        feature: getType(pollsActions.fetchQuestions),
        method: 'GET',
        baseURL: BASE_URL,
        url: '/questions',
      })
    )
  }

  if (
    action.meta &&
    action.meta.feature === getType(pollsActions.fetchQuestions)
  ) {
    // listen for the api actions [API_START, API_SUCCESS, API_END, API_ERROR, ACCESS_DENIED]
    if (action.type === getType(apiActions.apiSuccess)) {
      // in case of success...
      next(pollsActions.setQuestions(action.payload))
    }
  }
}
