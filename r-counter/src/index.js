import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// STORE - GLOBALIZED STATE 

// ACTION - DESCRIBES WHAT YOU WANT TO DO --> IN THIS APP INCREMENT 

// REDUCER - DESCRIBES HOW THE ACTIONS TRANSFORM THE STATE INTO THE NEXT STATE, THAT IS IT MODIFIES THE STORE DEPENDING ON THE ACTION

// DISPATCH - THIS IS WHERE WE CAN EXECURE THE ACTION, ie,  DISPATCH THE ACTION TO THE REDUCER


ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
