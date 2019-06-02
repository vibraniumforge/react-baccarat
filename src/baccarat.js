import React from "react";
import "./baccarat.css";
import ExplainTheGame from "./explain-the-game.js";
import ShuffleTheDeck from "./shuffle-the-deck.js";

class Baccarat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theDiscard: [],
      theShoe: [],
      totalPlayerWinningHands: 0,
      totalBankerWinningHands: 0,
      totalTieHands: 0,
      totalPandaHands: 0,
      totalDragonHands: 0,
      totalAllHands: 0,
      myRunningChipTotal: 1000,
      playerTotal: null,
      bankerTotal: null,
      playerWins: false,
      bankerWins: false,
      resultIsADragon: false,
      resultIsATie: false,
      resultIsAPanda: false,
      playerTotalCards: 0,
      bankerTotalCards: 0,
      playerHand: [],
      bankerHand: [],
      playerBet: 0,
      bankerBet: 0,
      dragonBet: 0,
      tieBet: 0,
      pandaBet: 0,
      dealAHandButton: false
    };

    this.explainTheGame = this.explainTheGame.bind(this);
    this.dealAHand = this.dealAHand.bind(this);
    this.shuffleTheDeck = this.shuffleTheDeck.bind(this);
  }

  componentDidMount() {}

  explainTheGame() {
    console.log("1fires");
    <ExplainTheGame />;
  }

  shuffleTheDeck() {
    console.log("2fires");
    <ShuffleTheDeck />;

    this.setState({
      dealAHandButton: true
    });
  }

  dealAHand() {
    this.setState({});
    this.dealFirstFourCards();
  }

  dealFirstFourCards() {
    this.showFirstFourCards;
  }

  suitChanger(suit) {
    if (suit === "Spades") {
      return "&spades;";
    } else if (suit === "Hearts") {
      return "&hearts;";
    } else if (suit === "Clubs") {
      return "&clubs;";
    } else if (suit === "Diamonds") {
      return "&diams;";
    }
    this.showFirstFourCards;
  }

  showFirstFourCards() {
    this.totalTheHands;
  }

  totalTheHands() {
    this.setState({
      playerTotal:
        (this.state.playerHand[0].value + this.state.playerHand[1].value) % 10,
      bankerTotal:
        (this.state.bankerHand[0].value + this.state.bankerHand[1].value) % 10
    });
    this.compareHandsForNaturals;
  }

  compareHandsForNaturals() {
    if (
      this.state.playerTotal === 8 ||
      this.state.playerTotal === 9 ||
      this.state.bankerTotal === 8 ||
      this.state.bankerTotal === 9
    ) {
      this.compareHandsFinal;
    } else {
      this.drawThirdCards;
    }
  }

  drawThirdCards() {
    if (this.state.playerTotal < 6) {
    }
    if (this.state.playerHand.length < 3) {
      if (this.state.bankerTotal < 6) {
      }
    }
    if (this.state.playerHand.length === 3) {
      if (
        this.state.bankerTotal === 0 ||
        this.state.bankerTotal === 1 ||
        this.state.bankerTotal === 2
      ) {
      }
    } else if (
      this.state.bankerTotal === 3 &&
      this.state.playerHand[2].value !== 8
    ) {
    } else if (
      this.state.bankerTotal === 3 &&
      this.state.playerHand[2].value === 8
    ) {
      // console.log("Banker 3 vs 8 exception fires");
    } else if (
      this.state.bankerTotal === 4 &&
      [2, 3, 4, 5, 6, 7].includes(this.state.playerHand[2].value)
    ) {
    } else if (
      this.state.bankerTotal === 5 &&
      [4, 5, 6, 7].includes(this.state.playerHand[2].value)
    ) {
    } else if (
      this.state.bankerTotal === 6 &&
      [6, 7].includes(this.state.playerHand[2].value)
    ) {
    }

    this.setState({
      playerTotal: this.state.playerHand[2]
        ? (this.state.playerHand[0].value +
            this.state.playerHand[1].value +
            this.state.playerHand[2].value) %
          10
        : (this.state.playerHand[0].value + this.state.playerHand[1].value) %
          10,
      bankerTotal: this.state.bankerHand[2]
        ? (this.state.bankerHand[0].value +
            this.state.bankerHand[1].value +
            this.state.bankerHand[2].value) %
          10
        : (this.state.bankerHand[0].value + this.state.bankerHand[1].value) % 10
    });

    this.showThirdCards;
  }

  showThirdCards() {
    this.compareHandsFinal;
  }

  compareHandsFinal() {
    if (this.state.playerTotal > this.state.bankerTotal) {
      this.setState({ playerWins: true });
    } else if (this.state.playerTotal < this.state.banlerTotal) {
      this.setState({ bakerWins: true });
    } else if (this.state.playerTotal === this.state.bankerTotal) {
      this.setState({ resultIsATie: true });
      console.log(
        "It is a TIE. The bank and player both have",
        this.state.bankerTotal
      );
    }
    this.bonusHands;
  }

  bonusHands() {
    if (this.state.resultIsATie === true) {
      console.log("TIE PAYS 8 TO 1");
    } else if (
      this.state.bankerWins === true &&
      this.state.bankerTotalCards === 3 &&
      this.state.bankerTotal === 7 &&
      this.state.bankerHand[2].value === 1
    ) {
      this.setState({ resultIsADragon: true });
      console.log("Rare Dragon!");
      console.log("DRAGON 7 PAYS 40 TO 1!!!");
    } else if (
      this.state.bankerWins === true &&
      this.state.bankerTotalCards === 3 &&
      this.state.bankerTotal === 7
    ) {
      this.setState({ resultIsADragon: true });
      console.log("DRAGON 7 PAYS 40 TO 1!!!");
    } else if (
      this.state.playerWins === true &&
      this.state.playerTotalCards === 3 &&
      this.state.playerTotal === 8
    ) {
      this.setState({ resultIsAPanda: true });
      console.log("DRAGON 7 PAYS 40 TO 1!!!");
    } else if (
      this.state.playerWins === true &&
      this.state.playerTotal === 7 &&
      this.state.playerTotalCards === 2 &&
      this.state.bankerTotal === 6 &&
      this.state.bankerTotalCards === 2
    ) {
      console.log("Player barbeques banker!");
    } else if (
      this.state.bankerWins === true &&
      this.state.bankerTotal === 7 &&
      this.state.bankerTotalCards === 2 &&
      this.state.playerTotal === 6 &&
      this.state.playerTotalCards === 2
    ) {
      console.log("Banker barbequesF player!");
    } else if (
      this.state.bankerWins === true &&
      this.state.playerTotalCards === 3 &&
      this.state.playerTotal === 8
    ) {
      console.log("Banker killed the Panda!");
    } else if (
      this.state.playerWins === true &&
      this.state.playerTotal === 8 &&
      this.state.bankerTotalCards === 3 &&
      this.state.bankerTotal === 7
    ) {
      console.log("Panda killed the Dragon!");
    } else if (
      this.state.playerWins === true &&
      this.state.bankerTotalCards === 3 &&
      this.state.bankerTotal === 7
    ) {
      console.log("Player killed the Dragon!");
    } else {
      console.log("No bonuses ocurred this hand");
    }
    this.countHandTotals;
  }

  countHandTotals() {
    if (this.state.playerWins === true) {
      this.setState({
        totalPlayerWinningHands: this.state.totalPlayerWinningHands + 1
      });
    } else if (this.state.bankerWins === true) {
      this.setState({
        totalBankerWinningHands: this.state.totalBankerWinningHands + 1
      });
    } else if (this.state.resultIsATie === true) {
      this.setState({ totalTieHands: this.state.totalTieHands + 1 });
    } else if (this.state.resultIsADragon === true) {
      this.setState({ totalDragonHands: this.state.totalDragonHands + 1 });
    } else if (this.state.resultIsAPanda === true) {
      this.setState({ totalPandaHands: this.state.totalPandaHands + 1 });
    }
    this.setState({ totalHands: this.state.totalHands + 1 });
    console.log("Hand number:", this.state.TotalHands);
    console.log("Player Winning Hands:", this.state.playerWinningHands);
    console.log("Banker Winning Hands:", this.state.bankerWinningHands);
    console.log("Dragons:", this.state.dragonHands);
    console.log("Ties:", this.state.tieHands);
    console.log("Pandas:", this.state.pandaHands);
    this.updateRunningChipTotal;
  }

  updateRunningChipTotal() {
    console.log("playerTotal=", this.state.playerTotal);
    console.log("bankerTotal=", this.state.bankerTotal);
    this.setState({
      myRunningChipTotal:
        this.state.myRunningChipTotal -
        this.state.playerBet -
        this.state.bankerBet -
        this.state.dragonBet -
        this.state.tieBet -
        this.state.pandaBet
    });
    if (this.state.resultIsAPanda === true) {
      this.setState({
        myRunningChipTotal:
          this.state.myRunningChipTotal +
          2 * this.state.playerBet -
          this.state.dragonBet -
          this.state.tieBet +
          this.state.pandaBet +
          25 * this.state.pandaBet
      });
      console.log(
        "You win",
        this.state.pandaBet * 25,
        "dollars for the PANDA!"
      );
      if (this.state.playerBet) {
        console.log(
          "The PLAYER wins with",
          this.state.playerTotal,
          "points against the banker's",
          this.state.bankerTotal,
          ". You win",
          this.state.playerBet,
          "dollars."
        );
      } else if (this.state.bankerBet) {
        console.log(
          "Sorry, the PLAYER wins with",
          this.state.playerTotal,
          "points against the banker's",
          this.state.bankerTotal,
          ". You lose",
          this.state.playerBet,
          "dollars."
        );
        console.log("The dragon and tie bets lose.");
      }
    } else if (this.state.resultIsADragon === true) {
      this.setState({
        myRunningChipTotal:
          this.state.myRunningChipTotal +
          this.state.bankerBet +
          this.state.dragonBet +
          40 * this.state.dragonBet
      });
      console.log(
        "You win",
        this.state.dragonBet * 40,
        "dollars for the DRAGON!"
      );
      if (this.state.playerBet) {
        console.log(
          "Sorry, the BANKER wins with",
          this.state.bankerTotal,
          "points against the player's",
          this.state.playerTotal,
          ". You lose",
          this.state.playerBet,
          "dollars."
        );
      }
      if (this.state.bankerBet) {
        console.log("The BANKER bet pushes on a dragon.");
        console.log("The panda and tie bets lose.");
      } else if (this.state.playerWins === true) {
        this.setState({
          myRunningChipTotal:
            this.state.myRunningChipTotal + 2 * this.state.playerBet
        });
        if (this.state.playerBet) {
          console.log(
            "The PLAYER wins with",
            this.state.playerTotal,
            "points against the banker's",
            this.state.bankerTotal,
            ". You win",
            this.state.playerBet,
            "dollars."
          );
        } else if (this.state.bankerBet) {
          console.log(
            "Sorry, the PLAYER wins with",
            this.state.playerTotal,
            "points against the banker's",
            this.state.bankerTotal,
            ". You lose",
            this.state.bankerBet,
            "dollars."
          );
        }
        console.log("The panda, dragon, and tie bets lose.");
      } else if (
        this.state.bankerWins === true &&
        this.state.resultIsADragon === false
      ) {
        this.setState({
          myRunningChipTotal:
            this.state.myRunningChipTotal + 2 * this.state.bankerBet
        });
        if (this.state.bankerBet) {
          console.log(
            "The BANKER wins with",
            this.state.bankerTotal,
            "points against the player's",
            this.state.playerTotal,
            ". You win",
            this.state.bankerBet,
            "dollars."
          );
        }
        console.log("The panda, dragon, and tie bets lose.");
      }
    } else if (this.state.resultIsATie === true) {
      this.setState({
        myRunningChipTotal:
          this.state.myRunningChipTotal +
          this.state.bankerBet +
          this.state.playerBet +
          this.state.tieBet +
          8 * this.state.tieBet
      });
      console.log("You win", this.setState.tieBet * 8, "dollars.");
      console.log("The banker and player push on a tie.");
      console.log("The panda and dragon bets lose.");
    }
    this.discardCards;
  }

  discardCards() {
    for (let i = 0; i < this.state.playerHandlength; i++) {
      //discard
    }
    this.setState({ playerHand: [] });
    for (let j = 0; j < this.state.bankerHand.length; j++) {
      //discard
    }
    this.setState({ bankerHand: [] });
    this.resetAll;
  }

  resetAll() {
    this.setState({
      playerTotal: null,
      bankerTotal: null,
      playerWins: false,
      bankerWins: false,
      resultIsATie: false,
      resultIsADragon: false,
      resultIsAPanda: false,
      playerTotalCards: 0,
      bankerTotalCards: 0
    });
    this.seeIfThereIsEnoughMoney;
  }

  seeIfThereIsEnoughMoney() {
    if (this.state.myRunningChipTotal === 0) {
      console.log("You have run out of money. Please restart the game.");
      this.stop;
    }
    this.seeIfThereAreEnoughCards;
  }

  seeIfThereAreEnoughCards() {
    if (this.state.theShoe.length < 52) {
      console.log("The cut card is out. Please reshuffle.");
      this.stopTheGame;
    }
    console.log(
      "-------------------Hand",
      this.state.totalHands,
      " is over------------------------>"
    );
  }

  stopTheGame() {
    console.log("Game stopped. Shuffle the deck again to reset.");
    this.setState({
      playerWinningHands: 0,
      bankerWinningHands: 0,
      tieHands: 0,
      dragonHands: 0,
      pandaHands: 0,
      totalHands: 0,
      dealAHandButton: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id="decoration">
          <h1 style={{ textAlign: "center" }}>
            <span style={{ color: "black" }}>&spades;</span>
            <span style={{ color: "red" }}>&hearts;</span>
            <span style={{ color: "black" }}> &clubs;</span>
            <span style={{ color: "red" }}> &diams;</span>
            <span style={{ color: "yellow" }}> Casino Royale </span>
            <span style={{ color: "black" }}>&spades;</span>
            <span style={{ color: "red" }}>&hearts;</span>
            <span style={{ color: "black" }}> &clubs;</span>
            <span style={{ color: "red" }}> &diams;</span>
          </h1>
        </div>

        <div className="horizontal-line" />

        <div className="flex-container" id="cardRow">
          <div className="horizontal-card" id="bankerThird">
            <span className="suit" />
            <span className="image" />
          </div>
          <div className="vertical-card" id="bankerSecond">
            <span className="suit" />
            <span className="image" />
          </div>
          <div className="vertical-card" id="bankerFirst">
            <span className="suit" />
            <span className="image" />
          </div>
          <div className="verical-line" />
          <div className="vertical-card" id="playerSecond">
            <span className="suit" />
            <span className="image" />
          </div>
          <div className="vertical-card" id="playerFirst">
            <span className="suit" />
            <span className="image" />
          </div>
          <div className="horizontal-card" id="playerThird">
            <span className="suit" />
            <span className="image" />
          </div>
        </div>

        <div className="flex-container">
          <div>
            <h1>
              <span style={{ color: "red" }}>Banker</span>
            </h1>
          </div>
          <div>
            <h1>
              <span style={{ color: "lightblue" }}>Player</span>
            </h1>
          </div>
        </div>

        <div className="horizontal-line" />
        <br />

        <div id="bonusBox" className="flex-container">
          <form>
            <span style={{ color: "red" }}>Dragon</span>
            <input
              type="number"
              id="dragonBet"
              min="0"
              max="700"
              step="5"
              value={this.state.dragonBet}
            />
            <span style={{ color: "yellow" }}>Tie</span>
            <input
              type="number"
              id="tieBet"
              min="0"
              max="700"
              step="5"
              value={this.state.tieBet}
            />
            <span style={{ color: "lightblue" }}>Panda</span>
            <input
              type="number"
              id="pandaBet"
              min="0"
              max="700"
              step="5"
              value={this.state.pandaBet}
            />
          </form>
        </div>

        <div className="horizontal-line" />
        <br />

        <div id="betBox" className="flex-container">
          <div>
            <h1>
              <span style={{ color: "red" }}>Banker</span>
              <input
                type="number"
                id="bankerBet"
                min="0"
                max="14000"
                step="25"
                value={this.state.bankerBet}
              />
            </h1>
          </div>
          <div className="verical-line2" />
          <div>
            <h1>
              <span style={{ color: "lightblue" }}>Player</span>
              <input
                type="number"
                id="playerBet"
                min="0"
                max="14000"
                step="25"
                value={this.state.playerBet}
              />
            </h1>
          </div>
        </div>

        <div className="horizontal-line" />
        <br />

        <div style={{ textAlign: "center" }}>
          <span style={{ color: "yellow" }}>My Total: </span>
          <span style={{ color: "yellow" }} id="myChipTotal" />
        </div>

        <div className="horizontal-line" />
        <br />

        <div id="theControls">
          <button
            type="button"
            className="btn-brn-info"
            id="aboutTheGame"
            onClick={this.aboutTheGame}
          >
            About the Game (open the console)
          </button>
          <button
            type="button"
            className="btn-btn-primary"
            id="shuffleButton"
            onClick={this.ShuffleTheDeck}
          >
            Shuffle the deck
          </button>
          <button
            type="button"
            className="btn-btn=success"
            id="dealButton"
            onClick={this.dealAHand}
            disabled={!this.state.dealAHandButton}
          >
            Deal a Hand
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Baccarat;
