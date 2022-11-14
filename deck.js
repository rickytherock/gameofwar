const SUITS = ["♠", "♣", "♥", "♦"]; //card suits array 
const VALUES = [      //card values array 
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

export default class Deck { //export set
  constructor(cards = freshDeck()) { 
    this.cards = cards;
  }

  get numberOfCards() {     //getter encapsulated for the number of cards
    return this.cards.length;
  }

  pop() {     //returns the top card from the deck
    return this.cards.shift();
  }

  push(card) {  //adds card to bottom of deck
    this.cards.push(card);
  }

  shuffle() {    //shuffle function set with for loop to shuffle deck 
    for (let i = this.numberOfCards - 1; i > 0; i--) {  //starting with last card from the back to front flipping cards
      const newIndex = Math.floor(Math.random() * (i + 1)); //
      const oldValue = this.cards[newIndex];  //flip the old value with new index
      this.cards[newIndex] = this.cards[i];  //
      this.cards[i] = oldValue;  //
    }
  }
}

class Card {    //Card class set
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color() {
    return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
  }

  getHTML() { //HTML function
    const cardDiv = document.createElement("div");
    cardDiv.innerText = this.suit;
    cardDiv.classList.add("card", this.color);
    cardDiv.dataset.value = `${this.value} ${this.suit}`;
    return cardDiv;
  }
}

function freshDeck() {        //freshDeck function to create a new set of cards
  return SUITS.flatMap(suit => {    //using flat map function to condense array
    return VALUES.map(value => {    //loop through values with map function
      return new Card(suit, value);  //return new card
    });
  });
}