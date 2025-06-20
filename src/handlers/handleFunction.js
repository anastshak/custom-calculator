import { clear } from './state';

export default function handleFunction(value, display, extraDisplay) {
  if (value === 'AC') {
    clear();
    display.value = '';
    extraDisplay.textContent = '';
  } else if (value === '+/-') {
    if (display.value && display.value !== '0') {
      display.value = display.value.startsWith('-') ? display.value.slice(1) : '-' + display.value;
    }
  } else if (value === '%') {
    display.value = parseFloat(display.value) / 100;
  }
}
