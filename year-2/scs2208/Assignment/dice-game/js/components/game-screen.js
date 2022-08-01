import { gameState } from "../game_state.js";
import { getRandomTwoDices } from "../utils.js";
import { diceSound } from "../sounds.js";
import { loserScore, winnerEl, winnerScore, winScreen } from "./index.js";
export { loserScore, winnerEl, winnerScore, winScreen } from "./win-screen.js";

export const gameScreen = document.querySelector(".game-screen");
export const dices = document.querySelector(".dices");
export const diceImgs = document.querySelectorAll(".dices img");
export const playerName1 = document.querySelector(".player-name--1");
export const playerName2 = document.querySelector(".player-name--2");
export const turnEl = document.querySelector(".turn");
export const roundEl = document.querySelector(".round");
const rollButton = document.getElementById("roll");

export const scoreElements = {
  player1: document.querySelector("#player1-score"),
  player2: document.querySelector("#player2-score"),
};

rollButton.addEventListener("click", () => {

  // play the dice rolling soundtrack
  diceSound.currentTime = 0;
  diceSound.play();

  //animate each dice by setting animated class
  diceImgs.forEach((img) => {
    img.classList.add("animated");
  });

  setTimeout(() => {
    diceImgs.forEach((img) => {
      img.classList.remove("animated");
    });
    diceSound.pause();

    const [dice1, dice2] = getRandomTwoDices();

    //setting the dice images according to resulting dice values
    diceImgs.forEach((img, index) => {
      img.src = `./img/dice_${index === 0 ? dice1 : dice2}.png`;
    });

    //current player
    const player = gameState.player1.turn ? "player1" : "player2";

    if (dice1 === dice2 && dice1 === 1) {
      gameState[player].score = 0;
      gameState[player].turn = false;
      gameState[player === "player1" ? "player2" : "player1"].turn = true;
    } else if (dice1 === dice2 && dice1 !== 1) {
      gameState[player].score += dice1 + dice2;
      gameState[player].turn = true;
      gameState[player === "player1" ? "player2" : "player1"].turn = false;
    } else {
      gameState[player].score += dice1 + dice2;
      gameState[player].turn = false;
      gameState[player === "player1" ? "player2" : "player1"].turn = true;
    }

    scoreElements[player].innerHTML = gameState[player].score;
    // update current layers score in html

    //set the html of turn
    turnEl.innerHTML = `${
      gameState.player1.turn ? gameState.player1.name : gameState.player2.name
    }'s turn`;


    gameState.round++;

    //setting the round in html
    roundEl.innerHTML = `Round ${gameState.round}`;

    if (gameState[player].score >= 100) {

      // if some player wins, set congratulations msg, scores and navigate to win screen to display them
      winnerEl.innerHTML = `<h1>Congratulations <br/> ${gameState[player].name} !</h1>`;
      winnerScore.innerHTML = `Your score <br/> <span> ${gameState[player].score}</span>`;
      loserScore.innerHTML = `${
        gameState[player === "player1" ? "player2" : "player1"].name
      }'s score <br/> <span> ${
        gameState[player === "player1" ? "player2" : "player1"].score
      }</span>`;
      gameState.stage = "win";
      winScreen.scrollIntoView({ behavior: "smooth" });

      // save marks to localStorage
      let scores = localStorage.getItem("scores");
      if (!scores) {
        // if scores kye is unavailable create it with this score
        localStorage.setItem(
          "scores",
          JSON.stringify([
            {
              player1: gameState["player1"],
              player2: gameState["player2"],
            },
          ])
        );
      } else {
        // if already available, push this score to already available scores
        scores = JSON.parse(scores);
        scores.unshift({
          player1: gameState["player1"],
          player2: gameState["player2"],
        });
        localStorage.setItem("scores", JSON.stringify(scores));
      }
    }
  }, 1000);
});
