let userAge = prompt('Enter your age');

while (isNaN(userAge) || userAge <= 0) {
    alert('Enter a number which represents your real age');
    userAge = prompt('Enter your age');
}

userAge = String(userAge);
userAgeDigits = userAge.length;
userAgeLastDigit = userAge[userAgeDigits -1];

let userAgeTeenCheck = (userAgeLastDigit >= 2 && userAgeLastDigit <= 4 && userAge !=12 && userAge !=13 && userAge !=14);

if (userAgeLastDigit == 1 && userAge != 11) 
    alert('Вам ' + userAge + ' рік.');
else if (userAgeTeenCheck) 
    alert('Вам ' + userAge + ' роки.');
else
    alert('Вам ' + userAge + ' років.');


