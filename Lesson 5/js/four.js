function doFunction (num1, num2, func) {
    return func(num1,num2);
}

function quotient (num1,num2) {
   return Math.floor(num1/num2);
}

variable = doFunction(7,2,quotient);

console.log(variable);