function randomNumGen(min,max){
    return Math.floor(Math.random() * max) + min;
}

function decideWinner(num1,num2){
    if(num1 > num2){
        document.querySelector("h1").innerHTML = "✔ PLAYER 1 WINS !"
    }else if(num1 < num2){
        document.querySelector("h1").innerHTML = "✔ PLAYER 2 WINS !" 
    }else{
        document.querySelector("h1").innerHTML = "DRAW !"
    }
    return null;
}

let randomNum1 = randomNumGen(1,6);
let randomNum2 = randomNumGen(1,6);

console.log(randomNum1,randomNum2);

let dice = document.querySelectorAll("img");

dice[0].setAttribute("src","./images/dice" + randomNum1 + ".png")
dice[1].setAttribute("src","./images/dice" + randomNum2 + ".png")

document.getElementsByClassName('btn')[0].addEventListener('click', function(e){
    window.location.reload();
    return false;
});

decideWinner(randomNum1,randomNum2);