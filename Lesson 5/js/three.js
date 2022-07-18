function summarize () {
    let summed = 0;

    return function sumPlus(num) {
        summed += num;
        return summed;
    };
}

let sum = summarize();

console.log(sum(3));
console.log(sum(4));
console.log(sum(5));