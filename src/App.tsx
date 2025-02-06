import React, { useState } from 'react'
import Info from './components/Info';

import GameBoard from './components/GameBoard';
import './App.css'
import Footer from './components/Footer';


function App() {

  const [score, setScore] = useState<number>(0);

  const handleScore = (score: number) => {
    setScore((prevScore) => prevScore + score);
  }

  return (
    <div className='flex flex-col h-screen'>
      <Info score={score} />
      <GameBoard handleScore={handleScore} score={score} />
      <Footer />
    </div>
  );
}

export default App;
