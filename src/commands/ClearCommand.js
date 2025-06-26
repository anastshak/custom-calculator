import Command from './Command';
import { getState, updateState, clearCalculation } from '../state/state';

export default class ClearCommand extends Command {
  constructor({ display, extraDisplay }) {
    super();
    this.display = display;
    this.extraDisplay = extraDisplay;

    // сохраняем состояние до очистки
    this.prevState = getState();
    this.prevDisplay = display.value;
    this.prevExtraDisplay = extraDisplay.textContent;
  }

  execute() {
    clearCalculation();
    this.display.value = '';
    this.extraDisplay.textContent = '';
  }

  undo() {
    updateState(this.prevState);
    this.display.value = this.prevDisplay;
    this.extraDisplay.textContent = this.prevExtraDisplay;
  }
}
