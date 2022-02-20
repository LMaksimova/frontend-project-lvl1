import randomNum from '../../src/randomNum.js';
import runGame from '../index.js';
import { getRandomIntInclusive } from '../../src/randomNum.js';

const gameRules = `What number is missing in the progression?`;


const question = () => {
    const progressionLength = getRandomIntInclusive(6, 10);
    const expression = [];
      const start = randomNum();
      const step = getRandomIntInclusive(1, 10);
      for (let i = 0; i < progressionLength; i += 1) {
        const value = start + i * step;
        expression.push(value);
          }; 
    return `${expression}`;
  };
  
  
  const progression = () => {
      const arrayOfExpression = question();
      const randomExpression = arrayOfExpression.split(',');
      const hide = getRandomIntInclusive(0, randomExpression.length - 1);
      let temp = randomExpression[hide];
      const correctAnswer = temp;
      randomExpression[hide] = '..';
      return [randomExpression, String(correctAnswer)];
  };

export default () => {
    runGame(gameRules, progression);
};