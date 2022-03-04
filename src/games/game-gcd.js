import runGame from '../index.js';
import randomNum from '../randomNum.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let result = 0;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return result = num1;
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
