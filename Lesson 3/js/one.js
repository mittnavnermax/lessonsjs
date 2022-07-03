function getInt(argument) {
    let numberCheck = Number(prompt(`Enter the ${argument} integer`));
    let notInteger = Number.isInteger(numberCheck) === false || isNaN(numberCheck);

    while (notInteger) {
        alert('This is not an integer, enter integers only!');
        numberCheck = Number(prompt(`Enter the ${argument} integer`));
        notInteger = Number.isInteger(numberCheck) === false || isNaN(numberCheck);
    }

    return numberCheck;
}

let xNumber = getInt('X');



let yNumber = getInt('Y');


let numberArray = [];

if (xNumber <= yNumber) {
    for (let i = xNumber; i <= yNumber; i++) {
        numberArray[i-xNumber] = i;
    }

} else {
    for (i = xNumber; i >= yNumber; i--) {
        numberArray[xNumber - i] = i;
    }

}


alert (numberArray);
