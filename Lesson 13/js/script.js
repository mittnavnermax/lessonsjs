function* numberGuess(number) {
    while (true) {
        let userGuess = yield ("Введіть число:");
        if (number < userGuess) yield (`Менше, ніж ${userGuess}`);
        if (number > userGuess) yield (`Більше, ніж ${userGuess}`);
        if (number === userGuess) return (`Ви вгадали, це ${userGuess}`);
    }
}

const iterator = numberGuess(Number(prompt("Введіть початкове число:")));

let result;

do {
    result = iterator.next();

    if (result.value === "Введіть число:") {
        const userNum = Number(prompt("Введіть число:"));
        result = iterator.next(userNum);
        alert(result.value);

    }

} while (!result.done)

