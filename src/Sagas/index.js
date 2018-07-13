import { all, fork } from 'redux-saga/effects';
import { comicsSaga } from './Comics';
import { loginSaga } from './Session';

export default function* rootSaga() {
    yield all([
        fork(comicsSaga),
        fork(loginSaga)
    ]);
  };