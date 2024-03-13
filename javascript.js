function getComputerChoice() {
    const myArray = ['rock', 'paper', 'scissors'];
    const randomChoice = myArray[Math.floor(Math.random()*myArray.length)];
    return randomChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let outcome = 'Tied';
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        outcome = 'Tied';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        outcome = 'Won';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        outcome = 'Won';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        outcome = 'Won';
    } else {
        outcome = 'Lost';
        return displayOutcome(outcome,computerSelection, playerSelection)
    }

    return displayOutcome(outcome, playerSelection, computerSelection)


}

function displayOutcome(type, won, lost) {
    const displayed = `You ${type}! ` 
    if (type == 'Tied') {
        return displayed + `Both picked ${lost}`
    } else {
        return displayed + `${won} beats ${lost}`
    }

}

function playGame() {
    let counter = 0
    for (let i = 1; i <=5; i++) {
        let playerSelection = prompt('Put in rock paper or scissors')
        let outcome = playRound(playerSelection, getComputerChoice())
        console.log(outcome)
        let theSlice = outcome.slice(4,8)
        switch (theSlice) {
            case "Won ":
                counter +=1;
                break;
            case "Lost":
                counter -=1;
                break;
            case "Tied":
                counter += 0;
                break;
        }

    }

    if (counter > 0) {
        console.log('You won the game!');
    } else if (counter < 0 ) {
        console.log('You lost the game womp womp');
    } else if (counter == 0) {
        console.log('You tied!');
    }


}