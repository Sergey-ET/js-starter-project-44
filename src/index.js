import readlineSync from 'readline-sync';

const engine = (gameRules, gameVerification) => {
  const ROUND_QUANTITY = 3;

  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n${gameRules}`);

  for (let i = 1; i <= ROUND_QUANTITY; i += 1) {
    const [question, rightAnswer] = gameVerification();
    const correctAnswer = rightAnswer;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default engine;
