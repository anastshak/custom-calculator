import { operatorValues, functionValues, memoryValues } from '../constants/constants';
import { commandManager } from '../commands/CommandManager';
import { createCommand } from 'src/commands/CommandFactory';

export default function handleCommandClick(value, display, extraDisplay) {
  // undo
  if (value === '←') {
    commandManager.undo();
    return;
  }

  if (operatorValues.includes(value)) {
    // + - * /
    const command = createCommand('operator', { value, display, extraDisplay });
    commandManager.executeCommand(command);
  } else if (functionValues.includes(value)) {
    // functions
    if (value === 'AC') {
      // AC
      const command = createCommand('clear', { display, extraDisplay });
      commandManager.executeCommand(command);
      return;
    } else {
      const command = createCommand('function', { funcName: value, display, extraDisplay });
      commandManager.executeCommand(command);
    }
  } else if (memoryValues.includes(value)) {
    // MC M+ M- MR
    const command = createCommand('memory', { value, display });
    commandManager.executeCommand(command);
  } else {
    // numbers
    const command = createCommand('number', { value, display });
    commandManager.executeCommand(command);
  }
}
