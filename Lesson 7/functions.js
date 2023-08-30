function playGame(palyerMove) {

    const computerMove = pickMove();
    let result = '';

    if (palyerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'Lose.';
        } else if (computerMove === 'paper') {
            result = 'Win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }

    } else if (palyerMove === 'paper') {

        if (computerMove === 'rock') {
            result = 'Win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'Lose.';
        }

    } else if (palyerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'Lose.';
        } else if (computerMove === 'scissors') {
            result = 'Win.';
        
    } } alert(`Computer picks ${computerMove}, you chose ${palyerMove}. You ${result}`);
}


const randomNumber = Math.random();

function pickMove () {
    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    } console.log(`Computer choses ${computerMove}`);
    return computerMove
}




// setting a default value takes place in case an argument is not provided. seta default with 'nameOfArgument' = 'value'
function calulateTax (cost, percentage = 0.1) {
    console.log(cost * percentage / 100);
}

calulateTax(10000, 0.3);


function greet (name) {
    if (name === undefined || null) {
        console.log('Hi there user');
    } else if (name) {
        console.log(`Hi ${name}`);
    }
}

greet('Victor');
greet();

function convertTemptoFar (celcius) {
    let reusult = (celcius * 9 / 5) + 32;
    console.log(`The temperature in Fahrenheit is ${reusult};`);
}

function convertTemptoCel (fahrenheit) {
    let reusult = (fahrenheit - 32) * 5 / 9;
    console.log(`The temperature in Celcius is ${reusult};`);
}


function convertTemperature (digit, symbol) {
    if (symbol === 'C') {
        let reusult = (digit - 32) * 5 / 9;
        console.log(`The temperature in Celcius is ${reusult}`+'C');

    } else if (symbol === 'F') {
        let reusult = (digit * 9 / 5) + 32;
        console.log(`The temperature in Fahrenheit is ${reusult}`+'F');
    }
}

convertTemperature(77, 'C');
convertTemperature(25, 'F')