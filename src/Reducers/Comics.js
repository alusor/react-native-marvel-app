import Comics from '../Actions/Comics';

const initialState = {
    comics: [],
    loading: false,
    selectedId: '',
    selectedComic: {},
    error: null,
    favorites: [],
    selectedComicFavorite: false
};

const comicsReducer = (state = initialState, action) => {
    const { type } = action;
    const { types } = Comics;
    switch(type) {
        case types.GET_COMICS_REQUESTED: 
            return {...state, loading: true };
        case types.GET_COMICS_COMPLETED:
            return { ...state, comics: action.payload.comics, favorites: action.payload.favorites, loading: false };
        case types.GET_COMICS_FAILED:
            return { ...state, loading: false, error: true };
        case types.SELECT_COMIC: 
            let favorite = false;
            state.favorites.filter(comic => comic.id === action.payload.id? favorite=true:null );
            /*if(state.favorites.indexOf(action.payload) !== -1){
                favorite = true;
            }*/
            return { ...state, selectedComic: action.payload, selectedComicFavorite: favorite };
        case types.ADD_TO_FAVORITES_COMIC:
            if(state.favorites.indexOf(action.payload)=== -1) {
                return { ...state, favorites: [...state.favorites, action.payload,], selectedComicFavorite: true };
            } else {
                const newFavorites = state.favorites.filter(id => id !== action.payload);
                return {...state, favorites: newFavorites, selectedComicFavorite: false}
            }
        
        default: 
            return state;
    }
};

export default comicsReducer;