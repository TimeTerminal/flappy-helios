// import { SCORE, BEST, CANVAS_HEIGHT } from "./constants.js";

const play = function () {
  // const score = SCORE;
  console.log("Game has started");
  const canvas = document.getElementById("canvas");

  canvas.width = 800;
  canvas.height = 800;

};

const animate = function() {
  // Creates an infinite loop - as the requestAnimationFrame function calls the animate function over and over
  requestAnimationFrame(animate);
}


play();
