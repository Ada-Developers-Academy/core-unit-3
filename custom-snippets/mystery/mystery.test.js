const mystery = require('./mystery');

describe('mystery', () => {

  test('mystery is defined', () => {
    expect(mystery).toBeDefined();
  });

  test('returns true when entire english alphabet is present in lowercase', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const result = mystery(alphabet);
    expect(result).toBeTruthy();
  });

  test('returns false when one letter from the alphabet is missing', () => {
    const alphabetWithMissingX = 'abcdefghijklmnopqrstuvwyz';
    const result = mystery(alphabetWithMissingX);
    expect(result).toBeFalsy();
  });

  test('returns true when all letters of the alphabet are present, even with spaces and repetition', () => {
    const text = 'the quick brown fox jumps over the lazy dog';
    const result = mystery(text);
    expect(result).toBeTruthy();
  });

  test('returns false with empty input string', () => {
    expect(mystery('')).toBeFalsy();
  });

  test('returns true when all letters of the alphabet are present, even with symbols and numbers', () => {
    const text = 'the 1 /quick brown fox/ jumps over the _lazy dog_!';
    expect(mystery(text)).toBeTruthy();
  });
});

