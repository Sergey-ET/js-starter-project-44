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
  const name = readlineSync.question('May I have your name? ');

  console.log(
    `Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`,
  );

  let counter = 0;

  for (let i = 1; i <= ROUND_QUANTITY; i += 1) {
    const number = getRandomIntInclusive(MIN_OF_RANGE, MAX_OF_RANGE);
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (
      (number % 2 === 0 && userAnswer === 'yes')
      || (number % 2 !== 0 && userAnswer === 'no')
    ) {
      console.log('Correct!');
      counter += 1;
    }

    if (number % 2 !== 0 && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
      break;
    }

    if (number % 2 === 0 && userAnswer !== 'yes') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
      break;
    }
  }

  if (counter === ROUND_QUANTITY) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default even;