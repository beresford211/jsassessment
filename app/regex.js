exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
     var regex = /[0-9]/;
     return regex.test(str);
  },

  containsRepeatingLetter : function(str) {
      // console.log(str)
  },

  endsWithVowel : function(str) {
    var check = /^.*[aeiou]([^aeiou]|nt)$/;
    return check.test(reg);
  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },

  isUSD : function(str) {
    var r = /^\$?[0-9]+(\.[0-9][0-9])?$/;
    return r.test(str);
  }
};
