exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var finFound = -1;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        finFound = i;
      }
    }
    return finFound;

  },

  sum : function(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++){
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    var finArr = [];
    for(var i = 0; i < arr.length; i++){
      if(!(arr[i] === item)){
        finArr.push(arr[i]);
      }
    }
    return finArr;
  },

  removeWithoutCopy : function(arr, item) {
    var finLength = arr.length;

    for(var i = 0; i < finLength; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        finLength--;
        i = i - 1;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    arr1 = arr1.concat(arr2);
    return arr1;
  },

  insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count : function(arr, item) {
    var counter = 0;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        counter++;
      }
    }
    return counter;
  },

  duplicates : function(arr) {
    var holder = [];
    arr.sort();
    for(var i = 0; i < arr.length; i++){
      if(arr[i] ===arr[i + 1] && holder.indexOf(arr[i]) === -1){
        holder.push(arr[i]);
      }
    }
    return holder;
  },

  square : function(arr) {
    for(var i = 0; i < arr.length; i++){
      arr[i] = arr[i] * arr[i];
    }

    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var finArr = [];
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === target){
        finArr.push(i);
      }
    }
    return finArr;
  }
};
