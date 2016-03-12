exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var finalStr = "";
    var current;
    var temp;

    for(var i = 0; i < str.length; i++){
       if(str[i] !== str[i - 1]){
        temp = str[i];
        finalStr += str[i];
        current = 1;
      } else if (str[i] === temp){
        if(current < amount){
          finalStr += str[i];
          current++;
        }
      }
    }

    return finalStr;

  },
  
  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    var finalStr = "";

    for(var i = str.length - 1; i >= 0; i--){
      finalStr += str[i];
    }

    return finalStr;
  }
};
