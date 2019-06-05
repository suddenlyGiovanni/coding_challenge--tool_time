/**
 * @description Selectors
 * In case your state shape is more complex you need selectors in order to map parts of the`state`
 * to your`props` or in order to derive some data for your components from the current state.
 *
 * These are the functions like: `getVisibleTodos`, `isUserAuthenticated`, etc.that take the
 * current app state and return some derived data.
 *
 * NOTE: Selector functions will be used outside the duck folder, so they are part of the
 * ** interface ** of the duck.
 */
import { RootState } from 'typesafe-actions'

export const getQuestions = (state: RootState) => state.polls.questions

export const getQuestion = ({
  state,
  questionId,
}: {
  state: RootState
  questionId: string
}) => {
  const { questions } = state.polls
  const _question = questions.find(question => question.url === questionId)

  if (!_question) return

  const totalVotes: number = _question.choices
    .map(c => c.votes)
    .reduce((prev, curr) => prev + curr, 0)

  const _choices = _question.choices.map(choice => {
    return {
      ...choice,
      percentage: Math.floor((choice.votes / totalVotes) * 100),
    }
  })

  return { ..._question, choices: _choices }
}
