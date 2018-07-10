import { all, fork } from 'redux-saga/effects';
import {herosSaga} from './Heros';

export default function* rootSaga() {
    yield all([
        fork(herosSaga)
    ]);
  };