let firstNumber = Number(prompt('Enter the first Number'));

while (isNaN(firstNumber)) {
    alert('Enter numbers only');
    firstNumber = Number(prompt('Enter the first Number'));
}

let secondNumber = Number(prompt('Enter the second Number'));

while (isNaN(secondNumber)) {
    alert('Enter numbers only');
    secondNumber = Number(prompt('Enter the second Number'));
}

let thirdNumber = Number(prompt('Enter the third Number'));

while (isNaN(thirdNumber)) {
    alert('Enter numbers only');
    thirdNumber = Number(prompt('Enter the third Number'));
}

let fourthNumber = Number(prompt('Enter the fouth Number'));

while (isNaN(fourthNumber)) {
    alert('Enter numbers only');
    fourthNumber = Number(prompt('Enter the fouth Number'));
}

let maxNumber = Math.max(firstNumber, secondNumber, thirdNumber, fourthNumber);

let minNumber = Math.min(firstNumber, secondNumber, thirdNumber, fourthNumber);

let product = minNumber * maxNumber;

alert('Outcome: ' + minNumber + " * " + maxNumber + " = " + product);