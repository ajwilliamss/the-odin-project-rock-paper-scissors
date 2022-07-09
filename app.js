// Rock Paper Scissors Game
// 5 Rounds

// Array representing possible choices
const choices = ["rock", "paper", "scissors"];
let winners = [];

// Select HTML elememnt
btn = document.querySelector(".btn");

// Run the game
const game = () => {
  const numRounds = 5;
  for (let i = 1; i <= numRounds; i++) {
    round(i);
  }
  btn.textContent = "Play new game";
  displayWinner();
};

// Play the round
const round = (roundNum) => {
  const user = userChoice();
  const computer = computerChoice();
  const winner = checkWinner(user, computer);
  winners = [...winners, winner];
  displayRound(user, computer, winner, roundNum);
};

// Get input from user
const userChoice = () => {
  let userInput = prompt("Choose rock, paper or scissors...");

  while (!userInput) {
    alert("Please enter a choice");
    userInput = prompt("Choose rock, paper or scissors...");
  }

  userInput = userInput.toLowerCase();
  let isValid = validate(userInput);

  if (isValid) {
    return userInput;
  } else {
    while (!isValid) {
      alert("Invalid input");
      userInput = prompt("Choose rock, paper or scissors...");
      userInput = userInput.toLowerCase();
      isValid = validate(userInput);
    }
    return userInput;
  }
};

// Get random computer input
const computerChoice = () => {
  let index = Math.floor(Math.random() * choices?.length);
  let choice = choices[index];
  return choice;
};

// Validate input
const validate = (input) => {
  if (choices.includes(input)) {
    return true;
  } else {
    return false;
  }
};

// Determine winner
const checkWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "Tie";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "papers") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "User";
  } else {
    return "Computer";
  }
};

// Display the result of each round in the console
const displayRound = (user, computer, winner, roundNum) => {
  console.log(`Round Number: ${roundNum}`);
  console.log(`User Chose: ${user}`);
  console.log(`Computer Chose: ${computer}`);

  if (winner === "Tie") {
    console.log("Tie");
  } else {
    console.log(`${winner} Won the Round`);
  }
};

// Display the winner in the console
const displayWinner = () => {
  let userWins = winners.filter((winner) => winner === "User").length;
  let computerWins = winners.filter((winner) => winner === "Computer").length;
  let ties = winners.filter((result) => result === "Tie").length;

  console.log("Results:");
  console.log(`User Wins: ${userWins}`);
  console.log(`Computer Wins: ${computerWins}`);
  console.log(`Ties: ${ties}`);
  alert(
    `Results:\n User Wins: ${userWins}\n Computer Wins: ${computerWins}\n Ties: ${ties}`
  );
};
