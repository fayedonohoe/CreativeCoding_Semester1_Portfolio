
function setup(){
  createCanvas(500,500);
  colorMode(HSB, width, height, 100); // change colour mode and defined the range as the width and height
}

function draw(){

/// Ex 1 Part 2 - Colour Gradient
  noStroke();
  let stepX = mouseX + 10;
  let stepY = mouseY + 10;

  for (let y=0; y < height; y += stepY){
    for (let x=0; x < height; x += stepX){

      fill(x, height-y, 100);
      rect(x, y, 20, 20);
      //ellipse(x, y, 20, 20); // I like the ellipse more :)
    }
  }
/// End Ex 1, Part 2

}// end draw()

function keyPressed(){
  if(key=='s' || key=='S') {       //good practice to have lower and upper case
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
