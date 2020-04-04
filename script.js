var round = 1;
var playerScore = 0;
var computerScore = 0;

function game() {

     
    let playerChoicePrompt = prompt("Choose your weapon!! (Rock, Paper, or Scissors)");
    let computerChoices = ["Rock", "Paper", "Scissors"];

    let playerSelection = playerChoicePrompt.charAt(0).toUpperCase() + playerChoicePrompt.slice(1);
    let computerSelection = computerChoices[(Math.random() * computerChoices.length) | 0];



    if (playerSelection == computerSelection ) {
        console.log("The round is a tie!");
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        ++playerScore;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        ++playerScore;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        ++playerScore;
    } else {
        ++computerScore;
     }

    document.write("<h1> Round " + round + "</h1>");
    document.write("<p> You chose " + playerSelection + " while the computer chose " + computerSelection + "!</p>")
    document.write("<p> Player Score: " + playerScore + "</p>");
    document.write("<p> Computer Score: " + computerScore + "</p>");
    document.write("<hr>");

    ++round;

    
}

while (round <= 5) {
    game();
}

