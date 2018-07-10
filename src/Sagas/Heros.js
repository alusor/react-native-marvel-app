import { call, takeEvery, put, select } from 'redux-saga/effects';
import heros from '../Actions/Heros';
import {getComics} from '../Services';

function* getHerosData() {
    console.log("Holaaa");
    try {
        const data = yield call(getComics);
        console.log(data.data.data.results);
        yield put(heros.creators.getHerosCompleted(data.data.data.results));
    } catch(e){
        yield put(heros.creators.getHerosFailed(e));
        console.log(e.response);
    }
}

export function* herosSaga() {
    console.log("Llamado a saga")
    yield takeEvery(heros.types.GET_HEROS_REQUESTED, getHerosData);
    
}