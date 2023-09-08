const todoList = [{name: "wash dishes", dueDate: "12-09-2023"},
                {name:'go outside', dueDate: "13-09-2023"}];
renderList();

function renderList() {

    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todtodoObject = todoList[i];
        const {name, dueDate} = todtodoObject

        const html =    `
<div>${name}</div>
<div>${dueDate}</div>
<button class="js-delete-button">Delete</button>
                        `;
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todoList').innerHTML = todoListHTML;
}


    document.querySelector ('.js-add-todo-button').addEventListener('click', () => {
    addTodo();

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1); renderList();
        });
    });

});


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


const array1 = [1,2,3];

// .slice creates a copy of an existing array, instead of simply making the new variable a reference to the old array.
const array2 = array1.slice();
array2.push(30)
console.log(array1);

// This is a way to assign values in arrays to variables
const [firstvalue, secondvalue] = [90, 30, 40];

console.log(secondvalue);



for (let i = 0; i <= 10; i++) {
    if (i % 3 == 0) {
        // Continue skips a step of the iteration
        continue;
    } console.log(i)
    if (i === 8) {
        // Break stops the iteration early
        break;
    }
}


let i = 1;

while (i <= 10) {
    if (i % 3 === 0) {
        // in a while loop, always do the increment step manually
        i++;
        continue;
    } console.log(i);
    i++
}



const numsDoubled = [];

function doubleArray (nums) {
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === 14) {
            return numsDoubled
        }
        numsDoubled.push (num * 2);
    } return numsDoubled;
}

console.log(doubleArray([2,4,6, 6, 8, 40, 14, 5, 30]));