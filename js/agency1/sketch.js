let canvasW = 500;
let canvasH = 500;

let x = canvasW/2;
let y = canvasH/2;

let steps = [-2,-1,1,2];
//let stepsY = [];

let stepSize = 5;

//let transValX;
//let transValY;


function setup(){
  createCanvas(canvasW,canvasH);
  rectMode(CENTER);
  background(0);

  //noLoop();
}


function draw(){

    //background(0);
    frameRate(90);
    
    //fill(120, 214, 203);
    noFill();
    stroke(120, 214, 203)
    //ellipse(x, y, 20, 20);
    
    //let rand = round(random(-1,1));
    let rand = round(random(3));
    let step = steps[rand];
    x += step * stepSize;
    ellipse(x, x, 30, 30);

}// end draw()



function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
