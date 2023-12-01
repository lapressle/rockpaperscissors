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
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection,computerSelection));