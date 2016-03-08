exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    console.log(str, amount);
    var finalStr = "";

    var finalObj = str.split("").reduce(function(prev, current){
        if(prev[current] === undefined){
          prev[current] = 1;
        } else if (prev[current] < amount){
          prev[current]++;
          if(prev[current] === amount){
            
          }
        }
          return prev;
    }, {});
    console.log(finalStr);
    // return Object.keys(finalObj).join("");
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
