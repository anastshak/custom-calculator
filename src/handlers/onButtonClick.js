import { operatorValues, functionValues, memoryValues } from '../constants/constants';
// import handleOperator from './handleOperator';
// import handleFunction from './handleFunction';
// import handleNumber from './handleNumber';
// import handleMemory from './handleMemory';

import { commandManager } from '../commands/CommandManager';
import NumberCommand from '../commands/NumberCommand';
import OperatorCommand from '../commands/OperatorCommand';
import ClearCommand from '../commands/ClearCommand';
import MemoryCommand from '../commands/MemoryCommand';

// import { isValidNumber } from '../utils/utils';
import FunctionCommand from '../commands/FunctionCommand';

export default function onButtonClick(value, display, extraDisplay) {
  // undo
  if (value === '←') {
    commandManager.undo();
    return;
  }

  if (operatorValues.includes(value)) {
    // + - * /
    const command = new OperatorCommand(value, display, extraDisplay);
    commandManager.executeCommand(command);
  } else if (functionValues.includes(value)) {
    // functions
    if (value === 'AC') {
      // AC
      const command = new ClearCommand(display, extraDisplay);
      commandManager.executeCommand(command);
      return;
    } else {
      const command = new FunctionCommand({ display, extraDisplay, funcName: value });
      commandManager.executeCommand(command);
    }
  } else if (memoryValues.includes(value)) {
    // MC M+ M- MR
    const command = new MemoryCommand(value, display);
    commandManager.executeCommand(command);
  } else {
    // numbers
    const command = new NumberCommand(value, display);
    commandManager.executeCommand(command);
  }
}
