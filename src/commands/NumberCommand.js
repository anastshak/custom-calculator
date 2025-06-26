import Command from './Command';
import { getState, updateState } from '../state/state';

export default class NumberCommand extends Command {
  constructor({ value, display }) {
    super();
    this.value = value;
    this.display = display;

    const { currentOperand } = getState();
    this.prevValue = currentOperand;
  }

  execute() {
    const { shouldClearDisplay } = getState();

    let newValue;

    if (shouldClearDisplay) {
      newValue = this.value === '.' ? '0.' : this.value;
      updateState({ shouldClearDisplay: false });
    } else {
      newValue = this.value === '.' && this.prevValue === '' ? '0.' : this.prevValue + this.value;
    }

    this.display.value = newValue;
    updateState({ currentOperand: newValue });
  }

  undo() {
    this.display.value = this.prevValue;
    updateState({ currentOperand: this.prevValue, shouldClearDisplay: false });
  }
}
