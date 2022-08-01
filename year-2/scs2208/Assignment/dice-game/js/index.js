import "./components/index.js";
import { initialize } from "./utils.js";
import { welcomeScreen } from "./components/welcome-screen.js";


//load into welcome screen when page refreshes
window.addEventListener("load", () => {
  welcomeScreen.scrollIntoView();
});

// initializing game
initialize();




