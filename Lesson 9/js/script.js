const [listBox] = document.getElementsByClassName("object__list-item");
let todoList = [];

function addElement (element) {
    let li = document.createElement("li");
    let title = document.createTextNode(element.title);
    let id = element.id;
    let completed = addCheckInput(element, id);
    let buttons = addButtons(id,title,element);
    completed.appendChild(title);
    li.appendChild(completed);
    if (completed.firstElementChild.hasAttribute("checked")) {
        completed.classList.add("checked");

    }
    li.appendChild(buttons);
    li.setAttribute("id",`${id}`);
    listBox.appendChild(li);
    todoList = document.querySelectorAll("li");
    sortTodos();
}

function addCheckInput (element, idOfElement) {
    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    label.appendChild(checkbox);
    checkbox.setAttribute("type","checkbox");
    if (element.completed === true) {
        checkbox.setAttribute("checked","");
    }
    label.firstElementChild.addEventListener("click",(e) => {
        e.preventDefault();
    })
    label.addEventListener("click", async (e) => {
        e.preventDefault();
        element.completed = label.firstElementChild.checked ? false : true
        let obj = {
            userId : element.userId,
            title : element.title,
            completed : element.completed
        }
        await changeTodo(idOfElement,obj);
        label.firstElementChild.toggleAttribute("checked");
        label.classList.toggle("checked");
        sortTodos();
    })
    return label;
}

function addButtons (id, titleOfElement, element) {
    let container = document.createElement("div");
    container.classList.add("button-box");

    let editButton = document.createElement("button");
    editButton.classList.add("button-item");
    editButton.classList.add("edit-button");
    
    editButton.addEventListener("click", function() {
        if (container.lastElementChild.classList.contains("save-button") === false) {
            let saveButton = document.createElement("button");
            saveButton.classList.add("button-item");
            saveButton.classList.add("save-button");
            container.appendChild(saveButton);

            let changeInput = document.createElement("input");
            changeInput.setAttribute("type","text");
            changeInput.value = titleOfElement.nodeValue;
            titleOfElement.replaceWith(changeInput);

            changeInput.addEventListener("click",(e) => {
                e.stopPropagation();

            })

            changeInput.addEventListener("input", () => {
                if (changeInput.value !== titleOfElement.nodeValue) {
                    saveButton.classList.add("save-button--active");

                } else {
                    saveButton.classList.remove("save-button--active");

                }

            })
    
            saveButton.addEventListener("click", async () => {
                try {
                    if (saveButton.classList.contains("save-button--active")) {
                        element.title = changeInput.value;
                        let updatedTodo = {
                            userId : element.userId,
                            title : element.title,
                            completed : element.completed
                        }
                        await changeTodo(id, updatedTodo)
                        saveButton.classList.remove("save-button--active");
                        let newTitle = document.createTextNode(changeInput.value);
                        changeInput.replaceWith(newTitle);
                        titleOfElement = newTitle;
                        saveButton.remove();
                        sortTodos();
                    }


                } catch (e) {
                    console.error(e);
                }
                
            })
        }
    })
    container.appendChild(editButton);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("button-item");
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
        deleteTodo(id);

    })
    container.appendChild(deleteButton);
    return container;
}




const getTodos = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let todos = await response.json();
        for (el of todos) {
            addElement(el);
        }
        sortTodos();
    } catch (e) {
        console.error(e);
    }
}
  
getTodos();

const createButton = document.getElementById("submitButton");

const title = document.getElementById("title");
const userId = document.getElementById("userId");
const completed = document.getElementById("completed");


createButton.addEventListener("click", (event) => {
   
    event.preventDefault();
    let obj = {
        userId : userId.value,
        title : title.value,
        completed : completed.checked
    };

    createTodos(obj);

})

function clearInputs() {
    title.value = '';
    userId.value = '';
    completed.checked = false;

}

const createTodos = async (newTodo) => {
    try {
        body = JSON.stringify(newTodo)
    
        await fetch ("https://jsonplaceholder.typicode.com/todos", {
            method : "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body
    
        })

        addElement(newTodo);
    } catch (e) {
        console.error(e);

    }

}

const deleteTodo = async (idOfDeleted) => {
    try {
        await fetch (`https://jsonplaceholder.typicode.com/todos/${idOfDeleted}`, {
            method: 'DELETE',
            idOfDeleted 
        })

        let todoToBeDeleted = document.getElementById(`${idOfDeleted}`);
        todoToBeDeleted.remove();

    } catch (e) {
        console.error(e);

    }

}

const changeTodo = async (idOfChange,changedTodo) => {
    try {
        body = JSON.stringify(changedTodo)
    
        await fetch (`https://jsonplaceholder.typicode.com/todos/${idOfChange}`, {
            method : "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body
        })

    } catch (e) {
        console.error(e);

    }

}

const select = document.getElementById("sort");

select.addEventListener("change",sortTodos);


function sortTodos() {
    let completedTodos = [];
    let incompletedTodos = [];
    
    todoList.forEach(el => {
        if (el.firstElementChild.firstElementChild.checked) {
            completedTodos.push(el);

        } else {
            incompletedTodos.push(el);

        }
        el.remove();
    })

    if (select.value === 'completed-first') {
        completedTodos.forEach(el => {
            listBox.appendChild(el);
    
        })
        incompletedTodos.forEach(el => {
            listBox.appendChild(el);
    
        })
    } else if (select.value === 'active-first') {
        incompletedTodos.forEach(el => {
            listBox.appendChild(el);
    
        })
        completedTodos.forEach(el => {
            listBox.appendChild(el);
    
        })
    } else {
        todoList.forEach(el => {
            listBox.appendChild(el);

        })

    }


}

const search = document.getElementById("search");
search.addEventListener("keyup", function(ev) {
    let text = ev.target.value;
    let pat = new RegExp(text, 'i');
    for (let i=0; i < todoList.length; i++) {
        var todo = todoList[i];
        if (pat.test(todo.firstElementChild.lastChild.data)) {
          todo.classList.remove("hidden");
        }
        else {
          todo.classList.add("hidden");
        }
    }
});
