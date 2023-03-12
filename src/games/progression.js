import getRandomIntInclusive from '../getRandomIntInclusive.js';
import engine from '../index.js';

const gameRules = 'What number is missing in the progression?';

const gameVerification = () => {
  const PROGRESSION_RANGE_MIN = 1;
  const PROGRESSION_RANGE_MAX = 10;
  const PROGRESSION_LENGTH = 10;
  const PROGRESSION_GAP_MIN = 1;
  const PROGRESSION_GAP_MAX = 5;
  const PROGRESSION_INDEX_MIN = 0;
  const PROGRESSION_INDEX_MAX = PROGRESSION_LENGTH - 1;

  const progressionGap = getRandomIntInclusive(PROGRESSION_GAP_MIN, PROGRESSION_GAP_MAX);
  const progressionIndex = getRandomIntInclusive(PROGRESSION_INDEX_MIN, PROGRESSION_INDEX_MAX);

  const progressionArray = [getRandomIntInclusive(PROGRESSION_RANGE_MIN, PROGRESSION_RANGE_MAX)];

  for (let i = 1; i < PROGRESSION_LENGTH; i += 1) {
    progressionArray.push(progressionArray[i - 1] + progressionGap);
  }

  const missingNumber = progressionArray.splice(progressionIndex, 1, '..').join(' ');

  const question = `${progressionArray.join(' ')}`;
  const rightAnswer = `${missingNumber}`;

  return [question, rightAnswer];
};

const progression = () => engine(gameRules, gameVerification);

export default progression;
