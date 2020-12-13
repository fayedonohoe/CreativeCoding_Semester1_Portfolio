
function setup(){
  createCanvas(500,500);
  colorMode(HSB, width, height, 100); // change colour mode and defined the range as the width and height
  angleMode(DEGREES); // Change the mode to DEGREES
}

function draw(){

  noStroke();
  let stepX = 15;
  let stepY = 15;

  for (let y=0; y < height; y += stepY){
    for (let x=0; x < height; x += stepX){

      fill(x, height-y, 100);
      rotate(10);
      rect(x, y, 15, 15);
    }
  }

}// end draw()

function keyPressed(){
  if(key=='s' || key=='S') {       //good practice to have lower and upper case
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
