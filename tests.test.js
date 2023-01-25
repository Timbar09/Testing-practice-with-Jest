const { stringLength, reverseString } = require('./functions');
const calculator = require('./calculator');

// Tests for stringLength function
it('Returns the length of the string Micronaut', () => {
  const str = 'Micronaut';

  const length = stringLength(str);

  expect(length).toBe(9);
});

it('Returns an error message if string is greater than 10', () => {
  const str = 'Micronautist';

  const length = stringLength(str);

  expect(length).toBe('error');
});

it('Returns an error message if string is less than 1', () => {
  const str = '';

  const length = stringLength(str);

  expect(length).toBe('error');
});

// Test for reverseString function
it('Returns a revesed string that is not equal to the original', () => {
  const str = 'Awesome';

  const reversedStr = reverseString(str);

  expect(reversedStr).not.toBe(str);
});
