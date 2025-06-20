export default function calculate(numA, numB, operator) {
  switch (operator) {
    case '+':
      return numA + numB;
    case '-':
      return numA - numB;
    case '×':
      return numA * numB;
    case '÷':
      return numB === 0 ? 'Error' : numA / numB;
    default:
      return numB;
  }
}
