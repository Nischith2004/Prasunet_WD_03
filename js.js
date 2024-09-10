let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const resetgame = () => {
  turnO = true;
  enablebtn();
  msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.classList.add("fo");
      box.innerText = "O";
      turnO = false;
    } else {
      box.classList.remove("fo");
      box.innerText = "X";
      turnO = true;
    }
    //TO MAKE A BUTTON DISABLE AFTER ONE CLICK
    box.disabled = true;
    checkWinner();
  });
});
const disablebtn = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enablebtn = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `congrats! winner is ${winner} `;
  msgcontainer.classList.remove("hide");
  disablebtn();
};
const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        showWinner(pos1);
        break;
      }
    }
  }
};
newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
