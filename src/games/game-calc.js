import runGame from '../index.js';
import randomNum from '../randomNum.js';

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const randomOperator = () => operators[randomNum(0, operators.length - 1)];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: throw new Error('Unsupported operator');
  }
};

const generateCalcRound = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const operator = randomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return [question, correctAnswer];
};

export default () => {
  runGame(gameRules, generateCalcRound);
};
