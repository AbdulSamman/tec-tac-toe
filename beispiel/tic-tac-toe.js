//muss in inspekt console gezeigt werden
//Add Game Logic
//Game state (status) variables
//status:
//0: spieler 1 am zug
//1: spieler 2 am zug
//2: spieler 1 hat gewonnen
//3: spieler 2 hat gewonnen
//4: Unentschieden
//
//
//3.schritt
//let da status sich ändert wenn geklickt wird soll speichern
let gameState = 0;

const fields = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //X O überprüfen muss 0,1,0,2,...was in case steht

const newGameButton = document.getElementById("newGame");

const drawField = () => {
  fields.forEach((field, index) => {
    const cell = document.getElementById(index + 1);

    cell.innerHTML = field === 1 ? "X" : field === 2 ? "O" : "";
  });

  //4.schritt  button disable

  //newGameButton.disabled = gameState > 1 ? false : true;
};
//2.schritt
const onNewGame = (e) => {
  console.log("New Game Button clicked", e.target.id);
};
// wo geklickt wird
const onCellClick = (e) => {
  console.log("Cell clicked", e.target.id);
  if (gameState > 1 || fields[e.target.id - 1]) return; //wenn geklickt soll raus
  fields[e.target.id - 1] = gameState + 1; //wenn spieler 1 dann +1 spieler 2 ist dran, +1 dann wieder spieler 1
  gameState = gameState === 0 ? 1 : 0;
  // step2: drawField aufrufen
  drawField();
  game(e.target.id);
};
//1. schritt/*  */
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");
  //console.log(newGameButton);
  newGameButton.addEventListener("click", onNewGame);
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", onCellClick);
  });
  drawField();
});
let turn = "X";
const title = document.getElementById("game-state");

function game(id) {
  let element = document.getElementById(id);
  if (turn === "X" && element.innerHTML == "") {
    element.innerHTML = "X";
    turn = "O";
    title.innerHTML = "O";
  } else if (turn === "O" && element.innerHTML == "") {
    element.innerHTML = "O";
    turn = "X";
    title.innerHTML = "X";
  }
}
