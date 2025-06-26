import Command from './Command';
import { getState, updateState, clearCalculation } from '../state/state';
import calculate from '../handlers/calculate';
import BinaryFunctionCommand from './BinaryFunctionCommand';
import { commandManager } from './CommandManager';

export default class OperatorCommand extends Command {
  constructor(operator, display, extraDisplay) {
    super();
    this.operator = operator;

    this.display = display;
    this.extraDisplay = extraDisplay;

    // сохраняем состояние перед изменением
    const state = getState();
    this.prevState = { ...state };
  }

  execute() {
    const { currentOperand, previousOperand, operator, tempValue, pendingFunction } = getState();
    const a = parseFloat(previousOperand);
    const b = parseFloat(currentOperand);

    if (this.operator === '=') {
      // Обработка бинарных функций (xʸ, ʸ√)
      if (pendingFunction && tempValue !== null && currentOperand !== '') {
        const command = new BinaryFunctionCommand({
          display: this.display,
          extraDisplay: this.extraDisplay,
          tempValue,
          funcName: pendingFunction,
        });
        commandManager.executeCommand(command);
        return;
      }
      // Обычное арифметическое вычисление
      if (this.operator === '=' && previousOperand && operator && currentOperand) {
        const result = calculate(a, b, operator);
        this.display.value = result.toString();
        this.extraDisplay.textContent = `${previousOperand} ${operator} ${currentOperand} =`;

        clearCalculation();
        updateState({ currentOperand: result.toString() });
      }
    } else {
      // Установка нового оператора и промежуточные вычисления
      if (previousOperand && operator && currentOperand) {
        const result = calculate(a, b, operator);

        this.display.value = result.toString();
        updateState({
          previousOperand: result.toString(),
          currentOperand: '',
          operator: this.operator,
        });
      } else if (currentOperand) {
        updateState({
          previousOperand: currentOperand,
          currentOperand: '',
          operator: this.operator,
        });
      } else if (previousOperand) {
        updateState({ operator: this.operator });
      }

      this.display.value = '';
      const updatedState = getState();
      this.extraDisplay.textContent = `${updatedState.previousOperand} ${updatedState.operator}`;
    }
  }

  undo() {
    updateState(this.prevState);
    this.display.value = this.prevState.currentOperand;
    this.extraDisplay.textContent =
      this.prevState.previousOperand && this.prevState.operator
        ? `${this.prevState.previousOperand} ${this.prevState.operator}`
        : '';
  }
}
