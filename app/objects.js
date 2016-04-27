exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {

  },

  alterObjects : function(constructor, greeting) {
    console.log(constructor, greeting)
  },

  iterate : function(obj) {
    var finalResult = [].slice.call(arguments, 0);
    var others = [];
    for(var i in finalResult[0]){
      others.push(i + ": " + finalResult[0][i]);
    }
    return others.slice(0, 2);
  }
  
};
