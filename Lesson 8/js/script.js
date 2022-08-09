let xhr = new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com/posts");

xhr.responseType = "json";

xhr.send();

const listBox = document.getElementsByClassName("object__list-item")[0];

function addElement (element) {
    let li = document.createElement("li");
        let userId = document.createTextNode(`userId: ${element.userId}\n`);
        let id = document.createTextNode(`id: ${element.id}\n`);
        let title = document.createTextNode(`title: ${element.title}\n`);
        let body = document.createTextNode(`body: ${element.body}\n`);
        li.appendChild(userId);
        li.appendChild(id);
        li.appendChild(title);
        li.appendChild(body);
        listBox.appendChild(li);

}

xhr.onload = function() {
    let responseObj = xhr.response;

    for (el of responseObj) {
        addElement(el);
    }
};

const submitButton = document.getElementById("submitButton");

const title = document.getElementById("title");
const body = document.getElementById("body");
const userId = document.getElementById("userId");


submitButton.addEventListener("click",function (event) {

    event.preventDefault();
    let json = JSON.stringify({
        userId : userId.value,
        title : title.value,
        body : body.value
    });
    
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.send(json);

    xhr.onload = function() {
        addElement(xhr.response);
        title.value = '';
        body.value = '';
        userId.value = '';
    };

})