var arr = [1, 2, 3, 4, 5, 6];
var arr2 = [7, 8, 9, 10, 11, 12];

var newArr = combineAndCut(arr, arr2);

var anotherArr = getEvens(newArr);

var thirdArr = double(anotherArr);

var maximum = maximum(thirdArr);//This will get the maximum function in the array thirdArr

var minimum = minimum(thirdArr);//This will get the minimum function in the array thirdArr

function maximum(arr) {//This return the maximum value from an array
    var maxVal = arr.reduce(function (x, y) {
        return Math.max(x, y);
    });
    return maxVal;
};

function minimum(arr) {//This will return the minimum value from an array
    var maxVal = arr.reduce(function (x, y) {
        return Math.min(x, y);
    });
    return minVal;
};

console.log(maximum);
console.log(minimum);
