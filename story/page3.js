var meat1;
var meat2;
var x = -100;
let bg;
var mousePressed= false;
var meatShown = false;

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
  button2.mousePressed(openPage);

}

function openPage() {
  window.open("page4.html", "_self");
}


function resetSketch() {
  bg = loadImage('table-05.png');
  canvas = createCanvas(725, 440);
  canvas.position(400, 100);
  canvas.mousePressed(showMeat);



}

function showMeat() {

  meat1 = createImg('meat-06.png');
  meat1.position(580, x);
  meat1.style('width', '100px');

  meat2 = createImg('meat-07.png');
  meat2.position(835, x);
  meat2.style('width', '100px');

  meatShown = true;
}


function draw() {
  background(bg);
  meat1;
  meat2;

  if (meatShown == true) {
    meat1.position(580, x);
    meat2.position(835, x);



    x = x + 3;
    while (x > height - 60) {
      x = -100;
    }

  }

}




function mousePressed() {
mousePressed = true;


}

// Restart all the Mover objects randoml
