let summed = 0

function sum (num) {

    function sumPlus() {
        summed += num;
        return summed;
    }

    return sumPlus();
}

console.log(sum(3));
console.log(sum(4));
console.log(sum(5));