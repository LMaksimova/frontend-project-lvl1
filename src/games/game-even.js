import readlineSync from 'readline-sync';
import randomNum from '../../src/randomNum.js';
import { userName } from '../cli.js';

let bye = `Congratulations, ${userName}!`;
const isEven = (num) => num % 2 === 0;
const rightAnswer = (rand, answer) => isEven(rand) ? 'yes' : 'no';
const  gameOver = (userAns, correctAns, userN) => {
    console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
    bye = `Let's try again, ${userName}`;
} 

const even = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const random = randomNum();
        const askQuestion = console.log(`Question: ${random}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = rightAnswer(random, userAnswer);
        
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else if (userAnswer !== correctAnswer) {
            gameOver(userAnswer, correctAnswer, userName);
            break;
        }
    }
    console.log(bye);    
};

export default even;