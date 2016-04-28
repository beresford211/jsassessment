exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
     var regex = /[0-9]/;
     return regex.test(str);
  },

  containsRepeatingLetter : function(str) {
    
  },

  endsWithVowel : function(str) {

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
