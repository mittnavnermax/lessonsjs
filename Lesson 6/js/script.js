const userInput = document.getElementById("node-input");
let userData;
let foundElement;
let allElements = document.getElementsByTagName("*");

function removeBorder() {
    for (element of allElements) {
        element.classList.remove("active");
    }

}

userInput.oninput = function () {
    removeBorder();
    userData = userInput.value;
    foundElement = document.querySelectorAll(userData);
    foundElement[0].classList.add("active");
    i = 0;
    if (foundElement.length > 1) {
        nextButton.removeAttribute("disabled");
    }
    if (foundElement[0].parentNode && userData !== "html") {
        parentButton.removeAttribute("disabled");
    }
    if (foundElement[i].firstElementChild !== null) {
        firstChildButton.removeAttribute("disabled");
    }
    if (foundElement[i].lastElementChild !== null) {
        lastChildButton.removeAttribute("disabled");
    }
}


function clearInput() {
    removeBorder();
    userInput.value = '';
    disableAllButtons();
    i = 0;
}


const nextButton = document.getElementById("button-next");

let i = 0;

nextButton.onclick = function () {
    previousButton.removeAttribute("disabled");
    if (i !== (foundElement.length - 1)) {
        removeBorder();
        i++;
        foundElement[i].classList.add("active");
        if (i === (foundElement.length - 1)) {
            nextButton.setAttribute("disabled", "");
        }
    } 

}

const previousButton = document.getElementById("previous-button");

previousButton.onclick = function () {
    nextButton.removeAttribute("disabled");
    if (i > 0) {
        removeBorder();
        i--;
        foundElement[i].classList.add("active");
        if (i === 0) {
            previousButton.setAttribute("disabled", "");
        }
    } else {
        previousButton.setAttribute("disabled", "");

    }

}

const parentButton = document.getElementById("parent-button");

parentButton.onclick = function () {
    let parent = foundElement[i].parentNode;
    removeBorder();
    parent.classList.add("active");
    disableAllButtons();
    
}

const firstChildButton = document.getElementById("first-child-button");

firstChildButton.onclick = function () {
    let firstChild = foundElement[i].firstElementChild;
    removeBorder();
    firstChild.classList.add("active");
    disableAllButtons();

    
}

const lastChildButton = document.getElementById("last-child-button");

lastChildButton.onclick = function () {
    let lastChild = foundElement[i].lastElementChild;
    removeBorder();
    lastChild.classList.add("active");
    disableAllButtons();
    
}

function disableAllButtons () {
    previousButton.setAttribute("disabled", "");
    nextButton.setAttribute("disabled", "");
    parentButton.setAttribute("disabled", "");
    firstChildButton.setAttribute("disabled", "");
    lastChildButton.setAttribute("disabled", "");
}