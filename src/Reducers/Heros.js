import Heros from '../Actions/Heros';

const initialState = {
    heros: [],
    loading: false,
    selectedId: '',
    selectedHero: {
        loading: false,
    },
    
};

const herosReducer =(state = initialState, action) => {
    const { type } = action;
    const { types } = Heros;
    
    switch(type) {
        case types.GET_HEROS_REQUESTED: 
            console.log(action);
            return {...state, loading: true};
        case type.GET_HEROS_COMPLETED:
            console.log(action.payload);
            return { ...state, heros: action.payload }

        default: 
            return state;
    }
};

export default herosReducer;