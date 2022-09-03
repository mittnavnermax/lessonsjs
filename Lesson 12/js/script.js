const userInput = $('#node-input');
let foundElement;
let allElements = $("*");

function removeBorder() {
    for (element of allElements) {
        $(element).removeClass("active");
    }

}

function findElement () {
    $(foundElement).addClass("active");
    if ($(foundElement).next().length !== 0) {
        $(nextButton).removeAttr("disabled");
    } else {
        $(nextButton).attr("disabled"); 
    }
    if ($(foundElement).prev().length !== 0) {
        $(previousButton).removeAttr("disabled");
    } else {
        $(previousButton).attr("disabled"); 
    }
    if ($(foundElement).parent()) {
        $(parentButton).removeAttr("disabled");
    } 
    if ($(foundElement).children().first().length !== 0) {
        $(firstChildButton).removeAttr("disabled");
    } else {
        $(firstChildButton).attr("disabled");
    }
    if ($(foundElement).children().last().length !== 0) {
        $(lastChildButton).removeAttr("disabled");
    } else {
        $(lastChildButton).attr("disabled");
    }

}

$(userInput).on('input', function() {
    disableAllButtons();
    removeBorder();
    [foundElement] = $(userInput.val());
    findElement();
})


function clearInput() {
    removeBorder();
    userInput.val('');
    disableAllButtons();
}


const nextButton = $('#button-next');
const previousButton = $('#previous-button');


$(nextButton).on('click', nextOrPrev);
$(previousButton).on('click', nextOrPrev);
    

function nextOrPrev () {
    removeBorder();
    if (this === nextButton[0]) {
        $(previousButton).removeAttr("disabled");
        foundElement = $(foundElement).next();
        findElement();
        if ($(foundElement).next().length === 0) {
            $(this).attr("disabled" ,""); 
        }
    } else {
        $(nextButton).removeAttr("disabled");
        foundElement = $(foundElement).prev();
        findElement();
        if ($(foundElement).prev().length === 0) {
            $(this).attr("disabled" ,""); 
        }
    }
}

const parentButton = $("#parent-button");

$(parentButton).on('click', function () {
    removeBorder();
    foundElement = $(foundElement).parent();
    findElement();
    const [html] = $("html");
    if ($(foundElement).parent()[0] === html) {
        $(parentButton).attr("disabled" ,""); 
    }
    
})

const firstChildButton = $("#first-child-button");
const lastChildButton = $("#last-child-button");

function firstOrLastChild () {

    removeBorder();
    if (this === firstChildButton[0]) {
        foundElement = $(foundElement).children().first();
        findElement();
        
    } else {
        foundElement = $(foundElement).children().last();
        findElement();
    }
    if ($(foundElement).children().first().length === 0) {
        $(firstChildButton).attr("disabled" ,""); 
        $(lastChildButton).attr("disabled" ,"");
    }


}

$(firstChildButton).on ('click', firstOrLastChild);
$(lastChildButton).on ('click', firstOrLastChild);


function disableAllButtons () {
    $(previousButton).attr("disabled", "");
    $(nextButton).attr("disabled", "");
    $(parentButton).attr("disabled", "");
    $(firstChildButton).attr("disabled", "");
    $(lastChildButton).attr("disabled", "");
}


