export default function handleNumber(value, display) {
  if (value === '.') {
    if (!display.value.includes('.')) {
      display.value += '.';
    }
  } else {
    display.value += value;
  }
}
