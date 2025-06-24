import { updateState, clearCalculation } from './state';
import { power2, power3, tenPowerX, reciprocal, factorial, sqrt, cbrt } from './handleExtraFunction';

export default function handleFunction(value, display, extraDisplay) {
  const x = parseFloat(display.value);

  switch (value) {
    case 'AC':
      clearCalculation();
      display.value = '';
      extraDisplay.textContent = '';
      break;

    case '+/-':
      if (display.value && display.value !== '0') {
        display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
        updateState({ currentOperand: display.value });
      }
      break;

    case '%':
      display.value = (x / 100).toString();
      updateState({ currentOperand: display.value });
      break;

    case 'x²':
      display.value = power2(x).toString();
      extraDisplay.textContent = `${x}² =`;
      updateState({ currentOperand: display.value });
      break;

    case 'x³':
      display.value = power3(x).toString();
      extraDisplay.textContent = `${x}³ =`;
      updateState({ currentOperand: display.value });
      break;

    case '10ˣ':
      display.value = tenPowerX(x).toString();
      extraDisplay.textContent = `10^${x} =`;
      updateState({ currentOperand: display.value });
      break;

    case '1/x':
      display.value = reciprocal(x).toString();
      extraDisplay.textContent = `1/${x} =`;
      updateState({ currentOperand: display.value });
      break;

    case 'x!':
      display.value = factorial(x).toString();
      extraDisplay.textContent = `${x}! =`;
      updateState({ currentOperand: display.value });
      break;

    case '√':
      display.value = sqrt(x).toString();
      extraDisplay.textContent = `√${x} =`;
      updateState({ currentOperand: display.value });
      break;

    case '³√':
      display.value = cbrt(x).toString();
      extraDisplay.textContent = `∛${x} =`;
      updateState({ currentOperand: display.value });
      break;

    case 'xʸ':
      updateState({ tempValue: x, pendingFunction: 'powerY' });
      display.value = '';
      extraDisplay.textContent = `${x}^`;
      break;

    case 'ʸ√':
      updateState({ tempValue: x, pendingFunction: 'rootY' });
      display.value = '';
      extraDisplay.textContent = `y√${x}`;
      break;
  }
}
