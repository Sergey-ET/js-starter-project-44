import getRandomIntInclusive from '../getRandomIntInclusive.js';
import engine from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findDivisor = (number1, number2) => {
  const divisors = [];

  for (let i = 1; i <= number1; i += 1) {
    if (number1 % i === 0) {
      divisors.push(i);
    }
  }

  let divisor = 0;

  for (let i = 0; i < divisors.length; i += 1) {
    if (number2 % divisors[i] === 0) {
      divisor = divisors[i];
    }
  }

  return divisor;
};

const gameVerification = () => {
  const MIN_OF_RANGE = 1;
  const MAX_OF_RANGE = 100;
  const number1 = getRandomIntInclusive(MIN_OF_RANGE, MAX_OF_RANGE);
  const number2 = getRandomIntInclusive(MIN_OF_RANGE, MAX_OF_RANGE);
  const question = `${number1} ${number2}`;
  const rightAnswer = `${findDivisor(number1, number2)}`;

  return [question, rightAnswer];
};

const gcd = () => engine(gameRules, gameVerification);

export default gcd;
