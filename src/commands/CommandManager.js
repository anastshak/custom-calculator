// commands store and handle "undo"

class CommandManager {
  constructor() {
    this.history = [];
  }

  executeCommand(command) {
    command.execute();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    if (command && command.undo) {
      command.undo();
    }
  }
}

export const commandManager = new CommandManager();
