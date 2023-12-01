function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    switch(choice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection,computerSelection) {
    console.log(playerSelection,computerSelection);
    switch (playerSelection.toLowerCase() + ":" + computerSelection.toLowerCase()) {
        case 'rock:paper':
            return 'Player lost!';
            break;
        case 'rock:scissors':
            return 'Player won!';
            break;
        case 'paper:rock':
            return 'Player won!';
            break;
        case 'paper:scissors':
            return 'Player lost!';
            break;
        case 'scissors:rock':
            return 'Player lost!';
            break;
        case 'scissors:paper':
            return 'Player won!';
            break;
        case 'rock:rock':
        case 'scissors:scissors':
        case 'paper:paper':
            return playRound(playerSelection,getComputerChoice());
            break;
        default:
            return 'improper input!';
    }
}

const playerSelection = 'rock';
let computerSelection = getComputerChoice();

function game() {
    let playerWin = 0;
    let computerWin = 0;
    let round = 1;
    while (round<5) {
        console.log('Round'+' '+round,'Player score is '+playerWin,'Computer score is '+computerWin);
        let result = playRound(playerSelection,computerSelection);
        if (result == 'Player won!') {
            playerWin += 1;
        }   else if (result == 'Player lost!') {
            computerWin += 1;
        }   else {
            console.log('something strange happened');
        }
        if (playerWin == 3) {
            return 'Player won overall!';
        }
            else if (computerWin == 3) {
            return 'Computer won overall!';
        }
            else {
            round +=1;
        }
        computerSelection = getComputerChoice();
    }
}

console.log(game());