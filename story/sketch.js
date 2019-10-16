let paths = [];
let painting = false;
let next = 0;
let current;
let previous;

var canvas;
var button2;



// let regular;
// function preload() {
//   regular = loadFont('assets/LydianMTPro.otf');
// }

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

  var button2 = createButton("continue");
  // button2.mousePressed(nextPage);
  button2.position(windowWidth - 100, windowHeight - 100);
  button2.style("font-family", "monospace");
  button2.size(60, 20);
  button2.style("background-color", "#41418C");
  button2.style("color", "white");
  // button2.mousePressed(createA('../page2/page2.html','this is a link',_blank));
  button2.mousePressed(uniHide);





}

function uniHide() {
  window.open("page2.html", "_self");
}

//creates static homepage
function resetSketch() {

  // button2.remove();

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');




  painting = false;


  //starts list
  current = createVector(0, 0);
  previous = createVector(0, 0);
  paths = [];

  background(11, 11, 63);

  //creates stars
  for (var i = 0; i < 200; i++) {
    var diameter = random(2, 5);
    noStroke();
    fill(255);
    ellipse(random(width), random(height), diameter, diameter);
  }



}


//in case of resized canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resetSketch();
}



function mousePressed() {
  next = 0;
  painting = true;
  previous.x = mouseX;
  previous.y = mouseY;
  paths.push(new Path());
}

function mouseReleased() {
  painting = false;
}



function draw() {

  if (millis() > (next+70) && painting==true) {

    current.x = mouseX;
    current.y = mouseY;


    let force = p5.Vector.cross(current, previous);
    force.mult(0.05);



    // Add new particle
    paths[paths.length - 1].add(current, force);

    // Schedule next circle
    next = millis() + random(100);

    // Store mouse values
    previous.x = current.x;
    previous.y = current.y;
  }

  if (painting == true) {



  }



  // Draw all paths
  for (let i = 0; i < paths.length; i++) {
    paths[i].update();
    paths[i].display();
  }
}


// function nextPage() {

  // window.open("page2.html", _self);
  // ;
  // link("page2.html", "_new");
// }

// var url = '<a href="https://en.wikipedia.org/wiki/'" target="_blank" rel="nofollow">https://en.wikipedia.org/wiki/'</a>;



// function link(url, winName, options) {
//   winName && open(url, winName, options) || (location = url);
// }



// function nextPage() {
//   window.location.href = "<a href="page2.html"</a>";
// }




class Path{
  constructor(x, y, r) {
    this.particles = [];
    this.hue = random(100);
  }

  add(position, force) {
    this.particles.push(new Particle(position, force, this.hue));
  }

  update() {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }
  }

  display() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].lifespan <= 0) {
        this.particles.splice(i, 1);
      } else {
        this.particles[i].display(this.particles[i + 1]);
      }
    }
  }
}


class Particle {
  constructor(position, force, hue) {
    this.position = createVector(position.x, position.y);
    this.velocity = createVector(force.x, force.y);
    this.drag = 0.95;
    this.lifespan = 255;
  }

  update() {
    // Move it
    this.position.add(this.velocity);
    // Slow it down
    this.velocity.mult(this.drag);
    // Fade it out
    this.lifespan--;
  }

  // Draw particle and connect it with a line
  // Draw a line to another
  display(other) {
    stroke(255, this.lifespan);
    fill(255, this.lifespan / 2);
    ellipse(this.position.x, this.position.y, 8, 8);

    // If we need to draw a line
    if (other) {
      line(this.position.x, this.position.y, other.position.x, other.position.y);
    }
  }

}
