import { operatorValues, functionValues } from '../constants/constants';
import handleOperator from './handleOperator';
import handleFunction from './handleFunction';
import handleNumber from './handleNumber';

export default function onButtonClick(value, display, extraDisplay) {
  if (operatorValues.includes(value)) {
    handleOperator(value, display, extraDisplay);
  } else if (functionValues.includes(value)) {
    handleFunction(value, display, extraDisplay);
  } else {
    handleNumber(value, display);
  }
}
