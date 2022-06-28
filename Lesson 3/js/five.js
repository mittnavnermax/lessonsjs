function getPositiveInt(type,nOrM) {
    let numberCheck = Number(prompt(`Enter the amount of ${type} of the array (${nOrM})`));
    incorrectData = Number.isInteger(numberCheck) === false || isNaN(numberCheck) || numberCheck <= 0;

    while (incorrectData) {
        alert('This is not a positive integer, enter positive integers only!');
        numberCheck = Number(prompt(`Enter the amount of ${type} of the array (${nOrM})`));
        incorrectData = Number.isInteger(numberCheck) === false || isNaN(numberCheck) || numberCheck <= 0;
    }

    return numberCheck;
}

columnAmount = getPositiveInt('columns', 'N');
rowAmount = getPositiveInt('rows', 'M');


function randomInt() {
    let minusOrPlus = Math.random() < 0.5 ? -1 : 1;
    let randomMultiplier = Math.floor(Math.random() * 100);

    return (minusOrPlus * randomMultiplier);
}

let randomArray = [];

for (let i=0; i<rowAmount; i++) {
    randomArray [i] = [];
    for (let j=0; j<columnAmount; j++) {
        randomArray[i][j] = randomInt();

    }
}


let displayArray = 'This is your array:'

for (let i=0; i<rowAmount; i++) {
    displayArray += String('\n| ');
    for (let j=0; j<columnAmount; j++) {
        displayArray += String(randomArray[i][j]);
        displayArray += (' ');
        if (j === (columnAmount-1)){
            displayArray += ('|');
        }
    }
}



function getNumber() {
    let numberCheck = prompt(`Enter the divider (K)`);
    let notNumber = isNaN(numberCheck) || numberCheck == null || numberCheck == undefined || numberCheck === false;

    while (notNumber) {
        alert('This is not a number, enter numbers only!');
        numberCheck = prompt(`Enter the divider (K)`);
        notNumber = isNaN(numberCheck) || numberCheck == null || numberCheck == undefined || numberCheck === false;
    }

    return Number(numberCheck);
}

let divider = getNumber();

let displayMultiple = '';


for (let i=0; i<rowAmount; i++) {
    for (let j=0; j<columnAmount; j++) {
        if (randomArray[i][j] % divider === 0) {
            displayMultiple += (randomArray[i][j]);
            displayMultiple += ' ';
            
        }
    }
}

displayMultiple = displayMultiple.split(' ');
displayMultiple.pop();

//як я зрозумів, тут створюється масив через спред, потім об'єкт Set, який приймає тільки унікальні значення з displayMultiple, правильно?
displayMultiple = [...new Set(displayMultiple)]; 

alert (`${displayArray}\n Multiples for ${divider}:\n ${displayMultiple}`);


