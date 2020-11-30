var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

var diceImage = "dice" + randomNumber1 + ".png";
var imagePlusDice = "images/" + diceImage;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , imagePlusDice);



var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var diceImage2 = "dice" + randomNumber2 + ".png";
var imagePlusDice2 = "images/" + diceImage2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , imagePlusDice2);



if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw !";
}
else if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 is the winner!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 is the winner!";
}
