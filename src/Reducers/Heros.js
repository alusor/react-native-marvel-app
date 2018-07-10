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
        
        break;
        default: 
            return state;
    }
};

export default herosReducer;