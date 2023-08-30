if (false) {
    console.log('hi user');
} else {
    console.log('Else user');
}


function playTime () { 
    let time = 19;
    let morning = 6;
    let afternoon = 13;
    let night = 19;
    let myName = 'Victor';

    if (time === morning ) {
        console.log(`Good morning ${myName}`);
    } else if ( time === afternoon) {
        console.log( `Good afternoon ${myName}`);
    } else if (time === night) {
        console.log(`Goodnight ${myName}`);
    }
}

function getDiscount () {
    let discountAge = 13 || 65;
    let userAge = 13;
    let holiday = false;

    if (userAge === discountAge && holiday === true) {
        console.log('You get a discount');
    } else if (holiday === false) {
        console.log('You qualify for a discount, but it is not a holiday, no discount');
    } else if (userAge !== discountAge) {
        console.log('You do not qualify for a discount')
    }
}






/* ? Checks if first one is true, the runs the first one, runs the second one if the first one is false    */
const narrative = true ? 'truthy' : 'false';
console.log(narrative);


/* && Chooses first one and short-circuits if it is false, runs the seond one if the first one is true */
const narrate = false && 'hello';
console.log(narrate);


/* || Chooses first one and short-circuits if it is true, chooses the second one if the first one is false */
const currency = 'NGN' || 'USD';
console.log(currency);


function coinToss () {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    // Check if the number is less than 0.5
    const result = randomNumber <= 0.5 ? 'heads' : 'tails';

    // Your guess ('heads' or 'tails')
    const guess = 'heads'; 

    // Check if your guess matches the result
    const outcome = guess === result ? 'You win!' : 'You lose!';

    // Print the result and outcome to the console
    console.log('Result:', result);
    console.log(outcome);
}



const age = 15

if (age >= 16) {
    console.log('You can drive');
} else if (age >= 14) {
    console.log('Almost at that age');
} else {
    console.log("You can't drive");
}


const randomNumber = Math.random();

function playRock() {
    let computerMove = '';
    let result = '';

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    } console.log(`Computer choses ${computerMove}`);

    if (computerMove === 'rock') {
        result = 'Tie.';
    } else if (computerMove === 'paper') {
        result = 'Lose.';
    } else if (computerMove === 'scissors') {
        result = 'Win.';
    } alert(`Computer picks ${computerMove}, you chose Rock. You ${result}`);
}


function playPaper() {
    let computerMove = ''
    let result = ''

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    if (computerMove === 'rock') {
        result = 'Win.';
    } else if (computerMove === 'paper') {
        result = 'Tie.';
    } else if (computerMove === 'scissors') {
        result = 'Lose.';
    } alert(`Computer picks ${computerMove}, you chose Paper. You ${result}`);
}


function playScissors() {
    let computerMove = ''
    let result = ''

    if (randomNumber >= 0 && randomNumber < 1/3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
    } console.log(`Computer choses ${computerMove}`);

    if (computerMove === 'rock') {
        result = 'Lose.';
    } else if (computerMove === 'paper') {
        result = 'Win.';
    } else if (computerMove === 'scissors') {
        result = 'Tie.';
    } alert(`Computer picks ${computerMove}, you chose Scissors. You ${result}`);
}