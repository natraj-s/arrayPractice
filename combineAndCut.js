function combineAndCut(array1, array2){
    newArray = array1.concat(array2);
    newArray.shift();
    newArray.pop();
    return newArray;
}