const stringLength = (string) => {
  return string.length < 1 ? 'error' : string.length > 10 ? 'error' : string.length;
};

it('Returns the length of the string Micronaut', () => {
  expect(stringLength('Micronaut')).toBe(9);
});

it('Returns an error message if string is greater than 10', () => {
  expect(stringLength('Micronautist')).toBe('error');
});

it('Returns an error message if string is less than 1', () => {
  expect(stringLength('')).toBe('error');
});
