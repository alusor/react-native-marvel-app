const USER_LOGIN = 'USER_LOGIN';
const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';
const USER_LOGIN_COMPLETE = 'USER_LOGIN_COMPLETE';
const USER_LOGOUT = 'USER_LOGOUT';

const userLogin = () => {
    console.log('LOGIN REDUCER')
    return {
    type: USER_LOGIN
}};

const userLoginFailed = () => ({
    type: USER_LOGIN_FAILED
});

const userLoginComplete = user => ({
    type: USER_LOGIN_COMPLETE,
    payload: user
});

const userLogout = () => ({
    type: USER_LOGOUT
});

export default {
    types: {
        USER_LOGIN,
        USER_LOGIN_COMPLETE,
        USER_LOGIN_FAILED,
        USER_LOGOUT
    },
    creators: {
        userLogin,
        userLoginComplete,
        userLoginFailed,
        userLogout
    } 
};