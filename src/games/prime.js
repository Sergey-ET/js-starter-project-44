import getRandomIntInclusive from '../getRandomIntInclusive.js';
import engine from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameVerification = () => {
  const MIN_OF_RANGE = 1;
  const MAX_OF_RANGE = 100;
  const number = getRandomIntInclusive(MIN_OF_RANGE, MAX_OF_RANGE);
  const question = `${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const prime = () => engine(gameRules, gameVerification);

export default prime;
