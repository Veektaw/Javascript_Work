document.body.innerHTML = 'hi guys';
console.log(document.title);

// document.body controls the entire body of the html element, document.innerHTML controls the html inside the body

//create a new html
document.body.innerHTML = '<button>Good going!</button>'

// select an element


// change the text of the button
document.querySelector('button').innerHTML;
document.querySelector('button').innerHTML = 'changed button';

// document.querySelector('.js-button').innerHTML = 'behaviour changed';

// save a queryselector as a variable
const buttonElem = document.querySelector('.js-button').innerHTML = 'behaviour changed';

// console.log(buttonElem);

function subscribeButton () {
    const buttonElem1 = document.querySelector('.js-first-button');

    if (buttonElem1.innerText === 'Subscribe') {
        buttonElem1.innerHTML = 'Subscribed';
    } else {
        buttonElem1.innerHTML = 'Subscribe';
    }
}