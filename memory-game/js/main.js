
var cards =[
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

function checkForMatch() {
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match");
    } else 
        alert("Sorry, try again");
}

function flipCard(cardsId) {

    cardsInPlay.push(cards[cardsId].rank);
    console.log("User flipped " + cards[cardsId].rank);
    console.log(cards[cardsId].cardImage);
    console.log(cards[cardsId].suit);

  

    checkForMatch();
}



flipCard(1);
flipCard(2);
flipCard(0);