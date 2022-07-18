function curry(f) {
    return function(x) {
        return function(n) {
            return f(x, n);
        };
    };
}

function pow(x, n) {
    if (n == 1) {
      return x;
    } else if (n < 0) {
      return 1 / pow(x, -n);
    } else {
      return x * pow(x, n - 1);
    }
}


let power = curry(pow);
<<<<<<< HEAD
let powered = power(2)(6);
=======
let powered = power(50)(-1);
>>>>>>> development

console.log(`Result: ${powered}`);