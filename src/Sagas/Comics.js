import { call, fork, put, select } from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import { NavigationActions } from 'react-navigation';
import comics from '../Actions/Comics';
import {getComics} from '../Services';

function* getComicsData() {
    try {
        const data = yield call(getComics);
        console.table(data.data);
        yield put(comics.creators.getComicsCompleted(data.data.data.results));
    } catch(e) {
        yield put(comics.creators.getComicsFailed(e));
        console.log(e);
    }
}

function * navigateToComic() {
    yield put(NavigationActions.navigate({ routeName: 'ComicDetail' }));
} 
export function* comicsSaga() {
    yield takeEvery(comics.types.GET_COMICS_REQUESTED, getComicsData);
    yield takeEvery(comics.types.SELECT_COMIC, navigateToComic)
}
