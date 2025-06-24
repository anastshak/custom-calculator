import { getState, updateState } from './state';
import { isValidNumber } from '../utils/utils';

export default function handleMemory(value, display) {
  const { memory } = getState();
  const current = parseFloat(display.value);

  switch (value) {
    case 'MC':
      updateState({ memory: 0 });
      break;

    case 'MR':
      display.value = memory.toString();
      updateState({ currentOperand: display.value });
      break;

    case 'M+':
      if (!isValidNumber(current)) return;
      updateState({ memory: memory + current });
      break;

    case 'M-':
      if (!isValidNumber(current)) return;
      updateState({ memory: memory - current });
      break;
  }
}
