/**
 * @description Index
 * This file, from a module perspective, behaves as the duck file from the original proposal.
 *  * It exports, as default, the reducer function of the duck.
 *  * It exports, as named export, the selectors and the operations.
 *  * Optionally, it exports the types if they are needed in other ducks.
 */

import * as duckActions from './actions'
import { duckReducer } from './reducer'
import * as duckSelectors from './selectors'
import duckTypes from './types'
import { duckMiddleware } from './middleware'

export { duckTypes, duckActions, duckSelectors, duckReducer, duckMiddleware }
