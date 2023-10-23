import React from 'react';
import Card from './Card';
import { bingoCombinations } from '../data/constants';
import { cellStyle, gridContainerStyle } from '../data/styles';
import { generateListOfPrompts } from '../logic/utils'
import { GridProps } from '../types/IGrid';

const Grid: React.FC<GridProps> = ({ rows, columns }) => {


  // State

  const selectedGrid = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];

  // Getters and Setters

  const getValueAtIndex = (index: number): boolean => {
    const row = Math.floor(index / 5)
    const column = (index % 5)
    return selectedGrid[row][column]
  }

  const setValueAtIndex = (index: number) => {
    const row = Math.floor(index / 5)
    const column = (index % 5)
    const newGrid = [...selectedGrid]
    newGrid[row][column] = !selectedGrid[row][column]
  }

  // Logic

  const prompts = generateListOfPrompts();

  const determineIfBingoIsPresentOnRow = (Indexes: number[]): boolean => {
    for (const index of Indexes) {
      if (!getValueAtIndex(index)) {
        return false
      }
    }
    console.log("Bingo!")
    return true;
  }

  const determineIfBingoIsReached = (): boolean => {
    for (const array of bingoCombinations ) {
      if (determineIfBingoIsPresentOnRow(array)) {
        return true
      }
    }
    return false;
  }

  const handleClick = (index: number) => {
    setValueAtIndex(index)
    determineIfBingoIsReached()
  }

  return (
    <div   className="grid-container" style={gridContainerStyle}>
      <h1> F1 Bingo! </h1>
      <div id=".grid-container" style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr` }}>
        {Array.from({ length: rows * columns }, (_, index) => (
          <Card key={index} event={prompts[index]} index={index} onCardClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
