import React, { useState, useContext } from 'react';

import { TaskContext, IDbSubtask } from '../context/TaskContext';

interface IEditPoints {
  subtask: IDbSubtask
}

const EditPoints: React.FC<IEditPoints> = (props: IEditPoints) => {
  const [points, updatePoints] = useState(1);
  
  return (
    <div>
      <div>{ points }</div>
      <button onClick={ () => updatePoints(prevFibNum(points)) }>-</button>
      <button onClick={ () => updatePoints(nextFibNum(points)) }>+</button>
    </div>
  )
}
  
export default EditPoints;

function getFibonacciDetails(number: number, previous: number = 1, current:number = 2): [boolean, number, number] {
  if (number === 1 || current === number) {
    return [true, previous, current];
  } else if (current > number) {
    return [false, previous, current];
  }

  const newCurrent = previous + current;

  return getFibonacciDetails(number, current, newCurrent);
}

function nextFibNum(currentFibNum: number): number {
  const fibDetails: [boolean, number, number] = getFibonacciDetails(currentFibNum);
  return fibDetails[1] + fibDetails[2];
}

function prevFibNum(currentFibNum: number): number {
  const fibDetails: [boolean, number, number] = getFibonacciDetails(currentFibNum);
  console.log({ fibDetails })
  return fibDetails[1];
}