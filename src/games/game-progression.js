import randomNum from '../randomNum.js';
import runGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (lengthOfProgression, startNumber, step) => {
  const expression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    const value = startNumber + i * step;
    expression.push(value);
  }
  return `${expression}`;
};

const generateProgressionRound = () => {
  const lengthOfProgression = randomNum(5, 10);
  const startNumber = randomNum();
  const step = randomNum(1, 10);
  const arrayOfExpression = generateProgression(lengthOfProgression, startNumber, step);
  const randomExpression = arrayOfExpression.split(',');
  const hideIndex = randomNum(0, randomExpression.length - 1);
  const correctAnswer = randomExpression[hideIndex];
  randomExpression[hideIndex] = '..';
  return [randomExpression.join(' '), String(correctAnswer)];
};

export default () => {
  runGame(gameRules, generateProgressionRound);
};
