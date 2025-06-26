import { sqrt } from '../handlers/handleFunction.js';

describe('sqrt()', () => {
  test('sqrt(4) = 2', () => {
    expect(sqrt(4)).toBe(2);
  });

  test('sqrt(-4) must be an error', () => {
    expect(sqrt(-4)).toBe('Error: negative sqrt');
  });
});
