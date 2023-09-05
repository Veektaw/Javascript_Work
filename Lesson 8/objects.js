const product = {
    name: 'socks',
    price: 1050,
};

// console.log(product);
// console.log(product.price);

// change the value of a property
product.name = 'cotton wool'

// add a new property and value
product.newItem = 'Fishing bait'
product.newBool = true
// console.log(product)

// delete a property
delete product.newBool
// console.log(product)





const scoreCard = JSON.parse(localStorage.getItem('scoreCard')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

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


console.log('hello'.length);
console.log('hello'.toUpperCase());





const object1 = {
    message: 'Hello Victor the JavaScript engineer'
}

console.log(object1);
object1.message = 'This is the life'; // change the key in object1

const object2 = object1; // assign object1 object to the variable object2

console.log(object2);





const object3 = {
    message: 'This is the life',
    message2: 'Hi Victor, good job',
    price: 30.90,
}

// an object is a reference to where it is stored in the computer's memory, not comparing the same thing, example below
console.log(object3 === object1); // this will return false
console.log(object2 === object1); // this will return true, as object2 is referencing where object1 is



//destructuring an object
const message = object3.message;
const {message2, price} = object3 // when assigning a variable from an object, the keys have to match

console.log(price);



// when setting up a new object, you can assign a key to a variable referencing a key in another object
const object5 = {
    message: message,
    startPrice: price,
    method () {
        console.log('This called a method');
    }
}

console.log(object5);











const produceAmazon = {
    name: 'Basketball',
    price: 12.99,
}

produceAmazon.price = 30.99;

console.log(produceAmazon);

produceAmazon['delivery-time'] = '3 days';
console.log(produceAmazon);







function comparePrice(productIn1, productIn2) {
    if (productIn1.price <= productIn2.price) {
        return productIn1;
    } else {
        return productIn2;
    }
}

const cart1 = {
    name:'Basketball pro 3',
    price: 12.50,
}

const cart2 = {
    name: 'Basketball pro 2',
    price: 30.67,
}

const cheaperProduct = comparePrice(cart1, cart2);
console.log(cheaperProduct);








function compareItems(item1, item2) {
    if (item1.name === item2.name && item1.price === item2.price) {
        return true;
    } else {
        return false;
    }
}


const itemsIn1 = {
    name:'Basketball pro 1',
    price: 12.50,
}

const itemsIn2 = {
    name: 'Basketball pro 1',
    price: 12.50,
}

const compareStuff = compareItems(itemsIn1, itemsIn2);
console.log(compareStuff);
