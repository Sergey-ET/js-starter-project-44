import getRandomIntInclusive from '../getRandomIntInclusive.js';
import engine from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameVerification = () => {
  const MIN_OF_RANGE = 1;
  const MAX_OF_RANGE = 50;
  const number = getRandomIntInclusive(MIN_OF_RANGE, MAX_OF_RANGE);
  const isEven = (number % 2 === 0);
  const question = `${number}`;
  const rightAnswer = isEven ? 'yes' : 'no';

  return [question, rightAnswer];
};

const even = () => engine(gameRules, gameVerification);

export default even;
