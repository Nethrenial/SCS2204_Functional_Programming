import { gameState } from "../game_state.js";
import { resetGameToBeginning, resetGameWithSamePlayers } from "../utils.js";
import { gameScreen } from "./game-screen.js";
import { welcomeScreen } from "./welcome-screen.js";

const playAgainButton = document.getElementById("play-again");
const homeButton = document.getElementById("home");
export const winScreen = document.querySelector(".win-screen");
export const winnerEl = document.querySelector(".win-screen-container > h1");
export const winnerScore = document.getElementById("winner-score");
export const loserScore = document.getElementById("loser-score");

playAgainButton.addEventListener("click", () => {
  gameState.stage = "game";
  resetGameWithSamePlayers();
  gameScreen.scrollIntoView({ behavior: "smooth" });
});

homeButton.addEventListener("click", () => {
  resetGameToBeginning();
  welcomeScreen.scrollIntoView();
});
