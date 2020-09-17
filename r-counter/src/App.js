import React from 'react';
import {useSelector} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state=>state.isLogged);
  return (
    <div className="App">
      <h1>Counter Value : {counter} </h1>

    {logged ? <h3>You are currently Logged In</h3> : <h3>You are currently Not logged In</h3> }
    </div>
  );
}

export default App;
