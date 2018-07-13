import Session from '../Actions/Session';

const initialState = {
    user: {},
    loading: false,
    error: null
};

const sessionReducer = (state = initialState, action) => {
    const { type } = action;
    const { types } = Session;
    switch(type) {
        case types.USER_LOGIN:
            return { ...state, loading: true };
        case types.USER_LOGIN_COMPLETE: 
            return { ...state, loading: false, user: action.payload } 
        case types.USER_LOGIN_FAILED:
            return { ...state, loading: false, error: true };
        case types.USER_LOGOUT: 
            return { ...state };
        default:
            return state;
    }

};

export default sessionReducer;