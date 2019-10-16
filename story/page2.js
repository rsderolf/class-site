var dragging = false;
var draggingone = false;
var draggingtwo = false;
var rollover = false;

let img1;
var holderoneStartX=1200;
var holderoneStartY=260;
var oneStartX;
var oneStartY;
var oneoffsetX, oneoffsetY;


let img2;
var holdertwoStartX=1100;
var holdertwoStartY=260;
var twoStartX;
var twoStartY;
var twooffsetX, twooffsetY;
var w = 100;
var h = 100;

function setup() {


  img1 = createImg('bottles-03.png');
  img1.position(oneStartX, oneStartY);

  img2 = createImg('bottles-04.png');
  img2.position(twoStartX, twoStartY);

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
  window.open("page3.html", "_self");
}


function resetSketch() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '2');


  oneStartX = 1200;
  oneStartY = 260;
  //
  //
  twoStartX = 1100;
  twoStartY = 260;

  // img1 = createImg('bottles-03.png');
  img1.position(holderoneStartX, holderoneStartY);
  img1.style('width', '100px'); // Load the image


  // img2 = createImg('bottles-04.png');
  img2.position(holdertwoStartX, holdertwoStartY);
  img2.style('width', '100px'); // Load the image


}

function draw() {

  if (mouseX > twoStartX && mouseX < twoStartX + w && mouseY > twoStartY && mouseY < twoStartY + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  if (mouseX > oneStartX && mouseX < oneStartX + w && mouseY > oneStartY && mouseY < oneStartY + h) {
    rollover = true;
  } else {
    rollover = false;
  }

  // Adjust location if being dragged
  if (dragging) {
    var button2 = createButton("continue");
    // button2.mousePressed(nextPage);
    button2.position(windowWidth - 100, windowHeight - 100);
    button2.style("font-family", "monospace");
    button2.size(60, 20);
    button2.style("background-color", "#41418C");
    button2.style("color", "white");

  }

  if (draggingtwo) {
    twoStartX = mouseX + twooffsetX;
    twoStartY = mouseY + twooffsetY;
    img2.position(twoStartX, twoStartY);
  }

  if (draggingone) {
    oneStartX = mouseX + twooffsetX;
    oneStartY = mouseY + twooffsetY;
    img1.position(oneStartX, oneStartY);
  }
}

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > twoStartX && mouseX < twoStartX + w && mouseY > twoStartY && mouseY < twoStartY + h) {
    dragging = true;
    draggingtwo = true;
    // If so, keep track of relative location of click to corner of rectangle
    twooffsetX = twoStartX - mouseX;
    twooffsetY = twoStartY - mouseY;
  } else if (mouseX > oneStartX && mouseX < oneStartX + w && mouseY > oneStartY && mouseY < oneStartY + h) {
    dragging=true;
    draggingone = true;
    // If so, keep track of relative location of click to corner of rectangle
    oneoffsetX = oneStartX - mouseX;
    oneoffsetY = oneStartY - mouseY;
  }
}

function mouseReleased() {
  // Quit dragging
  dragging = false;
  draggingone = false;
  draggingtwo = false;
}
