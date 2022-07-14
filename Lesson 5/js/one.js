function max(array) {

    if (array.length === 1){
        return array[0];
    }

    if (array.length === 2) { 
        return (array[0] > array[1]) ? array[0] : array[1];
    }

    const shortMax = max(array.slice(1));
    return (array[0] > shortMax) ? array[0] : shortMax;

}

maxNum = max([1,2,9,4,5]);
console.log(maxNum);