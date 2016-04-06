exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);

  },

  speak : function(fn, obj) {
    var speaker = fn.bind(obj);
    return speaker();
  },


  functionFunction : function(str) {
    return function(strTwo){
      return str + ", " + strTwo;
    };
  },

  makeClosures : function(arr, fn) {
    var val = arr;
      return function(){
          return fn(arr);
      };

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
    var func = this, args = [].slice.call(fn);  
    return function(){
      var arg = [].slice.call(arguments);
      return func.apply(this, arg.concat(args));
    }; 
  }
};
