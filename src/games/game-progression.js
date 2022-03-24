import randomNum from '../randomNum.js';
import runGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const generateProgression = (lengthOfProgression, startNumber, step) => {
  const expression = [];
  for (let i = 0; i < lengthOfProgression; i += 1) {
    const value = startNumber + i * step;
    expression.push(value);
  }
  return expression;
};

const generateProgressionRound = () => {
  const lengthOfProgression = randomNum(5, 10);
  const startNumber = randomNum();
  const step = randomNum(1, 10);
  const arrayOfExpression = generateProgression(lengthOfProgression, startNumber, step);
  const hideIndex = randomNum(0, arrayOfExpression.length - 1);
  const correctAnswer = String(arrayOfExpression[hideIndex]);
  arrayOfExpression[hideIndex] = '..';
  const randomExpression = arrayOfExpression.join(' ');
  return [randomExpression, correctAnswer];
};

export default () => {
  runGame(gameRules, generateProgressionRound);
};
