const userInput = document.getElementById("node-input");
let foundElement;
let allElements = document.getElementsByTagName("*");

function removeBorder() {
    for (element of allElements) {
        element.classList.remove("active");
    }

}

function findElement () {
    foundElement.classList.add("active");
    if (foundElement.nextElementSibling !== null) {
        nextButton.removeAttribute("disabled");
    } else {
        nextButton.setAttribute("disabled" ,""); 
    }
    if (foundElement.previousElementSibling !== null) {
        previousButton.removeAttribute("disabled");
    } else {
        previousButton.setAttribute("disabled" ,""); 
    }
    if (foundElement.parentNode) {
        parentButton.removeAttribute("disabled");
    } 
    if (foundElement.firstElementChild !== null) {
        firstChildButton.removeAttribute("disabled");
    } else {
        firstChildButton.setAttribute("disabled" ,"");
    }
    if (foundElement.lastElementChild !== null) {
        lastChildButton.removeAttribute("disabled");
    } else {
        lastChildButton.setAttribute("disabled" ,"");
    }

}

userInput.oninput = function () {
    disableAllButtons();
    removeBorder();
    foundElement = document.querySelectorAll(userInput.value)[0];
    findElement();
}


function clearInput() {
    removeBorder();
    userInput.value = '';
    disableAllButtons();
}


const nextButton = document.getElementById("button-next");


nextButton.onclick = function () {
    previousButton.removeAttribute("disabled");
    removeBorder();
    foundElement = foundElement.nextElementSibling;
    findElement();
    if (foundElement.nextElementSibling === null) {
        nextButton.setAttribute("disabled" ,""); 
    }
}

const previousButton = document.getElementById("previous-button");

previousButton.onclick = function () {
    nextButton.removeAttribute("disabled");
    removeBorder();
    foundElement = foundElement.previousElementSibling;
    findElement();
    if (foundElement.previousElementSibling === null) {
        previousButton.setAttribute("disabled" ,""); 
    }

}

const parentButton = document.getElementById("parent-button");

parentButton.onclick = function () {
    removeBorder();
    foundElement = foundElement.parentElement;
    findElement();
    const html = document.getElementsByTagName("html")[0];
    if (foundElement.parentElement === html) {
        parentButton.setAttribute("disabled" ,""); 
    }
    
}

const firstChildButton = document.getElementById("first-child-button");

firstChildButton.onclick = function () {
    removeBorder();
    foundElement = foundElement.firstElementChild;
    findElement();
    if (foundElement.firstElementChild === null) {
        firstChildButton.setAttribute("disabled" ,""); 
        lastChildButton.setAttribute("disabled" ,"");
    }
    
}

const lastChildButton = document.getElementById("last-child-button");

lastChildButton.onclick = function () {
    removeBorder();
    foundElement = foundElement.lastElementChild;
    findElement();
    if (foundElement.lastElementChild === null) {
        lastChildButton.setAttribute("disabled" ,"");
        firstChildButton.setAttribute("disabled" ,"");
    }
}

function disableAllButtons () {
    previousButton.setAttribute("disabled", "");
    nextButton.setAttribute("disabled", "");
    parentButton.setAttribute("disabled", "");
    firstChildButton.setAttribute("disabled", "");
    lastChildButton.setAttribute("disabled", "");
}