const scoreCard = JSON.parse(localStorage.getItem('scoreCard')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};


function playGame(palyerMove) {

    scoreUpdate();

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


    if (scoreCard.wins === 5) {
        alert(`Game over, you win`);
            resetGame();
    } else if (scoreCard.losses === 5) {
            alert('Game over, you lose')
            resetGame();
    }

    localStorage.setItem('scoreCard', JSON.stringify(scoreCard));

    scoreUpdate();

//         alert(`Computer picks ${computerMove}, you chose ${palyerMove}. You ${result}\n
// The score is:   ${scoreCard['wins']} wins, ${scoreCard['losses']} losses, ${scoreCard['ties']} ties`); // scoreCard['wins] is the same thing as scoreCard.wins

    document.querySelector('.js-pickedresult').innerHTML = `You ${result}`;
    document.querySelector('.js-selection'). innerHTML = `Computer picks ${computerMove}, you chose ${palyerMove}.`;

}

function scoreUpdate () {
    document.querySelector('.js-score').innerHTML = 
                    `The score is:  ${scoreCard.wins} wins, ${scoreCard.losses} losses, ${scoreCard.ties} ties`;
}



function pickMove () {

    const randomNumber = Math.random();

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
    localStorage.removeItem('scoreCard');
    scoreUpdate();
}