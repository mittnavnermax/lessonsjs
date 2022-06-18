let ySquare = Number(prompt('Enter the Y axis digit'));

while (isNaN(ySquare) || ySquare < 1 || ySquare > 8) {
    alert('It must only be a number from 1 to 8');
    ySquare = Number(prompt('Enter the Y axis digit'));
}

let xSquare = Number(prompt('Enter the X axis digit'));

while (isNaN(xSquare) || xSquare < 1 || xSquare > 8) {
    alert('It must only be a number from 1 to 8');
    xSquare = Number(prompt('Enter the X axis digit'));
}


alert(`Your knight is on ${ySquare} ${xSquare}`);

let yNextSquare = Number(prompt('Enter the next Y axis digit'));

while (isNaN(yNextSquare) || yNextSquare < 1 || yNextSquare > 8) {
    alert('It must only be a number from 1 to 8');
    yNextSquare = Number(prompt('Enter the next Y axis digit'));
}

let xNextSquare = Number(prompt('Enter the next X axis digit'));

while (isNaN(xNextSquare) || xNextSquare < 1 || xNextSquare > 8) {
    alert('It must only be a number from 1 to 8');
    xNextSquare = Number(prompt('Enter the next X axis digit'));
}

if (xNextSquare == (xSquare + 2) || xNextSquare == (xSquare - 2)) {
    if (yNextSquare == (ySquare + 1) || yNextSquare == (ySquare - 1))
        alert('true');
    else
        alert('false');
}
else
    if (yNextSquare == (ySquare + 2) || yNextSquare == (ySquare - 2)) {
        if (xNextSquare == (xSquare + 1) || xNextSquare == (xSquare - 1))
            alert('true');
        else
            alert('false');
    }
    else
        alert('false');