// App.js
import React, { useState } from 'react';
import CalculatorContainer from './component/CalculatorContainer';
const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isExploding, setIsExploding] = useState(false);
  const [isRadian, setIsRadian] = useState(true);
  const [memory, setMemory] = useState(null);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(input.replace('^', '**'));
        setResult(calculatedResult);
        if (input.includes('5') && input.includes('6')) {
          setIsExploding(true);
          setTimeout(() => setIsExploding(false), 2000);
        }
      } catch {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === 'Rad') {
      setIsRadian(!isRadian);
    } else if (value === '+/-') {
      setInput(input.startsWith('-') ? input.substring(1) : `-${input}`);
    } else if (value === '%') {
      setResult(parseFloat(input) / 100);
      setInput('');
    } else if (value === 'C') {
      setInput('');
    } else if (['(', ')'].includes(value)) {
      setInput(input + value);
    } else if (['MC', 'M+', 'M-', 'MR'].includes(value)) {
      handleMemoryFunctions(value);
    } else if (['sin', 'cos', 'tan', 'sinh', 'cosh', 'tanh'].includes(value)) {
      handleTrigonometricFunctions(value);
    } else if (['x^2', 'x^3', 'e^x', '10^x', '1/x', '√', '∛', 'y√x', 'ln', 'log10'].includes(value)) {
      handleAdditionalFunctions(value);
    } else {
      setInput(input + value);
    }
  };

  const handleMemoryFunctions = (func) => {
    switch (func) {
      case 'MC':
        setMemory(null);
        break;
      case 'M+':
        setMemory((prev) => (prev || 0) + parseFloat(result || input));
        break;
      case 'M-':
        setMemory((prev) => (prev || 0) - parseFloat(result || input));
        break;
      case 'MR':
        setInput(memory?.toString() || '');
        break;
      default:
        break;
    }
  };

  const handleTrigonometricFunctions = (func) => {
    let value = parseFloat(input);
    if (!isRadian) {
      value = value * (Math.PI / 180); // Convert to radians if in degrees mode
    }
    let calculatedResult;
    switch (func) {
      case 'sin':
        calculatedResult = Math.sin(value);
        break;
      case 'cos':
        calculatedResult = Math.cos(value);
        break;
      case 'tan':
        calculatedResult = Math.tan(value);
        break;
      case 'sinh':
        calculatedResult = Math.sinh(value);
        break;
      case 'cosh':
        calculatedResult = Math.cosh(value);
        break;
      case 'tanh':
        calculatedResult = Math.tanh(value);
        break;
      default:
        break;
    }
    setResult(calculatedResult);
  };

  const handleAdditionalFunctions = (func) => {
    let value = parseFloat(input);
    let calculatedResult;
    switch (func) {
      case 'x^2':
        calculatedResult = Math.pow(value, 2);
        break;
      case 'x^3':
        calculatedResult = Math.pow(value, 3);
        break;
      case 'e^x':
        calculatedResult = Math.exp(value);
        break;
      case '10^x':
        calculatedResult = Math.pow(10, value);
        break;
      case '1/x':
        calculatedResult = 1 / value;
        break;
      case '√':
        calculatedResult = Math.sqrt(value);
        break;
      case '∛':
        calculatedResult = Math.cbrt(value);
        break;
      case 'y√x':
        const [base, root] = input.split(',').map(Number); // assuming input in format "base,root"
        calculatedResult = Math.pow(base, 1 / root);
        break;
      case 'ln':
        calculatedResult = Math.log(value);
        break;
      case 'log10':
        calculatedResult = Math.log10(value);
        break;
      default:
        break;
    }
    setResult(calculatedResult);
  };

  return (
    <CalculatorContainer
      input={input}
      result={result}
      isExploding={isExploding}
      handleButtonClick={handleButtonClick}
    />
  );
};

export default App;