import { isValidNumber } from '../utils/utils';
import { powerY, rootY } from './handleExtraFunction';
import { updateState } from './state';

export default function handleBinaryFunction(pendingFunction, tempValue, display, extraDisplay) {
  if (!pendingFunction || tempValue === null || display.value === '') return;

  const y = parseFloat(display.value);
  if (!isValidNumber(y)) {
    display.value = 'Error';
    return;
  }

  let result;

  switch (pendingFunction) {
    case 'powerY':
      result = powerY(tempValue, y);
      extraDisplay.textContent = `${tempValue}^${y} =`;
      break;
    case 'rootY':
      result = rootY(tempValue, y);
      extraDisplay.textContent = `${y}√${tempValue} =`;
      break;
    default:
      return;
  }

  if (!isValidNumber(result)) {
    display.value = 'Error';
  } else {
    display.value = result.toString();
  }

  updateState({
    currentOperand: display.value,
    tempValue: null,
    pendingFunction: null,
  });
}
