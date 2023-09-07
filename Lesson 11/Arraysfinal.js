const todoList = [{name: "wash dishes", dueDate: "12-09-2023"},
                {name:'go outside', dueDate: "13-09-2023"}];
renderList();

function renderList() {

    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todtodoObject = todoList[i];
        const {name, dueDate} = todtodoObject

        const html =    `
                        <p>${name} ${dueDate}
                            <button onclick="todoList.splice(${i}, 1); renderList();">Delete</button>
                        </p>
                        `;
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todoList').innerHTML = todoListHTML;
}



function addTodo () {
    const inputElem = document.querySelector('.js-todoName');
    const inputValue = inputElem.value;

    const inputDate = document.querySelector('.js-dueDate');
    const dateValue = inputDate.value
    
    todoList.push({name: inputValue, dueDate: dateValue});
    console.log(todoList);

    // this resets the input textbox to an empty string
    inputElem.value = ''

    renderList()
}