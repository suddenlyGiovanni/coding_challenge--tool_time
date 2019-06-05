/**
 * @description Index
 * This file, from a module perspective, behaves as the duck file from the original proposal.
 *  * It exports, as default, the reducer function of the duck.
 *  * It exports, as named export, the selectors and the operations.
 *  * Optionally, it exports the types if they are needed in other ducks.
 */

import * as pollsActions from './actions'
import { pollsReducer } from './reducer'
import * as pollsSelectors from './selectors'
import pollsTypes from './types'
import { pollsMiddleware } from './middleware'

export {
  pollsTypes,
  pollsActions,
  pollsSelectors,
  pollsReducer,
  pollsMiddleware,
}
