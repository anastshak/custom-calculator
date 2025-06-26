import NumberCommand from './NumberCommand';
import OperatorCommand from './OperatorCommand';
import FunctionCommand from './FunctionCommand';
import MemoryCommand from './MemoryCommand';
import ClearCommand from './ClearCommand';

export default function createCommand(type, payload) {
  switch (type) {
    case 'number':
      return new NumberCommand(payload);
    case 'operator':
      return new OperatorCommand(payload);
    case 'function':
      return new FunctionCommand(payload);
    case 'memory':
      return new MemoryCommand(payload);
    case 'clear':
      return new ClearCommand(payload);
    default:
      throw new Error(`Unknown command type: ${type}`);
  }
}
