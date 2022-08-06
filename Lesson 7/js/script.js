const newCustomerButton = document.getElementById("newCustomer");
const regularCustomerButton = document.getElementById("regularCustomer");

regularCustomerButton.addEventListener("click", userButtonCheck);
newCustomerButton.addEventListener("click", userButtonCheck);

const registeredUserOption = document.getElementsByClassName("form__inputs-registered")[0];
const newUserOption = document.getElementsByClassName("form__inputs")[0];

function userButtonCheck () {
    const isChosen = this.classList.contains("form__buttons-item--active")|| this.classList.contains("form__buttons-item--opened");

    if (isChosen) {
        if (this.classList.contains("form__buttons-item--active")) {
            this.classList.remove("form__buttons-item--active");
            this.classList.add("form__buttons-item--opened")
        } 
    } else {
        if (this === regularCustomerButton) {
            this.classList.add("form__buttons-item--opened");
            newCustomerButton.classList.remove("form__buttons-item--opened","form__buttons-item--active");
            registeredUserOption.classList.add("form__inputs-registered--active");
            newUserOption.classList.remove("form__inputs--active");
        } else {
            this.classList.add("form__buttons-item--opened");
            regularCustomerButton.classList.remove("form__buttons-item--opened","form__buttons-item--active");
            newUserOption.classList.add("form__inputs--active");
            registeredUserOption.classList.remove("form__inputs-registered--active");
        }
    }

}

regularCustomerButton.addEventListener("blur",buttonBlur);
newCustomerButton.addEventListener("blur",buttonBlur);

function buttonBlur() {
    this.classList.remove("form__buttons-item--opened");
    this.classList.add("form__buttons-item--active");
} 

regularCustomerButton.addEventListener("mouseover", buttonHover);
newCustomerButton.addEventListener("mouseover", buttonHover);

function buttonHover() {
    const isChosen = this.classList.contains("form__buttons-item--active")|| this.classList.contains("form__buttons-item--opened");

    if (isChosen === false) {
        this.classList.add("form__buttons-item--hover");

    }
}

regularCustomerButton.addEventListener("mouseout", buttonUnhover);
newCustomerButton.addEventListener("mouseout", buttonUnhover);

function buttonUnhover () {
    this.classList.remove("form__buttons-item--hover");

}

const isCyrillic = /^[\u0400-\u04FF]+$/;
const isPhoneNumber = /^[\+\d]?(?:[\d-.\s()]*)$/;
const isEmail = /\S+@\S+\.\S+/;

const userSurname = document.getElementById("surname");
const userName = document.getElementById("name");
const userPhone = document.getElementById("tel");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");

const inputs = [userSurname,userName,userPhone,userEmail,userPassword];


inputs.forEach(input => {
    input.addEventListener("blur", function () {
        this.parentNode.classList.remove("form__inputs-item--on-focus");
        if (this === userEmail) {
            if (isEmail.test(this.value) !== true) {
                if (isPhoneNumber.test(this.value) !== true) {
                    this.parentNode.classList.add("form__inputs-item--wrong");
                    this.nextElementSibling.classList.add("form__inputs-item-warning--active"); 
                } else {
                    this.parentNode.classList.remove("form__inputs-item--wrong");
                    this.nextElementSibling.classList.remove("form__inputs-item-warning--active");
                }
            } else {
                this.parentNode.classList.remove("form__inputs-item--wrong");
                this.nextElementSibling.classList.remove("form__inputs-item-warning--active");
            }
        } 
        if (this.value === '' || this.value === '+38 ') {
            this.parentNode.classList.add("form__inputs-item--wrong");
            
        } else {
            if (this === userPassword) {
                this.parentNode.classList.remove("form__inputs-item--wrong");
                this.nextElementSibling.classList.remove("form__inputs-item-warning--active");
            }
        }
  
    })
    input.addEventListener("focus", function () {
        this.parentNode.classList.add("form__inputs-item--on-focus");

    })
    input.addEventListener("input", function () {
        switch (this) {
            case userSurname :
                if (isCyrillic.test(this.value) !== true) {
                    this.parentNode.classList.add("form__inputs-item--wrong");
                    this.nextElementSibling.classList.add("form__inputs-item-warning--active");
                } else {
                    this.parentNode.classList.remove("form__inputs-item--wrong");
                    this.nextElementSibling.classList.remove("form__inputs-item-warning--active");
                }
                break;
            case userName :
                if (isCyrillic.test(this.value) !== true) {
                    this.parentNode.classList.add("form__inputs-item--wrong");
                    this.nextElementSibling.classList.add("form__inputs-item-warning--active");
                } else {
                    this.parentNode.classList.remove("form__inputs-item--wrong");
                    this.nextElementSibling.classList.remove("form__inputs-item-warning--active");
                }
                break;
            case userPhone :
                if (isPhoneNumber.test(this.value) !== true) {
                    this.parentNode.classList.add("form__inputs-item--wrong");
                    this.nextElementSibling.classList.add("form__inputs-item-warning--active");
                } else {
                    this.parentNode.classList.remove("form__inputs-item--wrong");
                    this.nextElementSibling.classList.remove("form__inputs-item-warning--active");
                }
                break;
            default:
                break;
        }
    })
})

const list = document.getElementsByClassName("aside__checkout-info-list")[0];


const showPasswordButton = document.getElementsByClassName("form__password-button")[0];

showPasswordButton.addEventListener("mouseover", function () {
    this.classList.add("form__password-button--hover");

})

showPasswordButton.addEventListener("mouseout", function () {
    this.classList.remove("form__password-button--hover");

})

showPasswordButton.addEventListener("click",function () {
    this.firstElementChild.classList.toggle("form__password-eye-button-hidden")
    this.lastElementChild.classList.toggle("form__password-eye-button-hidden")

    if (userPassword.getAttribute("type")==="password") {
        userPassword.setAttribute("type","text");

    } else {
        userPassword.setAttribute("type","password");
    }
})

const socialButtons = document.querySelectorAll(".form__inputs-social-button");

socialButtons.forEach( button => {
    button.addEventListener("mouseover", function () {
        this.classList.add("form__inputs-social-button--hover")

    })
    button.addEventListener("mouseout", function () {
        this.classList.remove("form__inputs-social-button--hover")

    })

})

const loginButton = document.getElementsByClassName("form__log-in-button")[0];

loginButton.addEventListener("mouseover", function () {
    this.classList.add("form__log-in-button--hover");

})

loginButton.addEventListener("mouseout", function () {
    this.classList.remove("form__log-in-button--hover");

})

const windowInputs = document.querySelectorAll(".form__goods-info--delivery .form__options-box");
const deliveryPrice = document.getElementsByClassName("aside__checkout-amount")[1];
const summedPrice = document.getElementsByClassName("aside__checkout-amount")[0];
const totalAmount = document.getElementsByClassName("aside__checkout-total-amount")[0];


windowInputs.forEach(el => {
    el.addEventListener("click",function () {
        closeAllWindows();
        this.classList.add("form__options-box--active");
        this.lastElementChild.classList.add("form__options-info-box--active");

        this.firstElementChild.firstElementChild.setAttribute("checked","");

        deliveryPrice.innerHTML = this.firstElementChild.lastElementChild.lastElementChild.innerHTML;
        totalAmount.innerHTML = Number(summedPrice.innerHTML.replace(/\D/g, "")) + Number(deliveryPrice.innerHTML.replace(/\D/g, ""));
        totalAmount.innerHTML += " ₴"
        totalAmount.innerHTML = totalAmount.innerHTML.slice(0,2) + ' ' + totalAmount.innerHTML.slice(2);
    })
    
});

function closeAllWindows() {
    windowInputs.forEach(el => {
        el.classList.remove("form__options-box--active")
        el.lastElementChild.classList.remove("form__options-info-box--active");
        
        el.firstElementChild.firstElementChild.removeAttribute("checked");
    
    })

}

const rollouts = document.querySelectorAll(".form__rollout-button");

rollouts.forEach(rollout => {
    rollout.addEventListener("click",function() {
        this.lastElementChild.classList.toggle("form__rollout-options--active")

    })
})


const options = document.querySelectorAll(".form__rollout-button li");

options.forEach(option => {
    option.addEventListener("click",function(event) {
        this.parentNode.parentNode.parentNode.firstElementChild.innerHTML = this.innerHTML;
        this.parentNode.parentNode.classList.remove("form__rollout-options--active")
        event.stopPropagation();
    })
})


const timeButtons = document.querySelectorAll(".form__map-dates-item-button");

timeButtons.forEach(button => {
    button.addEventListener("click",function() {
        removeAllActiveButtons();
        this.classList.add("form__map-dates-item-button--active")

    })

})


function removeAllActiveButtons() {
    timeButtons.forEach(button => {
        button.classList.remove("form__map-dates-item-button--active");
    
    })
}

const paymentWindows = document.querySelectorAll(".form__goods-info--payment .form__options-box:not(.form__options-box--hidden)")

paymentWindows.forEach(el => {
    el.addEventListener("click",function () {
        closePaymentWindows();

        if (this === paymentWindows[0]) {
            this.classList.add("form__options-box--noborder");

        } else if (this === paymentWindows[1]) {
            this.classList.add("form__options-box--active");
            this.lastElementChild.classList.remove("form__options-box--hidden");
            this.lastElementChild.previousElementSibling.classList.remove("form__options-box--hidden");

        } else {
            this.classList.add("form__options-box--no-border");
            this.lastElementChild.classList.add("form__payment-info--active");

        }

        this.firstElementChild.firstElementChild.setAttribute("checked","");
    })
    
});

function closePaymentWindows() {
    paymentWindows.forEach(el => {
        el.classList.remove("form__options-box--active");
        el.classList.remove("form__options-box--no-border");
        el.lastElementChild.classList.remove("form__payment-info--active");
        if (el === paymentWindows[1]) {
            el.lastElementChild.classList.add("form__options-box--hidden");
            el.lastElementChild.previousElementSibling.classList.add("form__options-box--hidden");
        }
        el.firstElementChild.firstElementChild.removeAttribute("checked");
    
    })

}


const subOptions = document.querySelectorAll(".form__options-box .form__options-box");

subOptions.forEach(el => {
    el.addEventListener("click",function () {
        if (this === subOptions[1]) {
            subOptions[0].firstElementChild.firstElementChild.removeAttribute("checked");
            subOptions[0].lastElementChild.classList.remove("form__payment-info--sub-active");

            this.lastElementChild.classList.add("form__payment-info--sub-active");

        } else {
            subOptions[1].firstElementChild.firstElementChild.removeAttribute("checked");
            subOptions[1].lastElementChild.classList.remove("form__payment-info--sub-active");

            this.lastElementChild.classList.add("form__payment-info--sub-active");

        }

        this.firstElementChild.firstElementChild.setAttribute("checked","");
    })
    
});

const paymentEmails = document.querySelectorAll(".form__payment-email input");  

paymentEmails.forEach(el => {
    el.addEventListener("input",function() {
        if (isEmail.test(this.value) !== true) {
                this.parentNode.parentNode.classList.add("form__payment-email--wrong");
                if (this.value === '') {
                    this.nextElementSibling.classList.add("form__inputs-item-warning--active");
                }
            } else {
                this.parentNode.parentNode.classList.remove("form__payment-email--wrong");
                this.nextElementSibling.classList.remove("form__inputs-item-warning--active");
            }

    })

})

paymentEmails.forEach(el => {
    el.addEventListener("blur",function() {
        if (this.value === '') {
                this.parentNode.parentNode.classList.add("form__payment-email--wrong");
            } else {
                this.parentNode.parentNode.classList.remove("form__payment-email--wrong");
            }

    })

})

const recepientSurname = document.getElementById("recipient-surname");
const recepientName = document.getElementById("recipient-name");
const recepientPatronic = document.getElementById("recipient-patronic");
const recepientPhone = document.getElementById("recipient-phone");

const recepientInputs = [recepientSurname,recepientName,recepientPatronic,recepientPhone];

const submitbutton = document.getElementById("submit");

function createNewElement(value) {
    let text = document.createTextNode(value);
    let li = document.createElement("li");
    switch (value) {
        case userSurname.value :
            li.innerHTML = "Прізвище: "
            break;
        case userName.value :
            li.innerHTML = "Імʼя: "
            break;
        case userPhone.value :
            li.innerHTML = "Телефон: "
            break;

    }
    li.appendChild(text);
    list.appendChild(li);

}

submitbutton.addEventListener("click",function () {
    createNewElement(userSurname.value);
    createNewElement(userName.value);
    createNewElement(userPhone.value);
})


