exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
     var reg = /^\d+$/;
     //works for numbers not strings yet.
     reg.text(str);
  },

  containsRepeatingLetter : function(str) {

  },

  endsWithVowel : function(str) {
    var check = /^.*[aeiou]([^aeiou]|nt)$/;
    reg.text(check);
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
