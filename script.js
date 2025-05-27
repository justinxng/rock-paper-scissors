let history = [];

function play(playerMove) {
  history.push(playerMove);

  const count = { rock: 0, paper: 0, scissors: 0 };
  history.forEach(move => count[move]++);

  let predicted = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
  let aiMove = counter(predicted);

  let result = getResult(playerMove, aiMove);

  document.getElementById('result').innerText =
    `you played ${playerMove}, AI played ${aiMove} → ${result}`;
}

function counter(move) {
  if (move === "rock") return "paper";
  if (move === "paper") return "scissors";
  return "rock";
}

function getResult(p, ai) {
  if (p === ai) return "It's a draw!";
  if ((p === "rock" && ai === "scissors") ||
      (p === "paper" && ai === "rock") ||
      (p === "scissors" && ai === "paper")) return "You win!";
  return "AI wins!";
}
