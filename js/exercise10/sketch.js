let canvasW = 500;
let canvasH = 500;

let transValX;
let transValY;
let rotValue;
let square = 50;
let numberOfSquares = 50;

function setup(){
  createCanvas(canvasW,canvasH);
  colorMode(HSB, width, height); // change colour mode and defined the range as the width and height
  rectMode(CENTER);
  noLoop();
}

function draw(){

  background(0);

  for (let j = 0; j<numberOfSquares; j++){
    for (let i = 0; i<numberOfSquares; i++){

      let col = lerpColor( color(3,100,50) , color(215,100,100), j/i);

      transValX = i*square;
      transValY = j*square;

      push();
        translate(transValX,transValY);
        rotValue = atan2(mouseY-transValY, mouseX-transValX);
        let distance = dist(mouseX, mouseY, transValX, transValY);

        //Values for dynamic size
        let scaleValue = map(distance, 0, 500, 1, 4);
        let biggerScaleValue = map(distance, 0, 500, 5, 8);

        //rotate( rotValue );
        noFill();
        strokeWeight(2);
        //stroke(i,0,numberOfSquares-j);
        stroke(col);

        let rand = round(random(0,2));
        if (rand == 0) {
          line(0, square, square, 0);
        }
        else {
          line(0, 0, square, square);
        }
        // else{
        //   ellipse(0, 0, square/2, square/2);
        // }

        // ellipse(0,0, square/scaleValue, square/scaleValue);
        // noStroke();
        // fill(180);
        //fill(col);
        //ellipse(15, 0, square/biggerScaleValue, square/biggerScaleValue);
      pop();
    }
  }

}// end draw()






function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
