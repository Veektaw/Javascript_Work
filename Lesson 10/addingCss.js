buttonElement.classList.add
'is-subscribed'

function subscribeButton () {
    const buttonElem1 = document.querySelector('.js-first-button');

    if (buttonElem1.innerText === 'Subscribe') {
        buttonElem1.innerHTML = 'Subscribed';
    } else {
        buttonElem1.innerHTML = 'Subscribe';
    } buttonElem1.classList.add('is-subscribed');
}