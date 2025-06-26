import { tenPowerX } from '../handlers/handleFunction';

describe('tenPowerX()', () => {
  test('tenPowerX(2) = 100', () => {
    expect(tenPowerX(2)).toBe(100);
  });

  test('tenPowerX(0) = 1', () => {
    expect(tenPowerX(0)).toBe(1);
  });

  test('tenPowerX(NaN) must be an error', () => {
    expect(tenPowerX(NaN)).toBe('Error');
  });

  test('tenPowerX(1.5) must be an error - fractional number', () => {
    expect(tenPowerX(1.5)).toBe('Error');
  });
});
