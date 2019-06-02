import React from "react";

class ShuffleTheDeck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theDiscard: [],
      theShoe: [],
      suits: ["Hearts", "Diamonds", "Spades", "Clubs"],
      decks: 8,
      names: [
        "Ace",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Jack",
        "Queen",
        "King"
      ],
      images: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    };

    this.shuffleTheDeck = this.shuffleTheDeck.bind(this);
  }

  componentDidMount() {
    this.card();
    this.createTheShoe();
    this.shuffleTheCards();
    this.burnCards();
  }

  card(name, suit, value, deck, image) {
    this.name = name;
    this.suit = suit;
    this.value = value > 10 ? 0 : value;
    this.deck = deck;
    this.image = image;
  }

  createTheShoe(prevState, card) {
    if (this.state.theShoe.length === 0) {
      for (let deck = 1; deck <= this.decks; deck++) {
        for (let suit = 0; suit < this.state.suits.length; suit++) {
          for (let name = 0; name < this.state.names.length; name++) {
            this.setState({ theShoe: [...prevState, new card()] });
            //   theShoe.push(
            //     new card(
            //       this.names[name],
            //       this.suits[suit],
            //       name + 1,
            //       deck,
            //       this.images[name]
            //     )
            //   );
          }
        }
      }
      console.table(this.state.theShoe);
      // return theShoe;
    }
  }

  shuffleTheCards() {
    for (let i = 0; i < 2000; i++) {
      let location1 = Math.floor(Math.random() * this.state.theShoe.length);
      let location2 = Math.floor(Math.random() * this.state.theShoe.length);
      let temp = this.state.theShoe[location1];
      // this.setState({theShoe[location1] : theShoe[location2]});
      // this.setState({theShoe[location2] : temp});

        // this.setState({theShoe: [location1]  [location2]});
        // this.state.theShoe[location2] = temp;

      // let location1 = Math.floor(Math.random() * theShoe.length);
      // let location2 = Math.floor(Math.random() * theShoe.length);
      // let temp = theShoe[location1];j
      // theShoe[location1] = theShoe[location2];
      // theShoe[location2] = temp;
    }
  }

  burnCards() {
    let numBurnCards =
      this.state.theShoe[0].value === 0 ? 10 : this.state.theShoe[0].value;
    this.pushIntoTheDiscard(this.card);
    for (let i = 1; i < numBurnCards; i++) {
      this.pushIntoTheDiscard(this.card);
    }
    //   theDiscard.push(theShoe.shift());
    //   for (let i=1; i<+numBurnCards; i++) {
    //       theDiscard.push(theShoe.shift());
  }

  updateDom() {
    document.getElementById("dealButton").disabled = false;
    console.log("The deck is shuffled. We are ready to play!");
  }

  pushIntoTheShoe(prevState, card) {
    this.setState({ ...prevState, card });
  }

  pushIntoTheDiscard(prevState, card) {
    this.setState({ ...prevState.theDiscard, card });
  }
}

export default ShuffleTheDeck;
