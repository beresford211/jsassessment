exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {

  },

  alterObjects : function(constructor, greeting) {
   var final = new constructor();


  },

  iterate : function(obj) {
    for(var i in obj){
      console.log(obj[i]);
    }
  }
  
};
