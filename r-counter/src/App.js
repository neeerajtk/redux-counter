import React from 'react';
import {useSelector} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  return (
    <div className="App">
      <h1>Counter Value : {counter} </h1>
    </div>
  );
}

export default App;
