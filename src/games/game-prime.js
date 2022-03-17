import runGame from '../index.js';
import randomNum from '../randomNum.js';

const gameRules = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';

const isPrime = (num) => {
  if ((num === 1) || (num <= 0)) {
    return false;
  }
  for (let divisor = 2; divisor < num; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const generatePrimeRound = () => {
  const randomExpression = randomNum();
  const correctAnswer = String(isPrime(randomExpression) ? 'yes' : 'no');
  return [randomExpression, correctAnswer];
};

export default () => {
  runGame(gameRules, generatePrimeRound);
};
