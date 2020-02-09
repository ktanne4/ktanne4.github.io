function setup() {


  createCanvas(windowWidth, windowHeight);
  canvasbackground('#fae');

}
function setup() {
  // three-digit hexadecimal RGB notation
  background('#fae');
}

function draw() {
  background('#fae');

  ellipse(20, 20, 50, 50)
  ;
}
function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    /////only when pressed color
      fill( random(200), random(200), random(200), random(200));;
  } else {
    ////normal color
    fill( random(255,0,0), random(255,127,0), random(255,255,0), random(9,255,0));
  }
rect(mouseX, mouseY, 60, 60);
}


let button;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  button = createButton('click here');
  button.position(30, 30);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = random(200)
  background(val);
}
