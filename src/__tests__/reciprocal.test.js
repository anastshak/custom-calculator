import { reciprocal } from '../handlers/handleFunction';

describe('reciprocal()', () => {
  test('reciprocal(2) = 0.5', () => {
    expect(reciprocal(2)).toBe(0.5);
  });

  test('reciprocal(0) must be an error - division by zero', () => {
    expect(reciprocal(0)).toBe('Error: Division by 0');
  });

  test('reciprocal(NaN) must be an error', () => {
    expect(reciprocal(NaN)).toBe('Error');
  });
});
