const GET_HEROS_REQUESTED = 'GET_HEROS_REQUESTED';
const GET_HEROS_COMPLETED = 'GET_HEROS_COMPLETED';
const GET_HEROS_FAILED = 'GET_HEROS_FAILED';

const ADD_TO_FAVORITES_HERO = 'ADD_TO_FAVORITES_HERO';
const REMOVE_FROM_FAVORITES_HERO = 'REMOVE_FROM_FAVORITES_HERO';

const getHerosRequested = pagination => ({
    type: GET_HEROS_REQUESTED,
    payload: pagination
});

const getHerosCompleted = heros => ({
    type: GET_HEROS_COMPLETED,
    payload: heros,
});

const getHerosFailed = error => ({
    type: GET_HEROS_FAILED,
    payload: error
});

const addToFavorites = heroID => ({
    type: ADD_TO_FAVORITES_HERO,
    payload: heroID
});
const removeFromFavorites = heroID => ({
    type: REMOVE_FROM_FAVORITES_HERO,
    payload: heroID
});

export default {
    types: {
        GET_HEROS_COMPLETED,
        GET_HEROS_FAILED,
        GET_HEROS_REQUESTED,
        ADD_TO_FAVORITES_HERO,
        REMOVE_FROM_FAVORITES_HERO,
    },
    creators: {
        getHerosCompleted,
        getHerosFailed,
        getHerosRequested,
        addToFavorites,
        removeFromFavorites,
    }
};