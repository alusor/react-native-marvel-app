const GET_COMICS_REQUESTED = 'GET_COMICS_REQUESTED';
const GET_COMICS_COMPLETED = 'GET_COMICS_COMPLETED';
const GET_COMICS_FAILED = 'GET_COMICS_FAILED';
const SELECT_COMIC = 'SELECT_COMIC';
const ADD_TO_FAVORITES_COMIC = 'ADD_TO_FAVORITES_COMIC';
const REMOVE_FROM_FAVORITES_COMIC = 'REMOVE_FROM_FAVORITES_COMIC';

const getComicsRequested = () => ({
    type: GET_COMICS_REQUESTED,
});

const getComicsCompleted = comics => ({
        type: GET_COMICS_COMPLETED,
        payload: comics,
});

const getComicsFailed = error => ({
    type: GET_COMICS_FAILED,
    payload: error
});

const selectComic = comic => ({
    type: SELECT_COMIC,
    payload: comic
});

const addToFavorites = comicID => ({
    type: ADD_TO_FAVORITES_COMIC,
    payload: comicID
});
const removeFromFavorites = comicID => ({
    type: REMOVE_FROM_FAVORITES_COMIC,
    payload: comicID
});

export default {
    types: {
        GET_COMICS_COMPLETED,
        GET_COMICS_FAILED,
        GET_COMICS_REQUESTED,
        ADD_TO_FAVORITES_COMIC,
        REMOVE_FROM_FAVORITES_COMIC,
        SELECT_COMIC
    },
    creators: {
        getComicsCompleted,
        getComicsFailed,
        getComicsRequested,
        addToFavorites,
        removeFromFavorites,
        selectComic
    }
};