let userName = String(prompt('Enter your username'));
let userPassword = String(prompt('Enter your password'));
let userLoginData = userName + userPassword;
const correctData = ('adminqWeRty123');

while (userLoginData != correctData) {
    alert ('Wrong login details');
    userName = String(prompt('Enter your username'));
    userPassword = String(prompt('Enter your password'));
    userLoginData = userName + userPassword;
}

alert ('Access gained!');