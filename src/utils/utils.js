export const isValidNumber = (num) => {
  return typeof num === 'number' && !isNaN(num) && isFinite(num);
};

export function pow10(n) {
  let result = 1;
  while (n > 0) {
    result *= 10;
    n--;
  }
  return result;
}

export function decimalPlaces(x) {
  const parts = x.toString().split('.');
  return parts[1] ? parts[1].length : 0;
}
