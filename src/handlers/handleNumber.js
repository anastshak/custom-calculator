import { getState, updateState } from './state';

export default function handleNumber(value, display) {
  const { currentOperand, pendingFunction } = getState();

  if (value === '.' && currentOperand.includes('.')) return;

  const newValue = value === '.' && currentOperand === '' ? '0.' : display.value + value;
  display.value = newValue;

  updateState({ currentOperand: newValue, pendingFunction });
}
