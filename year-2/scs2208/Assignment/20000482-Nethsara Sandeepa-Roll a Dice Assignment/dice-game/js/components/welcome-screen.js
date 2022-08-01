import { gameState } from "../game_state.js";
import {
  scoreboard,
  scoreboardScreen,
  scoreboardTitle,
  noRecords,
} from "./scoreboard-screen.js";

export const welcomeScreen = document.querySelector(".welcome-screen");
const playerSelectionScreen = document.querySelector(
  ".player-selection-screen"
);
const startPlayBtn = document.getElementById("play-btn");
const scoreboardBtn = document.getElementById("scoreboard-btn");

startPlayBtn.addEventListener("click", () => {
  gameState.stage = "player-selection";
  playerSelectionScreen.scrollIntoView({ behavior: "smooth" });
});

scoreboardBtn.addEventListener("click", () => {
  gameState.stage = "history";

  //get scores
  let scores = localStorage.getItem("scores");
  if (scores) {
    // if scores are already available, parse them as an array and populate scoreboard with them
    scoreboardTitle.style.display = "block";
    scoreboard.style.display = "flex";
    noRecords.style.display = "none";
    scores = JSON.parse(scores);
    scoreboard.innerHTML = "";
    scores.forEach((score) => {
      const scoreEl = document.createElement("div");
      scoreEl.classList.add("scoreboard-item");
      scoreEl.innerHTML = `
            <p class="scoreboard-item--player-1">${score.player1.name} : ${score.player1.score}</p>
            <p class="scoreboard-item--player-2">${score.player2.name} : ${score.player2.score}</p>
            `;
      scoreboard.appendChild(scoreEl);
    });
  } else {
    // else display No previous game records message
    scoreboardTitle.style.display = "none";
    scoreboard.style.display = "none";
    noRecords.style.display = "block";
  }
  scoreboardScreen.style.display = "block";
  scoreboardScreen.scrollIntoView();
});
