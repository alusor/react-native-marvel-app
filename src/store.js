import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [
    sagaMiddleware,
  ];
const enhancers = [];
const initialState = {
    loading: false,
    error: null,
};
const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
  );

const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;
    }
}
const store  = createStore(reducer, initialState,composedEnhancers);
sagaMiddleware.run(rootSaga);
export default store;