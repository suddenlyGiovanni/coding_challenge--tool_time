import { duckActions } from 'features/duck'
import { apiActions } from 'features/api'
import { pollsActions } from 'features/polls'

export const rootAction = {
  duck: duckActions,
  api: apiActions,
  polls: pollsActions,
}
