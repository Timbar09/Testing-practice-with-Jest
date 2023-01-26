const { stringLength, reverseString } = require('./modules/functions');
const calculator = require('./modules/calculator');

// Tests for stringLength function
it('Returns the length of the string Micronaut', () => {
  const str = 'Micronaut';

  const length = stringLength(str);

  expect(length).toBe(9);
});

it('Throws an error if string length is greater than 10', () => {
  const str = 'Micronautist';

  expect(() => {
    stringLength(str);
  }).toThrow();
});

it('Throws an error if string length is less than 1', () => {
  const str = '';

  expect(() => {
    stringLength(str);
  }).toThrow();
});

// Test for reverseString function
it('Returns a revesed string that is not equal to the original', () => {
  const str = 'Awesome';

  const reversedStr = reverseString(str);

  expect(reversedStr).not.toBe(str);
});

// Tests for calculator methods
describe('calculations', () => {
  // Add method tests
  test('is 2 plus 3 equal to 5', () => {
    const args = [2, 3];

    const result = calculator.add(...args);

    expect(result).toBe(5);
  });

  test('Throw error if both arguments are not numbers', () => {
    const args = ['2', '3'];

    expect(() => {
      calculator.add(...args);
    }).toThrow();
  });

  test('is the returned value a number', () => {
    const args = [7, 11];

    const result = calculator.add(...args);
    const resultDataType = typeof result;

    expect(resultDataType).toBe('number');
  });
});
