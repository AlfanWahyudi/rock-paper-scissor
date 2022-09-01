class Match {
  constructor() {
    this.scorePlayer = 0;
    this.scoreComputer = 0;
  }

  winner(playerHandShape, computerHandShape) {
    if (playerHandShape == 'rock' && computerHandShape == 'scissor') {
      return 'player';
    } else if (playerHandShape == 'paper' && computerHandShape == 'rock') {
      return 'player';
    } else if (playerHandShape == 'scissor' && computerHandShape == 'paper') {
      return 'player';
    } else if (computerHandShape == 'rock' && playerHandShape == 'scissor') {
      return 'computer';
    } else if (computerHandShape == 'paper' && playerHandShape == 'rock') {
      return 'computer';
    } else if (computerHandShape == 'scissor' && playerHandShape == 'paper') {
      return 'computer';
    }
  }

  scores(winner) {
    if (winner == 'player') {
      this.scorePlayer += 1;
    }

    if (winner == 'computer') {
      this.scoreComputer += 1;
    }

    return {
      scorePlayer: this.scorePlayer,
      scoreComputer: this.scoreComputer
    }
  }
}

export default Match;