
const phoneNumber = document.getElementById("number");
const limitButton = document.getElementById("limit-button");


function getLoanLimit (number) {

    let amount = number.replace(/\D/g, "").slice(0,6);
    
    return amount;
}

limitButton.addEventListener('click',() => {
    let loanAmount = getLoanLimit(phoneNumber.value)
    if (limitButton.parentElement.lastElementChild === limitButton) {
        limitButton.parentElement.innerHTML += 
        `<p class="counter__amount"> Ліміт кредиту:</p>
        <p class="counter__amount"> ${loanAmount} грн</p>`
        
    }
    const rangeAmount = document.getElementById("range-amount");
    const inputAmount = document.getElementById("input-amount");

    rangeAmount.setAttribute("max",loanAmount);
    inputAmount.setAttribute("max",loanAmount);

})
