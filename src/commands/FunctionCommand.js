import Command from './Command';
import {
  power2,
  power3,
  tenPowerX,
  reciprocal,
  factorial,
  sqrt,
  cbrt,
  changeSign,
  percent,
} from '../handlers/handleFunction';
import { getState, updateState } from '../state/state';
import { isValidNumber } from '../utils/primitives';

export default class FunctionCommand extends Command {
  constructor({ display, extraDisplay, funcName }) {
    super();
    this.display = display;
    this.extraDisplay = extraDisplay;
    this.funcName = funcName;

    this.prevState = getState();
    this.prevDisplayValue = display.value;
    this.prevExtraDisplay = extraDisplay.textContent;
  }

  execute() {
    const x = parseFloat(this.display.value);

    if (!this.display.value || !isValidNumber(x)) {
      return;
    }

    let result, label;

    switch (this.funcName) {
      case 'x²':
        result = power2(x);
        label = `${x}² =`;
        break;

      case 'x³':
        result = power3(x);
        label = `${x}³ =`;
        break;

      case '10ˣ':
        result = tenPowerX(x);
        label = `10^${x} =`;
        break;

      case '1/x':
        result = reciprocal(x);
        label = `1/${x} =`;
        break;

      case 'x!':
        result = factorial(x);
        label = `${x}! =`;
        break;

      case '√':
        result = sqrt(x);
        label = `√${x} =`;
        break;

      case '³√':
        result = cbrt(x);
        label = `∛${x} =`;
        break;

      case '+/-':
        result = changeSign(x);
        label = '';
        break;

      case '%':
        result = percent(x);
        label = '';
        break;

      case 'xʸ':
        updateState({
          tempValue: x,
          pendingFunction: 'powerY',
          shouldClearDisplay: true, // очистим дисплей при вводе y
        });
        this.display.value = '';
        this.extraDisplay.textContent = `${x}^`;
        return;

      case 'ʸ√':
        updateState({
          tempValue: x,
          pendingFunction: 'rootY',
          shouldClearDisplay: true,
        });
        this.display.value = '';
        this.extraDisplay.textContent = `y√${x}`;
        return;

      default:
        this.display.value = 'Error';
        return;
    }

    if (result === 'Error' || !isValidNumber(result)) {
      this.display.value = 'Error';
      return;
    }

    this.display.value = result.toString();
    this.extraDisplay.textContent = label;
    updateState({ currentOperand: this.display.value });
  }

  undo() {
    updateState({
      ...this.prevState,
      tempValue: null,
      pendingFunction: null,
    });
    this.display.value = this.prevDisplayValue;
    this.extraDisplay.textContent = this.prevExtraDisplay;
  }
}
