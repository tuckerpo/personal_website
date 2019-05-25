var acceleration = 0.0098;
var nDrops = 1000;
var drops = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
 // console.log(canvas.style());
  for (i = 0; i < nDrops; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  clear();
  background(105,105,105);
  drops.forEach(function(d) {
    d.drawAndDrop();
  });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function Drop() {
  this.initX = function() {
    this.x = random() * windowWidth;
  };
  this.initY = function() {
    this.y = -random() * windowHeight / 3; // Initialise rain somewhat off the screen
  };

  this.initX();
  this.y = random() * windowHeight;

  this.length = random() * 10;
  this.speed = random();

  this.drawAndDrop = function() {
    this.draw();
    this.drop();
  };

  this.draw = function() {
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.drop = function() {
    if (this.y < windowHeight) {
      this.y += this.speed;
      this.speed += acceleration;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
  };
}