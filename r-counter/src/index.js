import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer from './reducers/index';

const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  // above line is copied from redux dev tools github documentation 
  );


ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister();


// STORE - GLOBALIZED STATE 
// ACTION - DESCRIBES WHAT YOU WANT TO DO --> IN THIS case INCREMENT 
// REDUCER - DESCRIBES HOW THE ACTIONS TRANSFORM THE STATE INTO THE NEXT STATE, 
// THAT IS IT MODIFIES THE STORE DEPENDING ON THE ACTION
// DISPATCH - THIS IS WHERE WE CAN EXECURE THE ACTION, ie,  DISPATCH THE ACTION TO THE REDUCER