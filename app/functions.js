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

  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {
    var arr = Array.prototype.slice.call(arguments);
    var startVal = 0;

    for(var i = 0; i < arr.length; i++){
      startVal += arr[i];
    }

    return startVal;
  },

  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

    return fn(); 

  }
};
