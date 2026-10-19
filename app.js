class Card {
  #element;
  constructor(suit, rank, flipped = false) {
    this.suit = suit;
    this.rank = rank;
    this._flipped = flipped;
    this.#element = document.createElement("img");
    this.#element.src = "/cardimages/" + this.imageFile;
  }

  get value() {
    if (this.rank == "ace") {
      return 11;
    } else if (["K", "Q", "J"].includes(this.rank)) {
      return 10;
    } else return Number(this.rank);
  }

  get imageFile() {
    return this._flipped ? "back of card.png" : `${this.rank} ${this.suit}.png`;
  }
  get element() {
    return this.#element;
  }

  set flipped(value) {
    this._flipped = value;
    this.#element.src = "/cardimages/" + this.imageFile;
  }
}

// let aCard = new Card("clubs", "7");

// console.log(aCard.value);
// console.log(aCard.imageFile);
// console.log(JSON.stringify(aCard));
// console.log(aCard);
