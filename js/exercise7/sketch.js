

let numOfSpokes = 4;
//let stepAngle = 360/numOfSpokes;
let stepAngle;

let radius;

function setup(){
  createCanvas(500,500);
  colorMode(HSB, width, height); // change colour mode and defined the range as the width and height
  angleMode(RADIANS); // Change the mode to RADIANS
  noStroke();
}

function draw(){

  background(0);

  numOfSpokes = map(mouseX, -150, 500, 6, 40, true);
  stepAngle = TWO_PI/numOfSpokes;
  let weight = map(mouseX, -150, 500, 1, 8, true);
  let hue = map(mouseX, 0, 500, 1, 255, true);
  let sat = map(mouseY, 0, 500, 1, 100, true);

  translate(width/2, height/2);
  for (let a = 0; a <= TWO_PI; a += stepAngle){  //Alpha, 2PI Radian circle
    radius = map(mouseX, 0, 500, -200, 200, true);
    strokeWeight(weight);
    stroke(hue, sat, 100);
    line(0,0, (radius * cos(a)), (radius * sin(a)) );
  }

}// end draw()


function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
