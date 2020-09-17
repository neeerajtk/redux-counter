import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement,logged} from './actions/index';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state=>state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter Value : {counter} </h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(logged())}>Login</button>
    {isLogged ? <h3>You are currently Logged In</h3> : <h3>You are currently Not logged In</h3> }
    </div>
  );
}

export default App;
