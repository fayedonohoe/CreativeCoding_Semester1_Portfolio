//Global variables for TRIANGLE_FAN / wheel
let numOfSegments;
let stepAngle;
let radius;
let spotlight;

let mainWidth = 800;
let mainHeight = 500;
let gridW = 500;
let gridH = 500;
let bright;

let tempShape = [];
let shapes = [];
let tempFill;

var music;
// function preload() {
//   soundFormats('mp3');
//   music = loadSound('sandstorm.mp3');
// }

function setup(){
  createCanvas(windowWidth,mainHeight);
  colorMode(HSB, gridW, gridH, 100); // change colour mode and defined the range as the mainWidth and height
  angleMode(DEGREES); // Change the mode to DEGREES
  //music.pause(); // song is ready to play during setup() because it was loaded during preload

}

function draw(){
  background(0,20,20);

  numOfSegments = map(mouseX, mainWidth-gridW, mainWidth, 10, 30, true);
  //numOfSegments = 16;
  stepAngle = 360/numOfSegments;
  radius = 40;

  noStroke();
  let stepX = 15;
  let stepY = 15;

  //Grid loop
  for (let y=0; y <= gridH; y += stepY){
    for (let x=0; x <= gridW; x += stepX){

      fill(x, gridH-y, 100);
      rect(x+300, y, 20, 20);
    }
  }//end grid loop


  //Create Spotlight
    spotlight = beginShape(TRIANGLE_FAN);
      vertex(mouseX,mouseY); // FOR SPOTLIGHT

      push();
        rotate(45);

        let bright = 10;
        for (let a = 0; a <= 360; a += stepAngle){  //Alpha, 360 degree circle

          //CALCULATE OFFSET VALUES BASED ON MOUSE POS
          //Keep spotlight within the left frame
          let yOffset = mouseY*-0.8;
          let xOffset = map(mouseX, 300, mainWidth, -150, 200, true);

          //Draw each vertex
          let vx = (radius * cos(a)) + 150 + xOffset*-0.7;
          let vy = (radius * sin(a)) + gridH-50 + yOffset ;
          vertex(vx, vy);

          // variables set for wider use
          bright = a*100/360;
          let colX = mouseX;
          let colY = mouseY;
          tempFill = color(colX-(mainWidth-gridW), gridH-colY, bright);
          fill(tempFill);

          //Add this vertex to this shapes array
          let vertexVector = new createVector(vx, vy);
          tempShape.push(vertexVector, tempFill);

          push();
          rotate(-45);
             textSize(16);
             fill(100);
             textFont('Helvetica');

             //Top Right
             textAlign(RIGHT);
             text('Press "C" To Clear Screen' , 290, 20);
              //   text('Hue: ' + int(map(mouseX, 300, mainWidth, 0, 360, true)) , 290, 20); // Displays the hue value
              //   text('Saturation: ' + int(map(mouseY, 0, height, 0, 360, true)) , 290, 40); // Displays the saturation value
              //   text('Brightness: ' + int(map(a, 0, 360, 0, 100)) , 290, 60); // Displays the brightness value
              //   //Bottom Left
              //   textAlign(LEFT);
              //   text('Hue: ' + int(map(mouseX, 300, mainWidth, 0, 360, true)) , 10, 450); // Displays the hue value
              //   text('Saturation: ' + int(map(mouseY, 0, height, 0, 360, true)) , 10, 470); // Displays the saturation value
              //   text('Brightness: ' + int(map(bright, 0, 360, 0, 100)) , 10, 490); // Displays the brightness value
          pop();

        } // end for
      pop();
    endShape();

    tempShape = [];   //Empty the tempShape array

    // If there are shapes stores in the array, draw them on screen
    if (shapes != 0){
      for(let i = 0; i < shapes.length; i++){
        drawShapeFromArray(shapes[i]);
      }
    }// end if
}// end draw()

// function mousePressed(){
//   music.play();
// }

function mouseClicked(){
  shapes.push(tempShape);
}

function drawShapeFromArray(vertices){
  newShape = beginShape(TRIANGLE_FAN);
  vertex( random(0,300), 500); // Centre point

  // Iterate through vertices array, taking the x and y points for each vertex
  for( let j = 0; j < vertices.length ; j+=2){
    vertex(vertices[j].x, vertices[j].y);
    fill(vertices[j+1]);
  }
  endShape();

  for( let k = 0; k < vertices.length ; k+=2){
    let side = mainWidth + (windowWidth - mainWidth);
    fill(vertices[k+1]);
    rect(mainWidth+15, mainHeight - (k*10), windowWidth/(k*2) * 5, 10  ); //Slope effect
    //rect(mainWidth+15, mainHeight-(k*10), (mainWidth/vertices.length)*15, 10); // Bar Effect
  }
}


// Keyboard inputs

function keyPressed(){
  // Save output functionality
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
  //Clear spotlights
  else if(key=='c' || key=='C') {
    shapes = [];
    //music.stop();
  }
  // else if(key=='m' || key=='M') {
  //   music.pause();
  // }

}// End keyPressed
