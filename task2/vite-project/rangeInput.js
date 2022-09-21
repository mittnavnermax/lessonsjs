const rangeAmount = document.getElementById("range-amount");
const inputAmount = document.getElementById("input-amount");
const rangeMonth = document.getElementById("range-months");
const inputMonth = document.getElementById("input-months");
let amountBoxes = document.querySelectorAll(".result__summ");

function changeMonthAmount() {

    rangeMonth.addEventListener('input',() => {
        inputMonth.value = Number(rangeMonth.value);
        calculateAmount()
    })

    inputMonth.addEventListener('input',() => {
        rangeMonth.value = Number(inputMonth.value);
        calculateAmount()
    })

    
}

function changeLoanAmount() {

    

    rangeAmount.addEventListener('input',() => {
        inputAmount.value = Number(rangeAmount.value);
        calculateAmount()
    })

    inputAmount.addEventListener('input',() => {
        rangeAmount.value = Number(inputAmount.value);
        calculateAmount()
    })

    
}

function calculateAmount() {
    amountBoxes.forEach(el => {
        el.innerHTML = (Number(inputAmount.value) / Number(inputMonth.value)).toFixed(2)

    })

}

changeLoanAmount();
changeMonthAmount();

