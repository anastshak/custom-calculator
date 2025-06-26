import { powerY } from '../handlers/handleFunction.js';

describe('powerY()', () => {
  test('2^3 = 8', () => {
    expect(powerY(2, 3)).toBe(8);
  });

  test('2^0 = 1', () => {
    expect(powerY(2, 0)).toBe(1);
  });

  test('It must be an error - fractional number', () => {
    expect(powerY(2, 2.5)).toBe('Error: non-integer exponent');
  });
});
