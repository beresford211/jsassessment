exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {

  },

  convertToBinary: function(n) {
      if (n < 0 || n > 255 || n % 1 !== 0) {
        throw new Error(n + " does not fit in a byte");
      }
      return ("000000000" + n.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
    return a * b;
  }
};
