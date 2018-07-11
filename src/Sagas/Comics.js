import { call, fork, put, select } from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import comics from '../Actions/Comics';
import {getComics} from '../Services';

function* getComicsData() {
    console.log("Holaaa");
    try {
        const data = yield call(getComics);
        console.log(data.data);
        yield put(comics.creators.getComicsCompleted(data.data.data.results));
    } catch(e){
        yield put(comics.creators.getComicsFailed(e));
        console.log(e);
    }
}
export function* comicsSaga() {
    yield takeEvery(comics.types.GET_COMICS_REQUESTED, getComicsData);
}
