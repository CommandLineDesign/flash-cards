import React from "react";

import Deck from "../../library/Deck";
import Numbers from "../../static/Numbers";

import Card from "../Card/Card";

//get this from a database
// For testing let's get a static deck
const NumbersInstance = new Numbers();

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      deck: new Deck(NumbersInstance.native).deck,
      cardShown: false,
      currentIndex: 0,
      mode: "checkEnglish",
    };
  }

  logCards = () => {
    console.log(this.state.deck);
  };

  getCurrentCard = () => {
    return this.state.deck[this.state.currentIndex];
  };

  getCurrentQuestion = () => {
    //This is not ideal, figure out a better way to account for modes
    if (this.state.mode === "checkEnglish") {
      console.log("line 34");
      console.log(this.getCurrentCard());
      return this.getCurrentCard().korean;
    }
    if (this.state.mode === "checkKorean") {
      return this.getCurrentCard().english;
    }
  };

  checkAnswer = (answer) => {
    if (this.state.mode === "checkEnglish") {
      return this.getCurrentCard().checkEnglish(answer);
    }
    if (this.state.mode === "checkKorean") {
      return this.getCurrentCard().checkKorean(answer);
    }
  };

  getNewIndex = () => {
    //Add logic to rotate this back to 0 when index > length
    const newIndex = this.state.currentIndex + 1;
    this.setState({
      currentIndex: newIndex,
    });
  };

  handleAnswer = (answer) => {
    console.log("line 61");
    console.log(answer);
    this.checkAnswer(answer);
    this.getNewIndex();
  };

  getCard = () => {
    this.setState({
      cardShown: true,
    });
  };

  showCardControl = () => {
    return (
      <div>
        <div onClick={this.getCard}>Show a card</div>
      </div>
    );
  };

  getContent = () => {
    if (this.state.cardShown) {
      return (
        <Card
          question={this.getCurrentQuestion()}
          handleAnswer={this.handleAnswer}
        />
      );
    }
    return this.showCardControl();
  };

  render() {
    return (
      <div>
        <div onClick={this.logCards}>Click me to test!</div>
        {this.getContent()}
      </div>
    );
  }
}

export default Game;
