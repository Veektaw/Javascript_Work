// // const myArray = [10, 20, 30];

// // console.log(myArray);

// // myArray[1] = 'Goat';

// // const secondArray = [60, 40, 90, 55, 'Pig', 'Sheep', {name: 'Tyler', age: 20}, [4, 5]]

// // console.log(secondArray[6]);
// // console.log(secondArray.length);

// // secondArray.push(100);
// // console.log(secondArray);

// // myArray.splice(0, 1);
  





// // let i = 1;


// while (i <= 5) {
//     console.log(i);
//     i++
// }




// // for (let i = 1; i <= 5; i++) {
// //     console.log(i);
// // }


// // let randonNumber = 0;

// // while (randonNumber < 0.5) {
// //     randonNumber = Math.random()
// // }

// // console.log(randonNumber)


// let indexList = ['wash plate', 'watch movies', 'eat berries', 'play games', 'go home']

// for (let i = 0; i < indexList.length; i++) {
//     const value = indexList[i];
//     console.log(value);
// }

// const nums = [1, 1, 2];
// let totalNums = 0;


// // Loop through items in an array, this is how.
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     totalNums += num;
// }

// console.log(totalNums)


// let totalNumsDoubled = [];


// // Loop through items in an array, this is how.
// for (let i = 0; i < nums.length; i++) {
//     const number = nums[i];
//     totalNumsDoubled.push(number * 2);
// }

// console.log(totalNumsDoubled)



const todoList = ['wash plates', 'go outside'];
renderList();

function renderList() {

    let todoListHTML = ''

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todoList').innerHTML = todoListHTML;
}



function addTodo () {
    const inputElem = document.querySelector('.js-todoName');
    const inputValue = inputElem.value;
    
    todoList.push(inputValue);
    console.log(todoList);

    // this resets the input textbox to an empty string
    inputElem.value = ''

    renderList()
}

let myTwo = [1, 3, 10];

myTwo[2] = 99;

console.log(myTwo)



// const takenList = [1, 2, 3, 20, 40, 10, 12, 13];

// function takeLast() {
//     if (takenList.length > 0) {
//         const lastItem = takenList[takenList.length - 1];
//         console.log(lastItem);
//     } else {
//         console.log('The array is empty');
//     }
// }

// takeLast();



const takenList = [1, 2, 3, 20, 40, 10, 12, 13];

function takeLast() {
    if (takenList.length > 0) {
        const lastItem = takenList[takenList.length - 1];

        console.log(lastItem);
    } else {
        console.log('The array is empty');
    }
}

takeLast();



const array = [20,50,40, 30, 70]

function arraySwap() {
    if (array.length < 2) {
        // If the array has 0 or 1 element, there's nothing to swap.
        return array;
    }

    const firstValue = array[0];

    // this is how to get the last value of an array
    const lastValue = array[array.length - 1];

    // Swap the first and last values
    array[0] = lastValue;
    array[array.length - 1] = firstValue;

    console.log(array);
}

arraySwap()


// const testArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function tester () {
//     for (let i = 0; i < testArray.length; i += 2) {
//         console.log(i);
//     }
// }

// tester();



// for (let i = 5; i >= 0; i--) {
//     console.log(i);
//   }


// let i = 5;

// while (i >= 0) {
//     console.log(i);
//     i--
// }


let index = 0;

while (index <= 10) {
  console.log(index);
  index += 2;
}



const emptyArray = [];

function incrementer (fullArray) {

    for (let i = 0; i < fullArray.length; i++) {
        const value = fullArray[i] + 1;
        emptyArray.push(value);
    } return emptyArray
}

console.log(incrementer([1,2,3]));
