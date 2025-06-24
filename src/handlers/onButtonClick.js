import { operatorValues, functionValues, memoryValues } from '../constants/constants';
import handleOperator from './handleOperator';
import handleFunction from './handleFunction';
import handleNumber from './handleNumber';
import handleMemory from './handleMemory';

export default function onButtonClick(value, display, extraDisplay) {
  if (operatorValues.includes(value)) {
    handleOperator(value, display, extraDisplay);
  } else if (functionValues.includes(value)) {
    handleFunction(value, display, extraDisplay);
  } else if (memoryValues.includes(value)) {
    handleMemory(value, display);
  } else {
    handleNumber(value, display);
  }
}
