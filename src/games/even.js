import readlineSync from 'readline-sync';

function getRandomIntInclusive(min, max) {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
}

const even = () => {
  const ROUND_QUANTITY = 3;
  const MIN_OF_RANGE = 1;
  const MAX_OF_RANGE = 50;

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 1; i <= ROUND_QUANTITY; i += 1) {
    const number = getRandomIntInclusive(MIN_OF_RANGE, MAX_OF_RANGE);
    const isEven = (number % 2 === 0);
    const correctAnswer = isEven ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default even;
