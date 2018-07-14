import { call, put, takeEvery, select } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import comics from '../Actions/Comics';
import { setFavorites, getComics, getFavorites} from '../Services';

const favorites = state => state.Comics.favorites;

function* getComicsData() {
    try {
        const data = yield call(getComics);
        const fav = yield call(getFavorites);
        yield put(comics.creators.getComicsCompleted({ comics: data.data.data.results, favorites: fav }));
    } catch(e) {
        yield put(comics.creators.getComicsFailed(e));
        console.log(e);
    }
}

function * navigateToComic() {
    yield put(NavigationActions.navigate({ routeName: 'ComicDetail' }));
} 
function * storeFavorites() {
    const fav = yield select(favorites);
    console.log(fav);
    yield call(setFavorites, fav);
}
export function* comicsSaga() {
    yield takeEvery(comics.types.GET_COMICS_REQUESTED, getComicsData);
    yield takeEvery(comics.types.SELECT_COMIC, navigateToComic);
    yield takeEvery(comics.types.ADD_TO_FAVORITES_COMIC, storeFavorites);
}
