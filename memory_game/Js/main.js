console.log("up and running");

function createBoard (){

	for (let i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute('data-id', i);
		document.getElementById('game-board').appendChild(cardElement);
		cardElement.addEventListener('click', flipCard);
	}
}


const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}

];


var cardsInPlay = [];


var scoreAttempt = 0;


function checkForMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
		scoreAttempt += 1;
		document.querySelector('.results').innerHTML = scoreAttempt;
	}else{
		alert("Sorry! Try again");
	}
};



function flipCard (){

	var cardId = this.getAttribute('data-id');

	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute("src", cards[cardId].cardImage);

	if (cardsInPlay.length === 2){
		checkForMatch();
	}

};


createBoard();


var button = document.querySelector('.reset-button');


var resetBoard = function(){
    cardsInPlay=[];
    for (var i = 0; i < cards.length; i++) {
        var x = document.getElementsByTagName("img")[i];
        x.setAttribute('src',"images/back.png");
        }
}

button.addEventListener('click', resetBoard);









