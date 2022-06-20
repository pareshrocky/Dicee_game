function randomNumGen(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function setRandomDiceImg(diceIndex, randomValue) {
  dice[diceIndex].setAttribute("src", "./images/dice" + randomValue + ".png");
}

function decideWinner(num1, num2) {
  if (num1 > num2) {
    heading.innerHTML = "✔ PLAYER 1 WINS !";
  } else if (num1 < num2) {
    heading.innerHTML = "✔ PLAYER 2 WINS !";
  } else {
    heading.innerHTML = "DRAW !";
  }
  return null;
}

let randomNum1;
let randomNum2;
let dice = document.querySelectorAll("img");
let button = document.getElementsByClassName("btn")[0];
let heading = document.querySelector("h1");

button.addEventListener("click", (e) => {
  randomNum1 = randomNumGen(1, 6);
  randomNum2 = randomNumGen(1, 6);
  if ((button.innerText = "Refresh Me")) {
    setRandomDiceImg(0, randomNum1);
    setRandomDiceImg(1, randomNum2);
  } else {
    button.innerHTML = "Refresh Me";
    setRandomDiceImg(0, randomNum1);
    setRandomDiceImg(1, randomNum2);
  }
  decideWinner(randomNum1, randomNum2);
  return false;
});
