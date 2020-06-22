// import { SCORE, BEST, CANVAS_HEIGHT } from "./constants.js";

const draw = (function () {
  const canvas = document.getElementById('canvas');
  console.log('Drawing the canvas', canvas);
  const ctx = canvas.getContext('2d');

  canvas.width = 500;
  canvas.height = 800;
})()

const play = function () {
  console.log("Game has started");
  // const score = SCORE;
};

const animate = function () {
  // Creates an infinite loop - as the requestAnimationFrame function calls the animate function over and over
  requestAnimationFrame(animate);
}