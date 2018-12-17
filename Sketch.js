let leftScore = 0;
let rightScore = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
  ball = new Ball();
  left = new PlayerPaddle();
  right = new AIPaddle();
}

function draw() {
  background(51);
  ball.checkLeftCollisions(left);
  ball.checkRightCollisions(right);

  left.show();
  right.show();
  right.move();
  left.move();
  left.update();
  right.update();
  ball.update();
  ball.edges();
  ball.show();

  dispScore();
}


function dispScore() {
  fill(0);
  textSize(32);
  text(leftScore, 32, 40);
  text(rightScore, width - 64, 40);
}
