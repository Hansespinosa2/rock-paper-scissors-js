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
            case "Won!":
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

function getResult(outcome) {
    let theSlice = outcome.slice(4,8)
        switch (theSlice) {
            case "Won!":
                return [1,0,0]
            case "Lost":
                return [0,1,0]
            case "Tied":
                return [0,0,1]
        }
}

function populateResults(arr) {
    const ps = document.querySelectorAll('p')
    let i = 0;
    let arrResultsText = ['Number won: ', "Number lost: ", 'Number tied: ']
    ps.forEach(function(p) {
        p.textContent = `${arrResultsText[i]}${arr[i]}`
        i++
    });
}

function checkWinner(arr) {
    if (arr[0] >= 5) {
        finishedPlaying = true
        return 'You won!'
        
    } else if (arr[1] >= 5) {
        finishedPlaying = true
        return 'You lost!'
        
    } else {
        return 'Playing until five'
    }
}


let arrResults = [0,0,0]
const btnRock = document.querySelector('button.rock')
const btnScissors = document.querySelector('button.scissors')
const btnPaper = document.querySelector('button.paper')
let finishedPlaying = false;
const btnPlays = document.querySelectorAll('button.play')

btnPlays.forEach( function(btn) {
    btn.addEventListener('click', function(e) {
        if (!finishedPlaying) {
        let olResults = document.querySelector('ol');
        let liRound = document.createElement('li');
        let h3Result = document.querySelector('.final-result')
        let outcome = playRound(e.target.textContent,getComputerChoice());
        arrResults = arrResults.map((num, index) => num + getResult(outcome)[index])
        populateResults(arrResults)
        liRound.textContent = outcome
        olResults.appendChild(liRound)

        h3Result.textContent = checkWinner(arrResults)
        }
    });
});