class Computer {
  generateRandomNumber () {
    return Math.floor(Math.random() * 10);
  }

  randomHandShape() { 
    let randomNumber = this.generateRandomNumber();
    let handShape = '';
    
    if (randomNumber >= 1 && randomNumber <= 3) {
      handShape = 'rock';
    } else if (randomNumber >= 4 && randomNumber <= 6) {
      handShape = 'paper';
    } else {
      handShape = 'scissor';
    }

    return handShape;
  }
}

export default Computer;