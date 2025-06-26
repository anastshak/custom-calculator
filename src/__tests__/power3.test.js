import { power3 } from '../handlers/handleFunction';

describe('power3()', () => {
  test('power3(2) = 8', () => {
    expect(power3(2)).toBe(8);
  });

  test('power3(-12) = 144', () => {
    expect(power3(-12)).toBe(-1728);
  });

  test('power3(NaN) must be an error', () => {
    expect(power3(NaN)).toBe('Error');
  });
});
