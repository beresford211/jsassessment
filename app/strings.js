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
    console.log("cols", cols, "OISDFSD", str);
    var finalStr = "";
    var counter = 0;
    for(var i = 0; i < str.length; i++){
      if(counter === 5){
          finalStr += str[i];
          finalStr += "\n";
          counter = 1;
      } else if(str[i] != " "){
        finalStr += str[i];
        counter++;
      }
    }
    return finalStr;
  },

  reverseString: function(str) {
    var finalStr = "";
      for(var i = str.length - 1; i >= 0; i--){
        finalStr += str[i];
      }
    return finalStr;
  }
};
