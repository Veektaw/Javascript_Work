const todoList = [{name: "wash dishes", dueDate: "12-09-2023"},
                {name:'go outside', dueDate: "13-09-2023"}];
renderList();

// It is recommended to use an arrow function when it is called in another function, but use a regular function to start the function
function renderList() {

    let todoListHTML = ''

    todoList.forEach((todtodoObject, index) => {
        const todotodoObject = todoList[index];
        const {name, dueDate} = todtodoObject

        const html =    `
<div>${name}</div>
<div>${dueDate}</div>
/* The splice option here is used to delete a value from an array*/
<button onclick="todoList.splice(${index}, 1); renderList();">Delete</button>
                        `;
        todoListHTML += html;

    console.log(todoListHTML);

    document.querySelector('.js-todoList').innerHTML = todoListHTML;
    });
}



function addTodo () {
    const inputElem = document.querySelector('.js-todoName');
    const inputValue = inputElem.value;

    const inputDate = document.querySelector('.js-dueDate');
    const dateValue = inputDate.value
    
    todoList.push({name: inputValue, dueDate: dateValue});
    console.log(todoList);

    // this resets the input text-box to an empty string
    inputElem.value = ''

    renderList()
}