import React, { Fragment, useState, useContext } from 'react';
import styled, { DefaultTheme, css } from 'styled-components';

import { TaskContext, IDbSubtask } from '../context/TaskContext';

import FlexRow from '../styled/FormatHelpers/FlexRow';
import Heading from '../styled/Heading';
import Button from '../styled/Button';
import LinkStyleButton from '../styled/LinkStyleButton';
import P from '../styled/P';

import { PlusCircle } from 'styled-icons/boxicons-regular/PlusCircle';
import { MinusCircle } from 'styled-icons/boxicons-regular/MinusCircle';
import { Check } from 'styled-icons/material/Check';

interface IIconProps {
  theme: DefaultTheme
  disabled?: boolean
}

const iconStyles = css`
  color: ${(props: IIconProps) => props.disabled ? props.theme.colors.lightGray : props.theme.colors.main};
  cursor: pointer;
  transform-origin: center center;
  transition: transform ${(props: IIconProps) => props.theme.transitions.out};
  width: 25px;
  cursor: ${(props: IIconProps) => props.disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    transition: transform ${(props: IIconProps) => props.theme.transitions.in};
    transform: ${(props: IIconProps) => props.disabled ? 'scale(1)' : 'scale(1.1)'};
  }
`;

const AddIcon = styled(PlusCircle)<IIconProps>`
  ${iconStyles}
`;

const SubtractIcon = styled(MinusCircle)<IIconProps>`
  ${iconStyles}
`;

const CheckIcon = styled(Check)<IIconProps>`
  ${iconStyles}
`;

interface IEditPoints {
  updateParent: (points: number) => (Promise<void> | void)
  points: number
}

const EditPoints: React.FC<IEditPoints> = (props: IEditPoints) => {
  const [points, updatePoints] = useState(props.points);
  const [shouldShowEditUI, updateShouldShowEditUI] = useState(false);
  
  return (
    <Fragment>
      <Heading margin="15px 0 5px 0">Points</Heading>

      { shouldShowEditUI
        ? <FlexRow
            width="40%"
            margin="0 auto 15px auto"
            alignItems="center"
            justifyContent="space-between">

            <SubtractIcon
              disabled={ points === 1 }
              onClick={ () => points !== 1 && updatePoints(prevFibNum(points)) }
            />

            <Heading textAlign="center">{ points }</Heading>

            <AddIcon
              disabled={ points === 144 }
              onClick={ () => points !== 144 && updatePoints(nextFibNum(points)) }
            />

            <CheckIcon
              onClick={ async () => {
                props.updateParent(points);
                updateShouldShowEditUI(false);
              }}
            />

          </FlexRow>
        : <FlexRow
            height="25px"
            margin="0 0 15px 0"
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