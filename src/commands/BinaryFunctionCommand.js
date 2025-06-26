import Command from './Command';
import { powerY, rootY } from '../handlers/handleFunction';
import { getState, updateState } from '../state/state';
import { isValidNumber } from '../utils/utils';

export default class BinaryFunctionCommand extends Command {
  constructor({ display, extraDisplay, tempValue, funcName }) {
    super();
    this.display = display;
    this.extraDisplay = extraDisplay;
    this.tempValue = tempValue;
    this.funcName = funcName;

    this.prevState = getState();
    this.prevDisplayValue = display.value;
    this.prevExtraDisplay = extraDisplay.textContent;
  }

  execute() {
    const y = parseFloat(this.display.value);
    if (!isValidNumber(this.tempValue) || !isValidNumber(y)) {
      this.display.value = 'Error';
      return;
    }

    let result;
    let label = '';

    if (this.funcName === 'powerY') {
      result = powerY(this.tempValue, y);
      label = `${this.tempValue}^${y} =`;
    } else if (this.funcName === 'rootY') {
      result = rootY(this.tempValue, y);
      label = `${y}√${this.tempValue} =`;
    } else {
      this.display.value = 'Error';
      return;
    }

    if (!isValidNumber(result)) {
      this.display.value = 'Error';
      return;
    }

    this.display.value = result.toString();
    this.extraDisplay.textContent = label;

    updateState({
      currentOperand: this.display.value,
      tempValue: null,
      pendingFunction: null,
    });
  }

  undo() {
    updateState(this.prevState);
    this.display.value = this.prevDisplayValue;
    this.extraDisplay.textContent = this.prevExtraDisplay;
  }
}
