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
});
