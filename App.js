import { useState } from 'react';
import './App.css';

function App() {
  const [player1current, setPlayer1Current] = useState('')
  const [player1hold, setPlayer1Hold] = useState([])
  const [player2hold, setPlayer2Hold] = useState([])
  const [player2current, setPlayer2Current] = useState([])

  function roll() {
    //Math.trunc(Math.random() * 6) + 1
   const x = 1

   setPlayer1Current(x)
  }

  function hold() {
    
  }
  return (
    <div >
    <h1>Hello world</h1>
    <Player1 current={player1current} />
    <Player2 current={player2current}/>
    <button onClick={roll()}>Roll Dice</button>
    <button onClick={hold()}>Hold</button>
    </div>
  );
}

function Player1({current}) {
  return(
    <div>
    <div>
      <div>
        <h1>Player 1</h1>
        <p>0</p>
      </div>
      <div>
        <p>Current</p>
        <p>{current}</p>
      </div>
    </div>
    <div>
      <div className='dice' />
    </div>
    </div>
  )
}

function Player2({current}) {
  return(
    <div>
    <div>
      <div>
        <h1>Player 2</h1>
        <p>0</p>
      </div>
      <div>
        <p>Current</p>
        <p>{current}</p>
      </div>
    </div>
    <div>
      <div className='dice' />
    </div>
    </div>
  )
}

export default App;
