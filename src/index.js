import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const roundCount = 3;
let bye = `Congratulations, ${userName}!`;

const gameOver = (userAnswer, correctAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  bye = `Let's try again, ${userName}!`;
};

const runGame = (gameRules, game) => {
  console.log(gameRules);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, correctAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      gameOver(userAnswer, correctAnswer, userName);
      break;
    }
  }
  console.log(bye);
};

export default runGame;
