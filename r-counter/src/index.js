import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister();


// STORE - GLOBALIZED STATE 
// ACTION - DESCRIBES WHAT YOU WANT TO DO --> IN THIS case INCREMENT 
// REDUCER - DESCRIBES HOW THE ACTIONS TRANSFORM THE STATE INTO THE NEXT STATE, 
// THAT IS IT MODIFIES THE STORE DEPENDING ON THE ACTION
// DISPATCH - THIS IS WHERE WE CAN EXECURE THE ACTION, ie,  DISPATCH THE ACTION TO THE REDUCER