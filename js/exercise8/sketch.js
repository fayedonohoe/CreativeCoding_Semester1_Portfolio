let canvasW = 500;
let canvasH = 500;

let transValX;
let transValY;
let rotValue;
let square = 50;

function setup(){
  createCanvas(canvasW,canvasH);
  colorMode(HSB, width, height); // change colour mode and defined the range as the width and height
  rectMode(CENTER);
}

function draw(){

  background(0);

  for (let j = 0; j<canvasH; j+=square){
    for (let i = 0; i<canvasW; i+=square){

      let col = lerpColor( color(176,17,92) , color(261,94,64), i/j);
      //Johns Solution
      //let col = lerpColor( startColour , endColour, i+j*numberOfSquares/400);

      transValX = i+(square/2);
      transValY = j+(square/2);

      push();
        translate(i+25,j+25);
        rotValue = atan2(mouseY-j, mouseX-i);
        rotate( rotValue );

        //fill(173,78,92);
        fill(col);
        strokeWeight(1);
        stroke(0);
        rect(0,0,square,square);
      pop();
    }
  }

}// end draw()






function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
