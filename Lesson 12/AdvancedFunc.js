const func1 = function greeting () {
    console.log('Hello')
};

func1();

// Hoisting, which is to call a function before it is defined, does not work when the function is saved to a variable

function display (param) {
    console.log (param);
}

// display (2);
function run (param) {
    param ();
}

run (function() {
    console.log ('hello4');
});


setTimeout(function () {
    console.log('Setting timeout')
}, 5000);

console.log('Next line')


// This will run every 5 seconds
setInterval(function () {
    console.log('Setting interval')
}, 5000);



['go to bed',
'wipe out',
'go home',
'play game'].forEach((value, index) =>  {
    if (value === 'go home') {
        return;
    }
    console.log(value);
    console.log(index)
})


const arrowFunc = (param, param2) => {
    console.log(param, param2)
};

arrowFunc({name: 'John', age: 49}, 'Sweep');

// When the parameter in an arrow function is just one, you can remove the bracket holding the parameters
const arrowFunc2 = param => {
    console.log(param + 70)
};

arrowFunc2(20);


// This is a one line arrow function
const oneLine = () => 2 + 3;

const obj = {
    method() {
        console.log('Called method');
    },
}

obj.method();


const buttonElement = document.querySelector('.js-event');

const eventListener = () => {
    console.log('Click')
};

buttonElement.addEventListener('click', eventListener);

buttonElement.removeEventListener('click', eventListener);

buttonElement.addEventListener('click', () => {
    console.log('Second Click')
});