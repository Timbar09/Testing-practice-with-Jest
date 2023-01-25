const stringLength = (string) => {
  return string.length < 1 ? 'error' : string.length > 10 ? 'error' : string.length;
};

const reverseString = (string) => {
  return string.trim().split('').reverse().join('');
};

module.exports = { stringLength, reverseString };
