import { percent } from '../handlers/handleFunction';

describe('percent()', () => {
  test('percent(100) = 1', () => {
    expect(percent(100)).toBe(1);
  });

  test('percent(50) = 0.5', () => {
    expect(percent(50)).toBe(0.5);
  });

  test('percent(NaN) must be an error', () => {
    expect(percent(NaN)).toBe('Error');
  });
});
