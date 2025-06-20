import { getA, setA, getB, setB, getOperator, setOperator, clear } from './state';
import calculate from './calculate';

export default function handleOperator(value, display, extraDisplay) {
  if (value === '=') {
    if (getA() !== null && getOperator() && display.value !== '') {
      setB(display.value);
      const result = calculate(parseFloat(getA()), parseFloat(getB()), getOperator());
      display.value = result;
      extraDisplay.textContent = `${getA()} ${getOperator()} ${getB()} =`;
      clear();
    }
  } else {
    if (getA() !== null && getOperator() && display.value !== '') {
      setB(display.value);
      const result = calculate(parseFloat(getA()), parseFloat(getB()), getOperator());
      display.value = result;
      setA(result);
    } else if (display.value !== '') {
      setA(display.value);
    }

    setOperator(value);
    extraDisplay.textContent = `${getA()} ${getOperator()}`;
    display.value = '';
  }
}
