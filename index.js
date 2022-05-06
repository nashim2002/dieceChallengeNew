//For image1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDieceImages1 = "images/dice" + randomNumber1 + ".png";
var image1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomDieceImages1);

//For image2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDieceImages2 = "images/dice" + randomNumber2 + ".png";
var image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomDieceImages2);

// Now highlight the winner

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 wins!!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 wins!!";
} else {
  document.querySelector("h1").innerHTML = "Draw!!";
}
