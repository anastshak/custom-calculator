export function power2(x) {
  return x * x;
}

export function power3(x) {
  return x * x * x;
}

// 10 в степени x (x — целое)
export function tenPowerX(x) {
  if (!Number.isInteger(x)) return 'Error';
  if (x === 0) return 1;
  if (x < 0) return 1 / tenPowerX(-x);

  let result = 1;
  for (let i = 0; i < x; i++) {
    result *= 10;
  }
  return result;
}

// Обратное число 1/x
export function reciprocal(x) {
  return x === 0 || isNaN(x) ? 'Error' : 1 / x;
}

export function sqrt(value) {
  if (value < 0) return 'Error';
  if (value === 0) return 0;

  let guess = value;
  for (let i = 0; i < 20; i++) {
    guess = 0.5 * (guess + value / guess);
  }
  return guess;
}

export function cbrt(value) {
  if (value === 0) return 0;

  let guess = value;
  for (let i = 0; i < 20; i++) {
    guess = (2 * guess + value / (guess * guess)) / 3;
  }
  return guess;
}

// Факториал (итеративно)
export function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) return 'Error';

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Возведение в степень (только целая степень)
export function powerY(base, exponent) {
  if (!Number.isInteger(exponent)) return 'Error';
  if (exponent === 0) return 1;
  if (exponent < 0) return 1 / powerY(base, -exponent);

  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}

// Корень произвольной степени
export function rootY(value, root) {
  if (value < 0 && root % 2 === 0) return 'Error';
  if (value === 0) return 0;
  if (root === 0) return 'Error';

  let guess = value;
  for (let i = 0; i < 20; i++) {
    const guessPower = powerY(guess, root - 1);
    if (guessPower === 'Error') return 'Error';
    guess = ((root - 1) * guess + value / guessPower) / root;
  }
  return guess;
}
