// CalculatorContainer.js
import React from 'react';
import styled from 'styled-components';
import ButtonsGrid from './ButtonsGrid';

const Container = styled.div`
  background-color: #333;
  padding: 20px; /* Adjusted padding for the background container */
  border-radius: 10px; /* Increased border radius for smoother edges */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 600px; /* Decreased width for a smaller calculator */
  max-width: 90vw;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const Display = styled.div`
  background-color: #444;
  color: white;
  font-size: 1.2em; /* Adjusted font size for the display */
  padding: 10px; /* Adjusted padding for the display */
  border-radius: 10px; /* Decreased border radius for the display */
  margin-bottom: 15px;
  text-align: right;
`;

const CalculatorContainer = ({ input, result, isExploding, handleButtonClick }) => {
  return (
    <Container>
      <Display>
        {input || '0'}
        {result && <div>= {result}</div>}
      </Display>
      <ButtonsGrid handleButtonClick={handleButtonClick} isExploding={isExploding} />
    </Container>
  );
};

export default CalculatorContainer;
