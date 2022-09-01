import '../main.css';
import Computer from './computer';
import Match from './match';
import Paper from './hand_shape/paper';
import Rock from './hand_shape/rock';
import Scissor from './hand_shape/scissor';

const btnRock = document.querySelector('#buttonRock');
const btnPaper = document.querySelector('#buttonPaper');
const btnScissor = document.querySelector('#buttonScissor');

// Computer Hand Elem
const rockElemComputer = document.querySelector('.right-hand .rock-hand');
const paperElemComputer = document.querySelector('.right-hand .paper-hand');
const scissorElemComputer = document.querySelector('.right-hand .scissor-hand');

// Player Hand Elem
const rockElemPlayer = document.querySelector('.left-hand .rock-hand');
const paperElemPlayer = document.querySelector('.left-hand .paper-hand');
const scissorElemPlayer = document.querySelector('.left-hand .scissor-hand');

// total Score 
const scorePlayerElem = document.querySelector('#totalScorePlayer');
const scoreComputerElem = document.querySelector('#totalScoreComputer');

// OOP Instantiations
const rockComputer = new Rock(rockElemComputer);
const paperComputer = new Paper(paperElemComputer);
const scissorComputer = new Scissor(scissorElemComputer);

const rockPlayer = new Rock(rockElemPlayer);
const paperPlayer = new Paper(paperElemPlayer);
const scissorPlayer = new Scissor(scissorElemPlayer);

const computer = new Computer();
const match = new Match();

function showComputerHandShape(computerHandShape) {
  switch(computerHandShape) {
    case 'rock': 
      rockComputer.hidden();
      setTimeout(() => {
        rockComputer.show();
        paperComputer.hidden();
        scissorComputer.hidden();
      }, 5)
      break;
    case 'paper':
      paperComputer.hidden();
      setTimeout(() => {
        rockComputer.hidden();
        paperComputer.show();
        scissorComputer.hidden();
      }, 5)
      break;
    case 'scissor':
      scissorComputer.hidden();
      setTimeout(() => {
        rockComputer.hidden();
        paperComputer.hidden();
        scissorComputer.show();
      }, 5);
      break;
    default:
      console.error(`please insert only 'rock', 'paper', and 'scissor'`);
  }
}

const disabledButton = (...buttons) => {
  buttons.forEach((btn) => btn.setAttribute('disabled', ''));
}

const activatedButton = (...buttons) => {
  buttons.forEach((btn) => {
    if (btn.hasAttributes('disabled')) {
      btn.removeAttribute('disabled');
    }
  });
}

btnRock.addEventListener('click', () => {
  rockPlayer.hidden();
  disabledButton(btnRock, btnPaper, btnScissor);
  let computerHandShape = computer.randomHandShape();
  console.log('ini jalan');

  setTimeout(() => {
    rockPlayer.show();
    paperPlayer.hidden();
    scissorPlayer.hidden();
  }, 5);

  showComputerHandShape(computerHandShape);

  setTimeout(() => {
    let winner = match.winner('rock', computerHandShape);
    const {scorePlayer, scoreComputer} = match.scores(winner);
    scorePlayerElem.textContent = scorePlayer;
    scoreComputerElem.textContent = scoreComputer;

    activatedButton(btnRock, btnPaper, btnScissor);
  }, 900);
});

btnPaper.addEventListener('click', () => {
  disabledButton(btnRock, btnPaper, btnScissor);
  paperPlayer.hidden();
  let computerHandShape = computer.randomHandShape();

  setTimeout(() => {
    rockPlayer.hidden();
    paperPlayer.show();
    scissorPlayer.hidden();
  }, 5);
  
  showComputerHandShape(computerHandShape);

  setTimeout(() => {
    let winner = match.winner('paper', computerHandShape);
    const {scorePlayer, scoreComputer} = match.scores(winner);
    scorePlayerElem.textContent = scorePlayer;
    scoreComputerElem.textContent = scoreComputer;

    activatedButton(btnRock, btnPaper, btnScissor);
  }, 900);
});

btnScissor.addEventListener('click', () => {
  disabledButton(btnRock, btnPaper, btnScissor);
  scissorPlayer.hidden();
  let computerHandShape = computer.randomHandShape();

  setTimeout(() => {
    rockPlayer.hidden();
    paperPlayer.hidden();
    scissorPlayer.show();
  }, 5);

  showComputerHandShape(computerHandShape);


  setTimeout(() => {
    let winner = match.winner('scissor', computerHandShape);
    const {scorePlayer, scoreComputer} = match.scores(winner);
    scorePlayerElem.textContent = scorePlayer;
    scoreComputerElem.textContent = scoreComputer;

    activatedButton(btnRock, btnPaper, btnScissor);
  }, 900);
});
