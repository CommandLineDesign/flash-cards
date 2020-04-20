import Card from "./Card";

class Deck {
  constructor(cards) {
    this.deck = cards.map((card) => {
      return new Card(card);
    });
  }
}

export default Deck;
