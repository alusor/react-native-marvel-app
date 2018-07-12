import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import reducers from './Reducers';
import sagas from './Sagas';

const sagaMiddleware = createSagaMiddleware();
const navMiddleware = createReactNavigationReduxMiddleware('root', (state) => state.Navigations);
const middleware = [
    sagaMiddleware,
    navMiddleware
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