import displayData from "../request.js";

async function init(){
    const amountInput = document.getElementById('amount-input');
    const select = document.getElementById('select');
    const selectEnd = document.getElementById('select-end');
    const resultView = document.getElementById('result');
    const form = document.querySelector('form');
    const result = await displayData();

    let selectOptions = [];

    function createOptions(arr, sel, plusIndex){
        for(let i = 0; i < arr.length; i++){
            let optItem = document.createElement('option');
            optItem.value = arr[i];
            optItem.innerHTML = arr[i];
            optItem.dataset.buy = result[i].buy;
            optItem.dataset.value = arr[i + plusIndex];   
            sel.appendChild(optItem);
        }
    }

    result.forEach((e) => {
        selectOptions.push(e.ccy);
    });
    createOptions(selectOptions, select, 0);
    createOptions(selectOptions, selectEnd, 1);

};
init();