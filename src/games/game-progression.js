import randomNum, { getRandomIntInclusive } from '../randomNum.js';
import runGame from '../index.js';

const gameRules = 'What number is missing in the progression?';

const question = () => {
  const progressionLength = getRandomIntInclusive(5, 10);
  const expression = [];
  const start = randomNum();
  const step = getRandomIntInclusive(1, 10);
  for (let i = 0; i < progressionLength; i += 1) {
    const value = start + i * step;
    expression.push(value);
  }
  return `${expression}`;
};

const progression = () => {
  const arrayOfExpression = question();
  const randomExpression = arrayOfExpression.split(',');
  const hide = getRandomIntInclusive(0, randomExpression.length - 1);
  const temp = randomExpression[hide];
  const correctAnswer = temp;
  randomExpression[hide] = '..';
  return [randomExpression.join(' '), String(correctAnswer)];
};

export default () => {
  runGame(gameRules, progression);
};
