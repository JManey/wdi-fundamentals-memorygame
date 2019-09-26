
var cards =["queen", "queen", "king", "king"];

var cardsInPlay = [];

function checkForMatch() {
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match");
    } else 
        alert("Sorry, try again");
}

function flipCard(cardsId) {

cardsInPlay.push(cards[cardsId]);
console.log("User flipped " + cards[cardsId]);

checkForMatch();
}



flipCard(1);
flipCard(2);
flipCard(0);