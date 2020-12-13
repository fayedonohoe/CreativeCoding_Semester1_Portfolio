let numOfSegments = 80;
let stepAngle = 360/numOfSegments;
let radius = 100;

function setup(){
  createCanvas(500,500);
  colorMode(HSB, width, height, 100); // change colour mode and defined the range as the width and height
  angleMode(DEGREES); // Change the mode to DEGREES
  noStroke();
}

function draw(){

//Create Colour Wheel
  beginShape(TRIANGLE_FAN);
    //vertex(250,250);  //Fixed Centre Point
    vertex(mouseX, mouseY); // Way more exciting
    for (let a = 0; a <= 360; a += stepAngle){  //Alpha, 360 degree circle
      let vx = (radius * cos(a)) + 250;
      let vy = (radius * sin(a)) + 250;
      vertex(vx, vy);
      fill(a,100,100);
    }// end for
  endShape();
}// end draw()



function keyPressed(){
  if(key=='s' || key=='S') {            //good practice to have lower and upper case
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
