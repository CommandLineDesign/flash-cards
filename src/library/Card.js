export default class Card {
  constructor(card) {
    this.korean = card.korean;
    this.english = card.english;
    this.timesCorrect = 0;
    this.timesWrong = 0;
  }

  checkEnglish(answer) {
    if (answer === this.english) {
      this.timesCorrect++;
      return true;
    }
    return false;
  }

  checkKorean(answer) {
    if (answer === this.korean) {
      this.timesCorrect++;
      return true;
    }
    return false;
  }
}
