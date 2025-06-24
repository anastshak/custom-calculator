import { isValidNumber } from '../utils/utils';

export default function calculate(a, b, operator) {
  if (!isValidNumber(a) || !isValidNumber(b)) return 'Error';

  switch (operator) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '×':
      return a * b;

    case '÷':
      return b === 0 ? 'Error' : a / b;

    default:
      return b;
  }
}
