import { changeSign } from '../handlers/handleFunction.js';

describe('changeSign()', () => {
  test('changeSign(1) = -1', () => {
    expect(Math.round(changeSign(1))).toBe(-1);
  });

  test('changeSign(-5) = 5', () => {
    expect(changeSign(-5)).toBe(5);
  });
});
