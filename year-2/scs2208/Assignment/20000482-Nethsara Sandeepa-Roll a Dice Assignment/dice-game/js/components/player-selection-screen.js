import { gameState } from "../game_state.js";
import { welcomeScreen } from "./welcome-screen.js";
import {
  gameScreen,
  playerName1,
  playerName2,
  roundEl,
} from "./game-screen.js";
import { setRandomTurn } from "../utils.js";

export const playerSelectionScreen = document.querySelector(
  ".player-selection-screen"
);
const playerSelectButton = document.getElementById("player-select-btn");
export const player1Input = document.getElementById("player1-name");
export const player2Input = document.getElementById("player2-name");
const backToWelcomeScreenButtons =
  document.querySelectorAll(".back-to-welcome");

playerSelectButton.addEventListener("click", () => {
  //set player 1 & player 2 names

  gameState.player1.name = player1Input.value || "Player 1";
  gameState.player2.name = player2Input.value || "Player 2";
  gameState.stage = "game";

  // set the game round text
  roundEl.innerHTML = `Round ${gameState.round}`;

  //display correct player names
  playerName1.innerHTML = gameState.player1.name;
  playerName2.innerHTML = gameState.player2.name;

  //set turn to either player 1 or player 2, alo update HTML accordingly
  setRandomTurn();
  gameScreen.scrollIntoView({ behavior: "smooth" });
});

backToWelcomeScreenButtons.forEach((btn) => {
  //if any back to home buttons are clicked, reset the game and scroll to welcome screen
  btn.addEventListener("click", () => {
    gameState.stage = "welcome";
    gameState.player1.name = "";
    gameState.player2.name = "";
    player1Input.value = "";
    player2Input.value = "";
    welcomeScreen.scrollIntoView();
  });
});
