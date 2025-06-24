import calculate from './calculate';
import { getState, updateState, clearCalculation } from './state';
import handleBinaryFunction from './handleBinaryFunction';

export default function handleOperator(value, display, extraDisplay) {
  const { currentOperand, previousOperand, operator, tempValue, pendingFunction } = getState();

  if (value === '=') {
    // Обработка бинарных функций (xʸ, ʸ√)
    const handled = handleBinaryFunction(currentOperand, tempValue, pendingFunction, display, extraDisplay);
    if (handled) return;

    // Обычное арифметическое вычисление
    if (previousOperand && operator && currentOperand) {
      const a = parseFloat(previousOperand);
      const b = parseFloat(currentOperand);
      const result = calculate(a, b, operator);

      display.value = result;
      extraDisplay.textContent = `${previousOperand} ${operator} ${currentOperand} =`;
      clearCalculation();
      updateState({ currentOperand: result.toString() });
    }
  } else {
    // Установка оператора и промежуточные вычисления
    if (previousOperand && operator && currentOperand) {
      const a = parseFloat(previousOperand);
      const b = parseFloat(currentOperand);
      const result = calculate(a, b, operator);

      display.value = result;
      updateState({
        previousOperand: result.toString(),
        currentOperand: '',
        operator: value,
      });
    } else if (currentOperand) {
      updateState({
        previousOperand: currentOperand,
        currentOperand: '',
        operator: value,
      });
    } else if (previousOperand) {
      updateState({ operator: value });
    }

    display.value = '';
    const updatedState = getState();
    extraDisplay.textContent = `${updatedState.previousOperand} ${updatedState.operator}`;
  }
}
