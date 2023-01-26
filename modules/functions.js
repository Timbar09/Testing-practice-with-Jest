const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('Out of range');
  }

  return string.length;
};

const reverseString = (string) => {
  return string.trim().split('').reverse().join('');
};

module.exports = { stringLength, reverseString };
