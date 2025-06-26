import calculate from '../utils/calculate';

describe('calculate()', () => {
  test('1 + 2 = 3', () => {
    expect(calculate(1, 2, '+')).toBe(3);
  });

  test('5 - 3 = 2', () => {
    expect(calculate(5, 3, '-')).toBe(2);
  });

  test('4 × 2 = 8', () => {
    expect(calculate(4, 2, '×')).toBe(8);
  });

  test('8 ÷ 2 = 4', () => {
    expect(calculate(8, 2, '÷')).toBe(4);
  });

  test('Division by 0 → Error', () => {
    expect(calculate(8, 0, '÷')).toBe('Error');
  });

  test('The unknown operator returns the second argument.', () => {
    expect(calculate(1, 2, '^')).toBe(2);
  });

  test('It must be an error - invalid input', () => {
    expect(calculate('abc', 2, '+')).toBe('Error');
    expect(calculate(3, null, '-')).toBe('Error');
    expect(calculate(undefined, 5, '×')).toBe('Error');
  });
});
