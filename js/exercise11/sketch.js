let canvasW = 1000;
let canvasH = 500;

let transValX;
let transValY;
let rotValue;
let square = 100;
let numberOfSquares = 50;

let count = 1;

function setup(){
  createCanvas(canvasW,canvasH);
  colorMode(HSB, width, height); // change colour mode and defined the range as the width and height
  rectMode(CENTER);
  //noLoop();
}

function draw(){

  background(0);
  //frameRate(30);

  for (let j = canvasH-square; j>0-square; j--){
    for (let i = 0; i<numberOfSquares; i++){

      let col = lerpColor( color(275,55,69) , color(179,37,72),  j/i);
      col = lerpColor( color(190,100,70) , color(204,100,65),  j/i);

      transValX = i*square/2;
      transValY = j*square/4 ;

      push();
        translate(transValX,transValY);
        rotValue = atan2(mouseY-transValY, mouseX-transValX);
        let distance = dist(mouseX, mouseY, transValX, transValY);

        //Values for dynamic size
        let scaleValue = map(distance, 0, 500, 1, 4);
        let biggerScaleValue = map(distance, 0, 500, 5, 8);

        let startCol;
        let endCol;

        //rotate( rotValue );
        rotate(.80);

        //strokeWeight( map(mouseX, 0, canvasW, 1, 10, true) );

        fill(col);
        rect(0,0, square, square, 20);

        let rand = round(random(0,2));
        switch (rand) {
          case 0:
          // startCol = color( 280, 64, 83 );
          // endCol = color(280, 71, 33);
          col = color(269,57,82);
          strokeWeight(.5);
          break;

        case 1:
          // startCol = color( 183, 72, 86 );
          // endCol = color(183, 89, 23);
          col = color( 194,87,88);
          strokeWeight(2);
          break;

        case 2:
          // startCol = color( 309, 78, 96 );
          // endCol = color(0,59,83);
          col = color(174,50,77);
          strokeWeight(1);
          break;
        }

        //col = lerpColor(startCol, endCol, count/150);
        fill(col);
        rect(0,0, square, square, 20);

      pop();
      count++;
    }
  }

}// end draw()






function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
