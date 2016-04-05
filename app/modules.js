exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    var greeting = str1;
    var name = str2;
    
    var sayIt = function(){
      return greeting + ", " + name; 
    };

    return {
      sayIt: sayIt,
      name: name,
      greeting: greeting
    };
  }
};
