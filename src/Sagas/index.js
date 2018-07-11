import { all, fork } from 'redux-saga/effects';
import { comicsSaga } from './Comics';

export default function* rootSaga() {
    yield all([
        fork(comicsSaga),
    ]);
  };