import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';

import reducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  {},
  composeEnhancers(
    applyMiddleware(sagaMiddleware, logger),
  )
);

sagaMiddleware.run(rootSaga);
