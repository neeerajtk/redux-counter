import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';



// **************************************

// STORE - GLOBALIZED STATE 


// **************************************
// ACTION - DESCRIBES WHAT YOU WANT TO DO --> IN THIS case INCREMENT 

const increment = () => {
  return {
    type: 'INCREMENT'
    //or name: 'INCREMENT', type is the name given    
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
    //or name: 'DECREMENT', type is the name given    
  };
};

// **************************************
// REDUCER - DESCRIBES HOW THE ACTIONS TRANSFORM THE STATE INTO THE NEXT STATE, 
// THAT IS IT MODIFIES THE STORE DEPENDING ON THE ACTION

const counter = (state = 0, action) => {
  // state=0 describes the intial state 
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    
    case 'DECREMENT':
      return state-1;

    default:
      return state;
  }
}

let store = createStore(counter);

// Displaying it in the console

store.subscribe(() => console.log(store.getState()));

// **************************************
// DISPATCH - THIS IS WHERE WE CAN EXECURE THE ACTION, ie,  DISPATCH THE ACTION TO THE REDUCER

store.dispatch(increment());

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
