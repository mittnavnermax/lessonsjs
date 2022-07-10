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
    } else {
      return x * pow(x, n - 1);
    }
}

let power = curry(pow);
let powered = power(2)(6)

console.log(`Result: ${powered}`);