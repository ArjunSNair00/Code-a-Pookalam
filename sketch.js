let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
}

function draw() {
  background("#000000");
  time += 0.015;
  translate(width / 2, height / 2);

  // Add your floral layers here!
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
