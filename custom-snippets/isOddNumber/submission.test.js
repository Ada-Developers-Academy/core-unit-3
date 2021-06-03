const isOddNumber = require('./submission');

describe('isOddNumber', () => {

  test('returns true for positive odd numbers', () => {
    expect(isOddNumber(1)).toBeTruthy();
    expect(isOddNumber(3)).toBeTruthy();
    expect(isOddNumber(5)).toBeTruthy();
    expect(isOddNumber(999)).toBeTruthy();
  });

  test('returns false for positive even numbers', () => {
    expect(isOddNumber(2)).toBeFalsy();
    expect(isOddNumber(4)).toBeFalsy();
    expect(isOddNumber(6)).toBeFalsy();
    expect(isOddNumber(1000)).toBeFalsy();
  });

  test('returns true for negative odd numbers', () => {
    expect(isOddNumber(-1)).toBeTruthy();
    expect(isOddNumber(-3)).toBeTruthy();
    expect(isOddNumber(-5)).toBeTruthy();
    expect(isOddNumber(-999)).toBeTruthy();
  });

  test('returns false for negative even numbers', () => {
    expect(isOddNumber(-2)).toBeFalsy();
    expect(isOddNumber(-4)).toBeFalsy();
    expect(isOddNumber(-6)).toBeFalsy();
    expect(isOddNumber(-1000)).toBeFalsy();
  });

  test('returns a falsy value for non-numbers', () => {
    expect(isOddNumber('hello')).toBeFalsy();
    expect(isOddNumber([])).toBeFalsy();
    expect(isOddNumber({})).toBeFalsy();
  });

});

