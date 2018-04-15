var cards = [

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
}];


var cardsInPlay = [];



var flipCard = function(){
	var cardID = this.getAttribute('data-id')
	console.log("User flipped" + " " + cards[cardID].rank)
	cardsInPlay.push(cards[cardID].rank)
	this.setAttribute('src', cards[cardID].cardImage);

	checkForMatch();

	console.log(cards[cardID].cardImage)
	console.log(cards[cardID].suit)

	
};

var createBoard = function(){
	for (var i = 0; i < cards.length; i++) {
		cards[i]
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
	
}; 

var checkForMatch = function(){
	
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			setTimeout(function(){alert("You found a match!")},200)
		} 	
		else {
			setTimeout(function(){alert("Sorry try again!")},200)
		}
	}
};



createBoard();

