import readlineSync from 'readline-sync';

const getRandomIntInclusive = (min, max) => {
  const roundedMin = Math.ceil(min);
  const roundedMax = Math.floor(max);
  return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
};

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

const calc = () => {
  const ROUND_QUANTITY = 3;
  const MIN_OF_RANGE = 1;
  const MAX_OF_RANGE = 10;

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\nWhat is the result of the expression?`);

  for (let i = 1; i <= ROUND_QUANTITY; i += 1) {
    const operators = ['+', '-', '*'];
    const operand1 = getRandomIntInclusive(MIN_OF_RANGE, MAX_OF_RANGE);
    const operand2 = getRandomIntInclusive(MIN_OF_RANGE, MAX_OF_RANGE);
    const randomIndex = getRandomIntInclusive(0, operators.length - 1);
    const operator = operators[randomIndex];
    const correctAnswer = getExpression(operand1, operator, operand2);
    console.log(`Question: ${operand1} ${operator} ${operand2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default calc;
