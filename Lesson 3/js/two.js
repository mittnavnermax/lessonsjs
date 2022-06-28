function getPositiveInt() {
    let numberCheck = Number(prompt('Enter the size of the array'));
    incorrectInteger = Number.isInteger(numberCheck) === false || isNaN(numberCheck) || numberCheck <= 0;

    while (incorrectInteger) {
        alert('This is not a positive integer, enter positive integers only!');
        numberCheck = Number(prompt('Enter the size of the array'));
        incorrectInteger = Number.isInteger(numberCheck) === false || isNaN(numberCheck) || numberCheck <= 0;
    }

    return numberCheck;
}

let arrayLength = getPositiveInt();


let randomArray = [];

function randomInt() {
    let minusOrPlus = Math.random() < 0.5 ? -1 : 1;
    let randomMultiplier = Math.floor(Math.random() * 1001);

    return (minusOrPlus * randomMultiplier);
}

for (let i = 0; i < arrayLength; i++) {
    randomArray[i] = randomInt();
}

function averageNum () {
    let sum = 0;

    for (i = 0; i < arrayLength; i++) {
        sum += randomArray[i];
    }

    return (sum / arrayLength)
}

alert(`Array: \n ${randomArray} \n Average: \n ${averageNum()}`);

