import { combineReducers } from 'redux';
import Comics from './Comics';
import Session from './Session';
import Navigations from './Navigation';

export default combineReducers({
    Comics,
    Navigations,
    Session
});