import React, { useState } from 'react'
import Info from './components/Info';

import GameBoard from './components/GameBoard';
import './App.css'


function App() {

  const [score, setScore] = useState<number>(0);

  const handleScore = (score: number) => {
    setScore((prevScore) => prevScore + score);
  }

  return (
    <>
      <Info score={score} />
      <GameBoard handleScore={handleScore} score={score} />
    </>
  );
}

export default App;
