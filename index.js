// Generating Random Number & Image for Player 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage1);


// Generating Radom Number & Image for Player 2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 =  "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);


// Announcing the Winner
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins the Round 🎉";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins the Round 🎉";
} else {
  document.querySelector("h1").innerHTML = "Draw! Please try again!";
}
