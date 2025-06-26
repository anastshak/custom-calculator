import { cbrt } from '../handlers/handleFunction.js';

describe('cbrt()', () => {
  test('cbrt(27) = 3', () => {
    expect(cbrt(27)).toBe(3);
  });

  test('cbrt(0) = 0', () => {
    expect(cbrt(0)).toBe(0);
  });

  test('cbrt(NaN) must be an error', () => {
    expect(cbrt(NaN)).toBe('Error');
  });
});
