import { Reducer } from 'redux'
import { getType, ActionType } from 'typesafe-actions'
import * as pollsActions from './actions'
import * as PollsTypes from './typings'

/**
 * @description Reducers
 * It's a good practice to keep your **state shape** in a comment above the reducers, just to have
 * an overview.
 *
 * In case the state shape is more complex, you should break the reducers into multiple smaller
 * functions that deal with a slice of the state, then combine them at the end.
 *
 * NOTE: Let's keep it simple for now with `switch` statements and abstract later.
 */

export type PollsAction = ActionType<typeof pollsActions>

export type PollsState = Readonly<{
  questions: PollsTypes.Questions
  votes: PollsTypes.Choice[]
}>

const initialState: PollsState = {
  questions: [],
  votes: [],
}

export const pollsReducer: Reducer<PollsState, PollsAction> = (
  state = initialState,
  action
) => {
  if (action.type === getType(pollsActions.setQuestions)) {
    return {
      ...state,
      questions: [...action.payload.questions],
    }
  }

  if (action.type === getType(pollsActions.setVoteResult)) {
    const { choice } = action.payload
    return {
      ...state,
      votes: [...state.votes, choice],
    }
  }
  return state
}
