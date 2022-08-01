import {
  diceImgs,
  turnEl,
  buttons,
  roundEl,
  scoreElements,
  winnerEl,
  winnerScore,
  loserScore,
  playerName1,
  playerName2,
  player1Input,
  player2Input,
} from "./components/index.js";
import { gameState } from "./game_state.js";
import { mouseClick } from "./sounds.js";

export function initialize() {
  gameState.player1.name = "";
  gameState.player2.name = "";
  gameState.stage = "welcome";
  gameState.player1.turn = true;
  gameState.player2.turn = false;
  gameState.player1.score = 0;
  gameState.player2.score = 0;

  // play click sound with every button click
  buttons.forEach((btn) => {
    btn.addEventListener("mousedown", () => {
      mouseClick.currentTime = 0;
      mouseClick.volume = 0.5;
      mouseClick.play();
    });
  });
}

export function getRandomTwoDices() {
  return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
}

export function setRandomTurn() {
  const [dice1, dice2] = getRandomTwoDices();
  diceImgs.forEach((img, index) => {
    img.setAttribute("src", `./img/dice_${index === 0 ? dice1 : dice2}.png`);
  });

  gameState.player1.turn = false;
  gameState.player2.turn = false;
  const turn = Math.floor(Math.random() * 2) + 1;
  turn === 1
    ? (gameState.player1.turn = true)
    : (gameState.player2.turn = true);

  turnEl.innerHTML = `${
    gameState.player1.turn ? gameState.player1.name : gameState.player2.name
  }'s turn`;
}

export function resetGameWithSamePlayers() {
  setRandomTurn();
  gameState.round = 1;
  roundEl.innerHTML = `Round ${gameState.round}`;
  gameState.player1.score = 0;
  gameState.player2.score = 0;
  scoreElements["player1"].innerHTML = 0;
  scoreElements["player2"].innerHTML = 0;
  winnerEl.innerHTML = "";
  winnerScore.innerHTML = "";
  loserScore.innerHTML = "";
}

export function resetGameToBeginning() {
  resetGameWithSamePlayers();
  gameState.stage = "welcome";
  gameState.player1.name = "";
  gameState.player2.name = "";
  gameState.player1.turn = false;
  gameState.player2.turn = false;
  playerName1.innerHTML = "Player 1";
  playerName2.innerHTML = "Player 2";
  turnEl.innerHTML = "";
  player1Input.value = "";
  player2Input.value = "";
}
