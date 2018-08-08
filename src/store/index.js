
import {
    compose,
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux'
/*
    DEIXEI ESSES IMPORTS COMENTADOS PARA CASO VCS ACHAREM INTERESSANTE USALOS DEPOIS
*/
// import { offline } from '@redux-offline/redux-offline'
// import offlineConfig from '@redux-offline/redux-offline/lib/defaults'

import logger from 'redux-logger' //eslint-disable-line
import * as reducers from './reducers'

export function createReducer(initialState, actionHandlers) {
    return function reducer(state = initialState, action) {
      if (actionHandlers.hasOwnProperty(action.type)) {
        return actionHandlers[action.type](state, action)
      }
      return state
    }
}

const rootReducer = combineReducers(reducers)
const bucketMiddleware = []
const middleware = __DEV__ ? bucketMiddleware :  [...bucketMiddleware, logger]

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
    //   offline(offlineConfig)
    )
  )
  return store
}