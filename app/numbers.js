exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var result = num.toString(bit);
    console.log(num, result);
    return result;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },


  convertToBinary: function(n) {
      if (n < 0 || n > 255 || n % 1 !== 0) {
        throw new Error(n + " does not fit in a byte");
      }
      return ("000000000" + n.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
    var c = a * b;
    return Number(c.toFixed(1));
  }
};
