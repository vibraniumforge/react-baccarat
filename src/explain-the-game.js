import React from "react";
import "./baccarat.css";

class ExplainTheGame extends React.Component {


componentDidMount() {
  console.log("WELCOME TO BACCARAT EASILY!!!");
  console.log("To play baccarat, you must bet on a side, Player or Banker.");
  console.log("The value of a hand is the sum of the cards.");
  console.log("10, J, Q, and K are worth 0 points.");
  console.log("A is 1 point, 2 is 2 points, 3 is 3 points, etc.");
  console.log("The value of a hand is the LAST digit of the total of all the cards.");
  console.log("For example 9+8 is not 17, but instead 7");
  console.log("Whichever side gets closest to 9, without going over wins!");
  console.log("You cannot bet on BOTH the player and the banker. Either or.");
  console.log("There are three optional bonus bets: Dragon 7, Tie, and Panda 8");
  console.log("The Dragon is a bet that the bank wins with a three card 7.");
  console.log("The Tie is a bet that the player and banker tie.");
  console.log("The Panda is a bet that the Player wins with a three card 8.");
  console.log(
    "A tutorial: https://www.caesars.com/casino-gaming-blog/latest-posts/table-games/baccarat/how-to-play-baccarat#.WysD-adKhPY"
  );
  console.log(
    "Another link: http://www.bay101.com/Table-Games/How-to-Play-EZ-Baccarat"
  );
  console.log(
    "A link for the banker hit chart: http://photos1.blogger.com/blogger/4295/1891/1600/baccarat-table02.2.jpg"
  );
  console.log("Let's shuffle!");
  console.log("Press the Shuffle the Deck button to shuffle.");
  console.log("Then make your bets.");
  console.log("Press Deal to deal a hand.");
}

}

export default ExplainTheGame;