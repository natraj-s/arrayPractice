var getEvens = function(array) {
  var newArray = array.filter(function(num) {
    return num % 2 === 0;
  });
  return newArray;
};

