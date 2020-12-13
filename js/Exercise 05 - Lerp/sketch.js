
function setup(){
  createCanvas(500,500);
  colorMode(HSB, width, height); // change colour mode and defined the range as the width and height
  noStroke();
}

function draw(){

  let startColour = color(0, 100, 100);
  let endColour = color(240, 100, 100);
  let x = 0;

  for(let i=0; i<=10; i++){
    fill(lerpColor(startColour, endColour, i/10));
    rect(x, 250, 50, 50);
    x += 50;
  }
}// end draw()

function keyPressed(){
  if(key=='s' || key=='S') {            //good practice to have lower and upper case
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
