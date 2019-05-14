import React, { Fragment, useState, useContext } from 'react';
import styled, { css } from 'styled-components';

import { TaskContext, IDbSubtask } from '../context/TaskContext';

import FlexRow from '../styled/FormatHelpers/FlexRow';
import Heading from '../styled/Heading';
import Button from '../styled/Button';
import LinkStyleButton from '../styled/LinkStyleButton';
import P from '../styled/P';

import { PlusCircle } from 'styled-icons/boxicons-regular/PlusCircle';
import { MinusCircle } from 'styled-icons/boxicons-regular/MinusCircle';

const iconStyles = css`
  color: ${(props: { theme: { colors: { main: any; }; }; }) => props.theme.colors.main};
  cursor: pointer;
  transform-origin: center center;
  transition: transform ${props => props.theme.transitions.out};

  &:hover {
    transition: transform ${props => props.theme.transitions.in};
    transform: scale(1.1);
  }
`;

const AddIcon = styled(PlusCircle)`
  ${iconStyles}
`;

const SubtractIcon = styled(MinusCircle)`
  ${iconStyles}
`;

interface IEditPoints {
  subtask: IDbSubtask
}

const EditPoints: React.FC<IEditPoints> = (props: IEditPoints) => {
  const [points, updatePoints] = useState(props.subtask.points);
  const [shouldShowEditUI, updateShouldShowEditUI] = useState(false);

  const { updateSubtask } = useContext(TaskContext);
  
  return (
    <Fragment>
      <Heading margin="15px 0 5px 0">Points</Heading>

      { shouldShowEditUI
        ? <FlexRow
            alignItems="center"
            justifyContent="space-between">

            <Button
              width="50px"
              minWidth="50px"
              disabled={ points === 1 }
              onClick={ () => updatePoints(prevFibNum(points)) }
            >-</Button>

            <Heading textAlign="center">{ points }</Heading>

            <Button
              width="50px"
              minWidth="50px"
              disabled={ points === 144 }
              onClick={ () => updatePoints(nextFibNum(points)) }
            >+</Button>

            <Button onClick={ async () => {
              await updateSubtask({ ...props.subtask, points });
              updateShouldShowEditUI(false);
            }}>Save</Button>

          </FlexRow>
        : <FlexRow
            alignItems="center"
            justifyContent="flex-start">
            <Heading margin="0 5px 0 0">{ points }</Heading>
            <LinkStyleButton onClick={ () => updateShouldShowEditUI(true) }>Edit</LinkStyleButton>
          </FlexRow>
      }

    </Fragment>
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