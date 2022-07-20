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
}

function clearInput() {
    removeBorder();
    userInput.value = '';
    nextButton.setAttribute("disabled", "");
    previousButton.setAttribute("disabled", "");
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
