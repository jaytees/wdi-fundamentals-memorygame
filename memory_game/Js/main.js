console.log("up and running");

const cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped " + cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardTwo);


if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1])
	alert("you have found a match!");
}

else {
	alert("try again!");
}




