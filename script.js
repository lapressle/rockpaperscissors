function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    console.log(choice);
    switch(choice) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);