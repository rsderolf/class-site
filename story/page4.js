
let bubbles = [];


function setup() {

resetSketch();

var button = createButton("reset");
button.mousePressed(resetSketch);
button.position(windowWidth - 100, windowHeight - 50);
button.style("font-family", "monospace");
button.size(60, 20);
button.style("background-color", "#41418C");
button.style("color", "white");
button.style("", "white");
button.style("z-index","5");


var button2 = createButton("continue");
// button2.mousePressed(nextPage);
button2.position(windowWidth - 100, windowHeight - 100);
button2.style("z-index","5");
button2.style("font-family", "monospace");
button2.size(60, 20);
button2.style("background-color", "#41418C");
button2.style("color", "white");
// button2.mousePressed(createA('../page2/page2.html','this is a link',_blank));
button2.mousePressed(uniHide);

}

function uniHide() {
window.open("page5.html", "_self");
}


function resetSketch() {
bg = loadImage('castle.png');
bubbles = [];

canvas = createCanvas(windowWidth, windowHeight);
canvas.position(0, 0);
canvas.style('z-index', '0');
}


function draw() {
  background(bg);



  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

}


function mouseDragged() {
  let r = random(5, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}





class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;

  }

  move() {
    this.x = this.x + random(-8, 8);
    this.y = this.y + random(-8, 8);
  }

  show() {
    var r = random(0,100);
    var g = random(100,200);
    var b = random(0,100);
    fill(r,g,b,40);
    noStroke();

    // stroke(r,g,b);
    // strokeWeight(4);
    // noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}
