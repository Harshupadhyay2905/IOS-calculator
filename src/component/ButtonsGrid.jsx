// ButtonsGrid.js
import React from 'react';
import styled from 'styled-components';
import ConfettiExplosion from 'react-confetti-explosion';

const ButtonsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 5px; /* Decreased gap between buttons */
`;

const Button = styled.button`
  background-color: ${props => 
    props.yellow ? '#FF9500' : 
    props.lighter ? '#666' : '#555'};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px; /* Adjusted padding for smaller buttons */
  font-size: 0.8em; /* Adjusted font size for smaller buttons */
  cursor: pointer;
  grid-column: ${props => props.colSpan ? 'span 2' : 'auto'};

  &:hover {
    background-color: ${props => 
      props.yellow ? '#FFA53D' : 
      props.lighter ? '#777' : '#666'};
  }

  &:active {
    background-color: ${props => 
      props.yellow ? '#FFC27A' : 
      props.lighter ? '#888' : '#777'};
  }
`;

const ButtonsGrid = ({ handleButtonClick, isExploding }) => {
  const buttonRows = [
    ['(', ')', 'MC', 'M+', 'M-', 'MR', 'C', '+/-', '%', '/'],
    ['2nd', 'x^2', 'x^3', 'x^y', 'e^x', '10^x', '7', '8', '9', '*'],
    ['1/x', '√', '∛', 'y√x', 'ln', 'log10', '4', '5', '6', '-'],
    ['x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+'],
    ['Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', '.', '=']
  ];

  const lighterButtons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

  return (
    <ButtonsGridContainer className="buttons">
      {isExploding && <ConfettiExplosion />}
      {buttonRows.flat().map(button => (
        <Button
          key={button}
          onClick={() => handleButtonClick(button)}
          yellow={['/', '*', '-', '+', '='].includes(button)}
          lighter={lighterButtons.includes(button)}
          colSpan={button === '0'}
        >
          {button}
        </Button>
      ))}
    </ButtonsGridContainer>
  );
};

export default ButtonsGrid;
