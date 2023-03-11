import getRandomIntInclusive from '../getRandomIntInclusive.js';
import engine from '../index.js';

const gameRules = 'What is the result of the expression?';
const getExpression = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const gameVerification = () => {
  const MIN_OF_RANGE = 1;
  const MAX_OF_RANGE = 10;
  const operators = ['+', '-', '*'];
  const operand1 = getRandomIntInclusive(MIN_OF_RANGE, MAX_OF_RANGE);
  const operand2 = getRandomIntInclusive(MIN_OF_RANGE, MAX_OF_RANGE);
  const randomIndex = getRandomIntInclusive(0, operators.length - 1);
  const operator = operators[randomIndex];
  const question = `${operand1} ${operator} ${operand2}`;
  const rightAnswer = `${getExpression(operand1, operator, operand2)}`;

  return [question, rightAnswer];
};

const calc = () => engine(gameRules, gameVerification);

export default calc;
