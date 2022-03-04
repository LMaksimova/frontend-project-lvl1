/* eslint-disable no-param-reassign */
import runGame from '../index.js';
import randomNum from '../randomNum.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return a;
};

const generateRound = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return [question, correctAnswer];
};

export default () => {
  runGame(gameRules, generateRound);
};
