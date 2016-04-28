exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    
  },

  manipulateRemoteData : function(url) {
    var data = require(url); 
    console.log(data);

  }
};
