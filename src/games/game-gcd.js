import runGame from '../index.js';
import randomNum from '../randomNum.js';

const gameRules = 'Find the greatest common divisor of given numbers.';
const rightAnswer = (num1, num2) => {

  let result = 0;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1
    }
  } 
  return result = num1;
};



const gcd = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const randomExpression = `${num1} ${num2}`;
  console.log(randomExpression);
  const correctAnswer = rightAnswer(num1, num2);
  console.log(rightAnswer(num1, num2));
    return [randomExpression, String(correctAnswer)];
}

export default () => {
    runGame(gameRules, gcd);
};