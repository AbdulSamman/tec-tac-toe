//turn
let turn = "X";
const title = document.querySelector(".title");
const elements = document.querySelectorAll(".square");
let squares = [];

function end(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} winner`;
  document.getElementById("item" + num1).style.background = "#000";
  document.getElementById("item" + num2).style.background = "#000";
  document.getElementById("item" + num3).style.background = "#000";
  // set...
  setInterval(function () {
    title.innerHTML += ".";
  }, 1000);
  //reload
  setTimeout(function () {
    location.reload();
  }, 3000);
}

const winner = () => {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    squares[1] == squares[2] &&
    squares[2] == squares[3] &&
    squares[1] != ""
  ) {
    end(1, 2, 3);
  } else if (
    squares[4] == squares[5] &&
    squares[5] == squares[6] &&
    squares[4] != ""
  ) {
    end(4, 5, 6);
  } else if (
    squares[7] == squares[8] &&
    squares[8] == squares[9] &&
    squares[7] != ""
  ) {
    end(7, 8, 9);
  } else if (
    squares[1] == squares[4] &&
    squares[4] == squares[7] &&
    squares[1] != ""
  ) {
    end(1, 4, 7);
  } else if (
    squares[2] == squares[5] &&
    squares[5] == squares[8] &&
    squares[2] != ""
  ) {
    end(2, 5, 8);
  } else if (
    squares[3] == squares[6] &&
    squares[6] == squares[9] &&
    squares[3] != ""
  ) {
    end(3, 6, 9);
  } else if (
    squares[1] == squares[5] &&
    squares[5] == squares[9] &&
    squares[1] != ""
  ) {
    end(1, 5, 9);
  } else if (
    squares[3] == squares[5] &&
    squares[5] == squares[7] &&
    squares[3] != ""
  ) {
    end(3, 5, 7);
  }
};

const onCellClick = (e) => {
  const cell = document.getElementById(e.target.id);

  if (turn === "X" && cell.innerHTML == "") {
    cell.innerHTML = "X";
    turn = "O";
    title.innerHTML = "TURN: O";
  } else if (turn === "O" && cell.innerHTML == "") {
    cell.innerHTML = "O";
    turn = "X";
    title.innerHTML = "TURN: X";
  }
  winner();
};

window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content Loaded");
  elements.forEach((element) => {
    element.addEventListener("click", onCellClick);
  });
});
