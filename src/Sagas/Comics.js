import { call, fork, put, select } from 'redux-saga/effects';
import {takeEvery} from 'redux-saga';
import { NavigationActions } from 'react-navigation';
import comics from '../Actions/Comics';
import {getComics} from '../Services';

const state = (state) => state;

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
function * navigateToComic() {
    const temp = yield select(state);
    console.log(temp)    
    yield put(NavigationActions.navigate({ routeName: 'ComicDetail' }));
} 
export function* comicsSaga() {
    yield takeEvery(comics.types.GET_COMICS_REQUESTED, getComicsData);
    yield takeEvery(comics.types.SELECT_COMIC, navigateToComic)
}
