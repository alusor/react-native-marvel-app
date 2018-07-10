import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './Reducers';
import sagas from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
  ];
const enhancers = [];
const initialState = {};
const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );

const store  = createStore(reducers, initialState,composedEnhancers);
sagaMiddleware.run(sagas);
export default store;