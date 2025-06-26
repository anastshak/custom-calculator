let state = {
  currentOperand: '',
  previousOperand: '',
  operator: null,
  memory: 0,
  tempValue: null,
  pendingFunction: null,
  shouldClearDisplay: false, // for binary func
};

export function getState() {
  return { ...state };
}

export function updateState(newState) {
  state = { ...state, ...newState };
}

export function clearCalculation() {
  state.currentOperand = '';
  state.previousOperand = '';
  state.operator = null;
  state.tempValue = null;
  state.pendingFunction = null;
  state.shouldClearDisplay = false;
}
