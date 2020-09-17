// file made to make the orignal index file less bulky 

import counterReducer from './counter';
import loggedReducer from './isLogged';

import {combineReducers} from 'redux';


const alReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})