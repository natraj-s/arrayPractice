var double = function(originalArr) {
    var tempArr = originalArr;

    for(var i = 0; i < tempArr.length; i++) {
        tempArr[i] = tempArr[i] * 2;
    }

    return tempArr;
}