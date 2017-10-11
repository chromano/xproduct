import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import vectorsReducers from './vectors/reducers';

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    vectorsReducers,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
};
