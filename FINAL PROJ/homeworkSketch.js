let numSegments = 10;
let direction = 'right';

const xStart = 0;
const yStart = 250;
const diff = 10;

let xCor = [];
let yCor = [];

let xDot = 0;
let yDot = 0;
let scoreElem;

function setup() {
  scoreElem = createDiv('You ate = 0');
  scoreElem.position(15, 15);
  scoreElem.id = 'You ate';
  scoreElem.style('color', 'brown');

  createCanvas(500, 250);
  frameRate(10);
  stroke(255,192,203);
  strokeWeight(8);

  updateDotCoordinates();

  for (let i = 0; i < numSegments; i++) {
    xCor.push(xStart + i * diff);
    yCor.push(yStart);
  }
}

function draw() {

  background(34,139,34);
  for (let i = 0; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 2], yCor[i + 2]);
  }
  updateWormCoordinates();
  checkGameStatus();
  checkForDot();
}
function updateWormCoordinates() {
  for (let i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}

function checkGameStatus() {
  if (
    xCor[xCor.length - 1] > width ||
    xCor[xCor.length - 1] < 0 ||
    yCor[yCor.length - 1] > height ||
    yCor[yCor.length - 1] < 0 ||
    checkWormCollision()
  ) {
    noLoop();
    const scoreVal = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Game ended! Your score was : ' + scoreVal);
  }
}
//deathhhhh

function checkWormCollision() {
  const WormHeadX = xCor[xCor.length - 1];
  const WormHeadY = yCor[yCor.length - 1];
  for (let i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === WormHeadX && yCor[i] === WormHeadY) {
      return true;
    }
  }
}
// when die
function checkForDot() {
  point(xDot, yDot);
  if (xCor[xCor.length - 1] === xDot && yCor[yCor.length - 1] === yDot) {
    const prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Score = ' + (prevScore + 1));
    xCor.unshift(xCor[0]);
    yCor.unshift(yCor[0]);
    numSegments++;
    updateDotCoordinates();
  }
}

function updateDotCoordinates() {

  xDot = floor(random(10, (width - 100) / 10)) * 10;
  yDot = floor(random(10, (height - 100) / 10)) * 10;
}

function keyPressed() {
  switch (keyCode) {
    case 37:
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case 39:
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case 38:
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case 40:
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
  }
}
