let array1 = ["0","8"];

let array2 = ["0","8"];

let array3 = ["0","8"];

let array4 = ["4","7","8"];


let possibleCodes = array3.flatMap(el3 => array4.map(el4 => el3 + el4));

let possibleCodesThreeDigit = array2.flatMap(el2 => possibleCodes.map(el3and4 => el2 + el3and4));

let possibleCodesFourDigit = array1.flatMap(el1 => possibleCodesThreeDigit.map(el23and4 => el1 + el23and4));

console.log(possibleCodes);

console.log(possibleCodesThreeDigit);

console.log(possibleCodesFourDigit);