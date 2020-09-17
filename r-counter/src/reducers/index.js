// file made to make the orignal index file less bulky 

import counterReducer from './counter';
import loggedReducer from './isLogged';

import {combineReducers} from 'redux';


const allReducers = combineReducers({
    counter: counterReducer,
    // counter is the name of state we have given now
    isLogged: loggedReducer
})

export default allReducers;