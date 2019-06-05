import { combineReducers } from 'redux-starter-kit'

import { duckReducer } from 'features/duck'
import { apiReducer } from 'features/api'
import { pollsReducer } from 'features/polls'

export const rootReducer = combineReducers({
  duck: duckReducer,
  api: apiReducer,
  polls: pollsReducer,
  // ...
})
