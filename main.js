var arr = [1, 2, 3, 4, 5, 6];
var arr2 = [7, 8, 9, 10, 11, 12];

var newArr = combineAndCut(arr, arr2);

var anotherArr = getEvens(newArr);

var thirdArr = double(anotherArr);

var maximum = maximum(thirdArr);//This will get the maximum function in the array thirdArr

var minimum = minimum(thirdArr);//This will get the minimum function in the array thirdArr

console.log(maximum);
console.log(minimum);
