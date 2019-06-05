import { createAction } from 'typesafe-actions'

import pollsTypes from './types'
import * as PollsTypes from './typings'

/*
 * ### Actions
 * It's important to be consistent when defining actions, so let's always export functions from
 * this file, we don't care if the action needs any input from the outside to build the payload
 * or not.
 * NOTE: Trying to impose a bit of structure to the actions object, the`type/payload` approach is
 * pretty popular.
 */

export const fetchQuestions = createAction(pollsTypes.FETCH_QUESTIONS)

export const setQuestions = createAction(pollsTypes.SET_QUESTIONS, action => {
  return ({ data }: { data: PollsTypes.Questions }) => {
    return action({ questions: data })
  }
})
