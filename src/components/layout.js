import { buttonValues, operatorValues, functionValues, memoryValues } from '../constants/constants';
import handleCommandClick from '../handlers/handleCommandClick';
import createThemeToggle from './theme-switch';

export default function createCalculator() {
  const app = document.createElement('div');
  app.id = 'root';
  document.body.appendChild(app);

  const heading = document.createElement('div');
  heading.className = 'heading';
  app.appendChild(heading);

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'calculator';
  heading.appendChild(title);

  const themeToggle = createThemeToggle();
  heading.appendChild(themeToggle);

  const calculator = document.createElement('main');
  calculator.className = 'calculator';
  app.appendChild(calculator);

  const extraDisplay = document.createElement('div');
  extraDisplay.className = 'extraDisplay';
  calculator.appendChild(extraDisplay);

  const display = document.createElement('input');
  display.className = 'display';
  display.readOnly = true;
  display.type = 'text';
  calculator.appendChild(display);

  const buttonsBox = document.createElement('div');
  buttonsBox.className = 'buttonsBox';
  calculator.appendChild(buttonsBox);

  buttonValues.forEach((value) => {
    const button = document.createElement('button');
    button.textContent = value;
    button.className = 'btn';

    if (operatorValues.includes(value)) {
      button.classList.add('operator');
    } else if (functionValues.includes(value)) {
      button.classList.add('function');
    } else if (memoryValues.includes(value)) {
      button.classList.add('memory');
    } else if (value === '0') {
      button.classList.add('zero', 'number');
    } else if (value === '←') {
      button.classList.add('extraBtn', 'function');
    } else {
      button.classList.add('number');
    }

    button.addEventListener('click', () => handleCommandClick(value, display, extraDisplay));
    buttonsBox.appendChild(button);
  });
}
