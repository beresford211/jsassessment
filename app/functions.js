exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {

  },

  speak : function(fn, obj) {

  },

  functionFunction : function(str) {
    return function(strTwo){
      return str + ", " + strTwo;
    };
  },

  makeClosures : function(arr, fn) {
      return fn(arr);
  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

  },

  callIt : function(fn) {
    fn.call(this, arguments);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
