let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  // create a for loop that iterates over an x value from (0, height) -> (width, height)
  ellipse(width / 2, h - 25, 50, 50);
}
