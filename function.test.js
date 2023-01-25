const stringLength = (string) => {
  return string.length < 1 ? 'error' : string.length > 10 ? 'error' : string.length;
};

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

const reverseString = (string) => {
  return string.trim().split('').reverse().join('');
};

it('Returns a revesed string that is not equal to the original', () => {
  const str = 'Awesome';

  const reversedStr = reverseString(str);

  expect(reversedStr).not.toBe(str);
});
