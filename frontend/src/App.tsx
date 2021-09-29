import React from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './redux/hooks'
import { increment, incrementByAmount } from './redux/counter'

function App() {

  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(incrementByAmount(2))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>{count}</h2>
        <button onClick={onClick}>Increment by 2</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </header>
    </div>
  );
}

export default App;
