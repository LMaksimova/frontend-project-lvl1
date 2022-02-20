import randomNum from '../../src/randomNum.js';
import runGame from '../index.js';


const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven =  (num) => num % 2 === 0;



const even = () => {
        const random = randomNum();
        const randomExpression = `${random}`;
        const rightAnswer = isEven(random) ? 'yes' : 'no';
        const correctAnswer = rightAnswer;
        return [randomExpression, String(correctAnswer)];
};

export default () => {
    runGame(gameRules, even);
};
