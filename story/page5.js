
let x=1000;
let y=900;
let z=1100;
var sizeVal;


function setup() {

  resetSketch();


  var button = createButton("Back to Class Site");

  // button.mousePressed(redraw());
  button.mousePressed(backSite);
  button.position(windowWidth - 160, windowHeight - 50);
  button.style("font-family", "monospace");
  button.size(140, 20);
  button.style("background-color", "#41418C");
  button.style("color", "white");
  button.style("z-index", "10");


  var button2 = createButton("Restart Story");
  // button2.mousePressed(nextPage);
  button2.position(windowWidth - 120, windowHeight - 100);
  button2.style("z-index", "5");
  button2.style("font-family", "monospace");
  button2.size(100, 20);

  button2.style("background-color", "#41418C");
  button2.style("color", "white");
  // button2.mousePressed(createA('../page2/page2.html','this is a link',_blank));
  button2.mousePressed(uniHide);




  sizeSlider = createSlider(50, 200, 200, 1);
  sizeSlider.position(10,10);
  // sizeSlider.mousePressed(sizePressed);

  apple = createImg('fruit-08.png');
  // apple.style('width', '100px');
  // apple.position(900,20);
  //
  orange = createImg('fruit-09.png');
  // orange.style('width', '100px');
  // orange.position(1000,20);
  //
  grape = createImg('fruit-10.png');
  // grape.style('width', '100px');
  // grape.position(1100,20);


  //Slider for fruit size




  //
  // apple.style('width', (sizeVal + 'px'));
  // orange.style('width', sizeVal + "px");
  // grape.style('width', sizeVal + "px");


}

function uniHide() {
  window.open("index.html", "_self");
}

function backSite() {
window.open("../index.html", "_self");
}


function resetSketch() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '0');

  img1 = createImg('reaching-15.png');
  img1.position(500, 0);
  img1.style('width', '650px');
  img1.style('margin-top', '150px');
  img1.style('z-index', '-2');

  fill(33,54,204,50);
  noStroke();
  var water = rect(0, windowHeight-windowHeight/2, windowWidth, windowHeight/2);





}


function mouseClicked() {
  mousePressed = true;

  orange.position(x, 20);
  x = x + 5;


  apple.position(y, 20);
  y = y + 5;


  grape.position(z, 20);
  z = z + 5;
  // var newPosition = mouseX;
  // orange.position(newPosition,20);
}

function mouseReleased() {
  mousePressed = false;
}

function draw() {
  var sizeVal = sizeSlider.value() + 'px';

  // var size = sizeVal + "px";

    // apple = createImg('fruit-08.png');
    apple.style('width', sizeVal);
    apple.position(900,20);

    // orange = createImg('fruit-09.png');
    orange.style('width', sizeVal);
    orange.position(1000,20);

    // grape = createImg('fruit-10.png');
    grape.style('width', sizeVal);
    grape.position(1100,20);
}

// function draw() {
//
//
//   if (mousePressed == true) {
//
//
//
//       orange.position(x, 20);
//       x = x + 5;
//
//
//       apple.position(y, 20);
//       y = y + 5;
//
//
//       grape.position(z, 20);
//       z = z + 5;
//
//   } else {
//     x=1000;
//     y=900;
//     z=1100;
//     apple.position(y,20);
//     orange.position(x,20);
//     grape.position(z,20);
//     // if (mousePressed = true) {
//     //   draw();
//     // }
//   }
//
//
// // let sizeVal = sizeSlider.value();
// //
// // apple.position(300,0);
// //
// //   apple.style('width', 'sizeVal');
// //
//
//
//     //
//     // drop.show();
//     // drop.update();
//
//
// }
