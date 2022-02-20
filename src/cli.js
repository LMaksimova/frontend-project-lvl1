import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question('May I have your name? '); 
const greetings = () => {
    console.log(`Hello, ${userName}!`);
};

export default greetings;
