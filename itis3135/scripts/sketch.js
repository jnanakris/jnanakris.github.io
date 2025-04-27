let brushSize = 5;
let brushColor;

function setup() {
  createCanvas(600, 400);
  background(230);
  brushColor = color(0); // Default brush color: black
}

function draw() {
  if (mouseIsPressed) {
    stroke(brushColor);
    strokeWeight(brushSize);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    brushColor = color(random(255), 0, 0); // random red shades
  } else if (key === 'g' || key === 'G') {
    brushColor = color(0, random(255), 0); // random green shades
  } else if (key === 'b' || key === 'B') {
    brushColor = color(0, 0, random(255)); // random blue shades
  } else if (key === 'c' || key === 'C') {
    background(230); // Clear the canvas
  }
}
