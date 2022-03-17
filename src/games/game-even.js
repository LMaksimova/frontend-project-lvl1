import randomNum from '../randomNum.js';
import runGame from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const generateEvenRound = () => {
  const randomNumber = randomNum();
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, answer];
};

export default () => {
  runGame(gameRules, generateEvenRound);
};
