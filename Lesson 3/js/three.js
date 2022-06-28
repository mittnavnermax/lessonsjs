function getPositiveInt() {
    let numberCheck = Number(prompt('Enter the size of the array'));
    incorrectData = Number.isInteger(numberCheck) === false || isNaN(numberCheck) || numberCheck <= 0;

    while (incorrectData) {
        alert('This is not a positive integer, enter positive integers only!');
        numberCheck = Number(prompt('Enter the size of the array'));
        incorrectData = Number.isInteger(numberCheck) === false || isNaN(numberCheck) || numberCheck <= 0;
    }

    return numberCheck;
}

function getNumber(number) {
    let numberCheck = prompt(`Enter the value of the element number ${number}`);
    let notNumber = isNaN(numberCheck) || numberCheck == null || numberCheck == undefined || numberCheck === false;

    while (notNumber) {
        alert('This is not a number, enter numbers only!');
        numberCheck = prompt(`Enter the value of the element number ${number}`);
        notNumber = isNaN(numberCheck) || numberCheck == null || numberCheck == undefined || numberCheck === false;
    }

    return Number(numberCheck);
}

let arrayLength = getPositiveInt();
let userArray = [];


for (let i = 0; i < arrayLength; i++) {
    userArray[i] = getNumber(i+1);
}

alert(`Your array: \n${userArray}`);

function getMin(array) {
    let minNum = array[0];

    for (i = 0; i < arrayLength; i++) {
        if (minNum > array[i]) {
            minNum = array[i];
        }
    }

    return minNum;
}

function getMax(array) {
    let maxNum = array[0];

    for (i = 0; i < arrayLength; i++) {
        if (maxNum < array[i]) {
            maxNum = array[i];
        }
    }

    return maxNum;
}

let minOfArray = getMin(userArray);
let maxOfArray = getMax(userArray);
let newArray = userArray;

for (i = 0; i < arrayLength; i++) {
    if (minOfArray === userArray[i]){
        newArray[i] = maxOfArray;
    } else if (maxOfArray === userArray[i]){
        newArray[i] = minOfArray;
    }

}

alert (`The minimal value is : ${minOfArray}\nThe maximal value is: ${maxOfArray}\nNew array is: ${newArray}`);