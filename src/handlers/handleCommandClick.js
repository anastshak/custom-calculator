import { operatorValues, functionValues, memoryValues } from '../constants/constants';
import { commandManager } from '../commands/CommandManager';
import OperatorCommand from '../commands/OperatorCommand';
import ClearCommand from '../commands/ClearCommand';
import FunctionCommand from '../commands/FunctionCommand';
import MemoryCommand from '../commands/MemoryCommand';
import NumberCommand from '../commands/NumberCommand';

export default function handleCommandClick(value, display, extraDisplay) {
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
