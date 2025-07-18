import Command from './Command';
import { getState, updateState } from '../state/state';
import { isValidNumber } from '../utils/primitives';

export default class MemoryCommand extends Command {
  constructor({ value, display }) {
    super();
    this.value = value;
    this.display = display;

    // Сохраняем состояние до выполнения
    this.prevState = getState();
    this.prevDisplayValue = display.value;
  }

  execute() {
    const { memory } = getState();
    const current = parseFloat(this.display.value);

    switch (this.value) {
      case 'MC':
        updateState({ memory: 0 });
        break;

      case 'MR':
        this.display.value = memory.toString();
        updateState({ currentOperand: this.display.value });
        break;

      case 'M+':
        if (!isValidNumber(current)) return;
        updateState({ memory: memory + current });
        this.display.value = '';
        updateState({ currentOperand: '' });
        break;

      case 'M-':
        if (!isValidNumber(current)) return;
        updateState({ memory: memory - current });
        this.display.value = '';
        updateState({ currentOperand: '' });
        break;
    }
  }

  undo() {
    updateState(this.prevState);
    this.display.value = this.prevDisplayValue;
  }
}
