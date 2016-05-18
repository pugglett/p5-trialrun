// var img1, img2;

var smiley;

function preload() {
  // img1 = loadImage("images/sitting.png");
  // img2 = loadImage("images/standing.png");
  smiley = loadImage('images/smile.png');
}

function setup() {
  createCanvas(1000, 1000);
  // img1 = loadImage("images/sitting.png");
  // img2 = loadImage("images/standing.png");
}

function draw() {
  function onClick() {
    if (mouseX >= 500) {
      image(img1, mouseX, mouseY);
    } else {
      image(img2, mouseX, mouseY);
    }
  }
}
