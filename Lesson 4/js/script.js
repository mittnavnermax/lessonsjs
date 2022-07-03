let codeLength = 0;

const observedCode = getCorrectCode();

const possibleCodes = getCodes(observedCode);

console.log(possibleCodes);

alert(possibleCodes);

function getCorrectCode() {
    let numberCheck = prompt(`Enter the code, maximum 4 digits long`);
    let notCorrect = /^\d+$/.test(numberCheck) === false || numberCheck.length > 4;

    while (notCorrect) {
        alert('Incorrect code!');
        numberCheck = prompt(`Enter the code, maximum 4 digits long`);
        notCorrect = /^\d+$/.test(numberCheck) === false || numberCheck.length > 4;
    }
    switch (numberCheck.length) {
        case 1:
            numberCheck = '000' + numberCheck;
            codeLength = 1;
            break;
        case 2:
            numberCheck = '00' + numberCheck;
            codeLength = 2;
            break;
        case 3:
            numberCheck = '0' + numberCheck;
            codeLength = 3;
            break;
        default:
            codeLength = 4;
            return numberCheck;

    }

    return numberCheck;
}

function getCodes(code) {

    let array1 = getNearbyNumbers(code,0);

    let array2 = getNearbyNumbers(code,1);

    let array3 = getNearbyNumbers(code,2);

    let array4 = getNearbyNumbers(code,3);


    let possibleCodes = array3.flatMap(el3 => array4.map(el4 => el3 + el4));

    let possibleCodesThreeDigit = array2.flatMap(el2 => possibleCodes.map(el3and4 => el2 + el3and4));

    let possibleCodesFourDigit = array1.flatMap(el1 => possibleCodesThreeDigit.map(el23and4 => el1 + el23and4));

    switch (codeLength){
        case 1:
            return array4;
        case 2:
            return possibleCodes;
        case 3:
            return possibleCodesThreeDigit;
        default:
            return possibleCodesFourDigit;

    }
}



function getNearbyNumbers(code,index) {
    let num = Number(code[index]);

    switch (num){

        case 1:
            return ['1','2','4'];
        case 2:
            return ['1','2','3','5'];
        case 3:
            return ['2','3','6'];
        case 4:
            return ['1','4','5','7'];
        case 5:
            return ['2','4','5','6','8'];
        case 6:
            return ['3','5','6','9'];
        case 7:
            return ['4','7','8'];
        case 8:
            return ['5','7','8','9','0'];
        case 9:
            return ['6','8','9'];
        default:
            return ['0','8'];

    }

}