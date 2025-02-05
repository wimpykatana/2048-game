import React, { useEffect, useRef, useState } from 'react'
import Square from './components/Square'
import './App.css'


function App() {
  const [squares, setSquares] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isWon, setIsWon] = useState<boolean>(false);
  const squaresRef = useRef(squares);
  const width = 4;

  const createGame = () => {
    let x: number[] = Array(width * width).fill(0);
    addRandomTile(x);
    addRandomTile(x);
    setSquares(x);
  };

  const addRandomTile = (grid: number[]) => {
    let zeroIndex: number[] = [];
    grid.forEach((val, index) => {
      if (val === 0) {
        zeroIndex.push(index);
      }
    });

    const random = Math.floor(Math.random() * zeroIndex.length);
    grid[zeroIndex[random]] = 2;
  };

  useEffect(() => {
    createGame();

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    squaresRef.current = squares;
  }, [squares]);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        moveUp();
        break;
      case 'ArrowDown':
        moveDown();
        break;
      case 'ArrowLeft':
        moveLeft();
        break;
      case 'ArrowRight':
        moveRight();
        break;
      default:
        break;
    }
  };

  // Implement move functions
  const moveLeft = () => {
    let newSquares = [...squaresRef.current];
    for (let i = 0; i < width; i++) {
      let row = newSquares.slice(i * width, i * width + width);
      row = slide(row);
      row = combine(row);
      row = slide(row);
      newSquares.splice(i * width, width, ...row);
    }
    addRandomTile(newSquares);
    setSquares(newSquares);
    checkForGameOver(newSquares);
  };

  const moveRight = () => {
    let newSquares = [...squaresRef.current];
    for (let i = 0; i < width; i++) {
      let row = newSquares.slice(i * width, i * width + width);
      row = row.reverse();
      row = slide(row);
      row = combine(row);
      row = slide(row);
      row = row.reverse();
      newSquares.splice(i * width, width, ...row);
    }
    addRandomTile(newSquares);
    setSquares(newSquares);
    checkForGameOver(newSquares);
  };

  const moveUp = () => {
    let newSquares = [...squaresRef.current];
    for (let i = 0; i < width; i++) {
      let column: number[] = [];
      for (let j = 0; j < width; j++) {
        column.push(newSquares[i + j * width]);
      }
      column = slide(column);
      column = combine(column);
      column = slide(column);
      for (let j = 0; j < width; j++) {
        newSquares[i + j * width] = column[j];
      }
    }
    addRandomTile(newSquares);
    setSquares(newSquares);
    checkForGameOver(newSquares);
  };

  const moveDown = () => {
    let newSquares = [...squaresRef.current];
    for (let i = 0; i < width; i++) {
      let column:number[] = [];
      for (let j = 0; j < width; j++) {
        column.push(newSquares[i + j * width]);
      }
      column = column.reverse();
      column = slide(column);
      column = combine(column);
      column = slide(column);
      column = column.reverse();
      for (let j = 0; j < width; j++) {
        newSquares[i + j * width] = column[j];
      }
    }
    addRandomTile(newSquares);
    setSquares(newSquares);
    checkForGameOver(newSquares);
  };

  const slide = (row: number[]) => {
    let filteredRow = row.filter(num => num);
    let missing = width - filteredRow.length;
    let zeros = Array(missing).fill(0);
    return filteredRow.concat(zeros);
  };

  const combine = (row: number[]) => {
    for (let i = 0; i < row.length - 1; i++) {
      if (row[i] === row[i + 1]) {
        row[i] = row[i] + row[i + 1];
        row[i + 1] = 0;
      }
    }
    return row;
  };

  const checkForGameOver = (newSquares: number[]) => {
    if (newSquares.indexOf(2048) !== -1) {
      setIsWon(true);
      window.removeEventListener('keydown', handleKeyDown);
    }
    if (newSquares.indexOf(0) === -1) {
      setIsGameOver(true);
      window.removeEventListener('keydown', handleKeyDown);
    }
  };

  return (
    <>
      <div className='board flex flex-wrap w-[456px] h-[456px] bg-[#BBADA0] rounded-[6px]'>
        {
          squares.map((val, index) => {
            return <Square key={index} val={val} />
          })
        }
      </div>
      <div className='text-center mt-4'>
        {isGameOver ? 'Game Over' : ''}
      </div>
      <div className='text-center mt-4'>
        {isWon ? 'You Won' : ''}
      </div>
    </>
  );
}

export default App;
