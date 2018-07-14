import { call, put, takeEvery } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import comics from '../Actions/Comics';
import {getComics} from '../Services';


function* getComicsData() {
    try {
        const data = yield call(getComics);
        yield put(comics.creators.getComicsCompleted(data.data.data.results));
    } catch(e) {
        yield put(comics.creators.getComicsFailed(e));
        console.log(e);
    }
}

function * navigateToComic() {
    yield put(NavigationActions.navigate({ routeName: 'ComicDetail' }));
} 
function * storeFavorites() {

}
export function* comicsSaga() {
    yield takeEvery(comics.types.GET_COMICS_REQUESTED, getComicsData);
    yield takeEvery(comics.types.SELECT_COMIC, navigateToComic);
    yield takeEvery(comics.types.ADD_TO_FAVORITES_COMIC, storeFavorites);
}
