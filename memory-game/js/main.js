// list of cards
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

//make function to shuffle the array
var array = [];
function shuffle(array) {
    for (let i = array.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
// call the shuffle function
shuffle(cards);

console.log(cards);



//match attributes from cards to the var cardElement
//create game board showing back of cards by appending cardElement to game-board
//create event listener so we can click the cards, which calls the flipCard function

function createBoard() {
    for (let i = 0; i < cards.length; i++){
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};

//create an array and compare it's first two values
//added a line to refresh after winning/losing
var cardsInPlay = [];
function checkForMatch() {
     if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match");
    } else 
        alert("Sorry, try again");        
        document.location.reload();  
};


//function to flip cards
//use this to get the array position of the clicked card
//send the rank of the clicked card to the cardsInPlay var
//set the clicked card to its cardImage(flip it)
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
       
    if(cardsInPlay.length === 2) {
        checkForMatch();
    }
};

//call the createBoard function
createBoard();

/*reset game
I couldn't get it to reset by clicking on a third card...maybe later

function reset(){
    document.location.reload();
}
if( cardsInPlay.length >= 2) {
    document.getElementsById('game-board').addEventListener('click', reset());
}
*/