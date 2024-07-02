function determineWinner(player, computer) {
    if (player === computer) {
        return "Tie!";
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(playerChoice, computerChoice);
    
    document.getElementById('result').innerHTML = `
        <p>${result}</p>
        <p>You chose: ${playerChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
    `;
}
