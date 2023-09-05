function calculateTotal () {
    const inputElement = document.querySelector('.js-costInput');
    let cost = Number(inputElement.value); 

    if (cost < 50) {
        cost = cost + 10;
}
    document.querySelector('.js-final-fee').innerHTML = `$${cost}`;
}

// Values from the DOM are in string format, use 'Number()' to convert to number, use 'String()' to convert to string.

function enterButtonEvent (event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}

function decideCoin (decision) {
    if (decision === 'Head') {
        document.querySelector('.js-decide').innerHTML = `You chose Head`;
    } else {
        document.querySelector('.js-decide').innerHTML = `You chose Tail`;
    }
}


function addName () {
    const inputElement = document.querySelector('.js-nameInput');
    let name = inputElement.value;
    
    document.querySelector('.js-nameEnter').innerHTML = `Your name is: ${name}`;
}

function enterName (event) {
    if (event.key === 'Enter') {
        calculateTotal();
    }
}