exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    // console.log(data, dirName);

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    var innerFunc = function(x){
      return x < 2 ? x : innerFunc(x-1) + innerFunc(x-2);
    };
    return innerFunc(n);
  },

  validParentheses: function(n) {
    
  }
};
