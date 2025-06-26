import { power2 } from '../handlers/handleFunction';

describe('power2()', () => {
  test('power2(2) = 4', () => {
    expect(power2(2)).toBe(4);
  });

  test('power2(-12) = 144', () => {
    expect(power2(-12)).toBe(144);
  });

  test('power2(NaN) must be an error', () => {
    expect(power2(NaN)).toBe('Error');
  });
});
