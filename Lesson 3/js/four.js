let userArray = [1,2,3,4,5];


function arrayLength (array) {
    let length = 0;

    while (array[length] !== undefined) {
        length++;
    }
    return length;
}


function shift (array) {
    let newArray = [];

    for (let i = 0; i < (arrayLength(array)-1); i++) {
        newArray[i] = array[i+1];
    }
    return newArray;
}

function unshift (array, element) {
    let newArray = [];

    for (let i = 0; i < (arrayLength(array)+1); i++) {

        if (i === 0) {
            newArray[i] = element;
        } else {
            newArray[i] = array[i-1];
        }
    }
    return newArray;
}

function push (array, element) {
    let newArray = [];

    for (let i = 0; i <= (arrayLength(array)); i++) {

        if (i === (arrayLength(array))) {
            newArray[i] = element;
        } else {
            newArray[i] = array[i];
        }
    }
    return newArray;
}

function pop (array) {
    let newArray = [];

    for (let i = 0; i < (arrayLength(array)-1); i++) {
        newArray[i] = array[i];
    }
    return newArray;
}

alert(`Original array: ${userArray}`);
userArray = shift(userArray);
alert(`shift: ${userArray}`);
userArray = unshift(userArray,1);
alert(`unshift (1): ${userArray}`);
userArray = push(userArray,6);
alert(`push (6): ${userArray}`);
userArray = pop(userArray);
alert(`pop: ${userArray}`);

