import runGame from '../index.js';
import randomNum from '../randomNum.js';

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const randomOperator = () => operators[Math.floor(Math.random() * operators.length)];

const rightAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
  }
};

const calc = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const operator = randomOperator();
  const randomExpression = `${num1} ${operator} ${num2}`;
  const correctAnswer = rightAnswer(num1, num2, operator);
  return [randomExpression, String(correctAnswer)];
};

export default () => {
  runGame(gameRules, calc);
};
