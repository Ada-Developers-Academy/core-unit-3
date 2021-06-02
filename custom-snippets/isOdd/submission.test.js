const isOdd = require('./submission');

describe('isOdd', () => {

  test('returns true for positive odd numbers', () => {
    expect(isOdd(1)).toBeTruthy();
    expect(isOdd(3)).toBeTruthy();
    expect(isOdd(5)).toBeTruthy();
    expect(isOdd(999)).toBeTruthy();
  });

  test('returns false for positive even numbers', () => {
    expect(isOdd(2)).toBeFalsy();
    expect(isOdd(4)).toBeFalsy();
    expect(isOdd(6)).toBeFalsy();
    expect(isOdd(1000)).toBeFalsy();
  });

  test('returns true for negative odd numbers', () => {
    expect(isOdd(-1)).toBeTruthy();
    expect(isOdd(-3)).toBeTruthy();
    expect(isOdd(-5)).toBeTruthy();
    expect(isOdd(-999)).toBeTruthy();
  });

  test('returns false for negative even numbers', () => {
    expect(isOdd(-2)).toBeFalsy();
    expect(isOdd(-4)).toBeFalsy();
    expect(isOdd(-6)).toBeFalsy();
    expect(isOdd(-1000)).toBeFalsy();
  });

});

