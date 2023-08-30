const product = {
    name: 'socks',
    price: 1050,
};

console.log(product);
console.log(product.price);

// change the value of a property
product.name = 'cotton wool'

// add a new property and value
product.newItem = 'Fishing bait'
product.newBool = true
console.log(product)

// delete a property
delete product.newBool
console.log(product)





const scoreCard = JSON.parse(localStorage.getItem('scoreCard'));

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
        
    } } if (result === 'Win.') {
            scoreCard.wins += 1
    } else if (result === 'Tie.') {
            scoreCard.ties +=  1
    } else if (result === 'Lose.') {
            scoreCard.losses += 1
    }

        localStorage.setItem('scoreCard', JSON.stringify(scoreCard));
        alert(`Computer picks ${computerMove}, you chose ${palyerMove}. You ${result}\n
The score is:   ${scoreCard['wins']} wins, ${scoreCard['losses']} losses, ${scoreCard['ties']} ties`); // scoreCard['wins] is the same thing as scoreCard.wins

        if (scoreCard.wins === 5) {
            alert(`Game over, you win`);
            resetGame();
        } else if (scoreCard.losses === 5) {
            alert('Game over, you lose')
            resetGame();
        }
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

function resetGame () {
    scoreCard['losses'] = 0;
    scoreCard['wins'] = 0;
    scoreCard['ties'] = 0;
    localStorage.removeItem('scoreCard')
    alert('Game reset!');

}


const product2 = {
    produce: 'Juice',
    quantity: 50,
    availability: true,
    qualitity: {
        reviews: 4.5,
        happiness: 4.2,
    },
    fun: function nest() {
        console.log('Function inside an object');
    }
}

console.log(product2['quantity']);
console.log(product2.qualitity.happiness);

// function inside an object
product2.fun();

// a method is a function inside an object

// console.log(JSON.stringify(product));

// const jsonString = JSON.stringify(product);

// console.log(JSON.parse(jsonString));



