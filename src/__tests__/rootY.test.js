import { rootY } from '../handlers/handleFunction';

describe('rootY()', () => {
  test('rootY(27, 3) = 3', () => {
    expect(rootY(27, 3)).toBeCloseTo(3);
  });

  test('rootY(9, 2) = 3', () => {
    expect(rootY(9, 2)).toBeCloseTo(3);
  });

  test('rootY(42, 1) = 42', () => {
    expect(rootY(42, 1)).toBe(42);
  });

  test('rootY(0, 3) = 0', () => {
    expect(rootY(0, 3)).toBe(0);
  });

  test('rootY(10, 0) must ne an error - zero root', () => {
    expect(rootY(10, 0)).toBe('Error: zero root');
  });

  test('rootY(-8, 2) must ne an error - negative root', () => {
    expect(rootY(-8, 2)).toBe('Error: Negative root');
  });

  test('It must be an error - invalid input', () => {
    expect(rootY('abc', 3)).toBe('Error');
    expect(rootY(27, 'def')).toBe('Error');
    expect(rootY(null, 2)).toBe('Error');
    expect(rootY(10, undefined)).toBe('Error');
  });
});
