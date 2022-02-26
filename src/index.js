import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundsCount = 3;

const runGame = (gameRules, generateRound) => {
  console.log(gameRules);
  const userName = greeting();
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
       console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
       return console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
