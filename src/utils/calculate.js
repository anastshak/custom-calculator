import { decimalPlaces, isValidNumber, pow10 } from './utils';

export default function calculate(a, b, operator) {
  if (!isValidNumber(a) || !isValidNumber(b)) return 'Error';

  const decA = decimalPlaces(a);
  const decB = decimalPlaces(b);
  const scale = decA > decB ? pow10(decA) : pow10(decB);

  let result;

  switch (operator) {
    case '+':
      result = (a * scale + b * scale) / scale;
      break;

    case '-':
      result = (a * scale - b * scale) / scale;
      break;

    case '×':
      result = (a * scale * (b * scale)) / (scale * scale);
      break;

    case '÷':
      if (b === 0) return 'Error';
      result = (a * scale) / (b * scale);
      break;

    default:
      result = b;
  }

  if (!isValidNumber(result)) {
    return 'Error';
  }

  return result;
}
