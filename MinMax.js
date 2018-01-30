function maximum(arr) {//This return the maximum value from an array
    var maxVal = arr.reduce(function (x, y) {
        return Math.max(x, y);
    });
    return maxVal;
};

function minimum(arr) {//This will return the minimum value from an array
    var minVal = arr.reduce(function (x, y) {
        return Math.min(x, y);
    });
    return minVal;
};