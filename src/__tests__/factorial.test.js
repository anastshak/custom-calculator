import { factorial } from '../handlers/handleFunction';

describe('factorial()', () => {
  test('factorial(0) = 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial(1) = 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial(5) = 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('It must be an error - negative number', () => {
    expect(factorial(-3)).toBe('Error: Invalid input');
  });

  test('It must be an error - fractional number', () => {
    expect(factorial(3.5)).toBe('Error: Invalid input');
  });

  test('It must be an error - invalid number', () => {
    expect(factorial('abc')).toBe('Error');
    expect(factorial(null)).toBe('Error');
    expect(factorial(undefined)).toBe('Error');
  });
});
