let numberOfLines = 5; //per quadrant
let numberOfLinesMID = 10; //per quadrant

let canW = 500;
let canH = 500;

let transValX;
let transValY;
let rotValue;
let scaleVal;

let numberOfTiles = 20;
let tile = canW/numberOfTiles;
let lineLength = tile;

let lines = [];
let points = [];
let intersections = [];

function setup(){
  createCanvas(500,500);
  colorMode(HSB, canW, canH); // change colour mode and defined the range as the canW and canH
  rectMode(CENTER);
  //noLoop();
}

function draw(){

  let step = canH/(numberOfLines);
  let x = canW/2;
  let y = 0;

  numberOfLines = map(mouseX, 0,canW, 3,15);
  scaleVal = map(mouseY, 0,canH, 0.2,1);

  background(0);

      // transValX = i*canW;
      // transValY = j*canH;

      push()
      //scale(0.2);
        //translate(transValX,transValY);
        //rotValue = atan2(mouseY-transValY, mouseX-transValX);
        //let distance = dist(mouseX, mouseY, transValX, transValY);

        stroke(189,78,92);

        let rand = round(random(0,3));
        let p1 = createVector();
        let p2 = createVector();
        let tempLine = [];
        lines = [];
        //switch (rand) {

        //Centre Cross
        // line(canW/2,0, canW/2,canH);
        // line(0,canH/2, canH,canH/2);

        // for each increment of y, x goes from centre to zero then centre to canW

        // push()
        // scale(scaleVal);
        //Quadrant 1
        for (let i = 0; i <= canH/2; i += step ){
          line(canW/2,y, x,canH/2);
          p1.x = canW/2;
          p1.y = y;
          p2.x = x;
          p2.y = canH/2;

          tempLine = [p1,p2];
          lines.push(tempLine);

          points.push(p1,p2);
          //lines.push(canW/2, y, x, canH/2);
          x -= step;
          y += step;
        }

        //Quadrant 3
        for (let i = 0; i <= canH/2; i += step ){
          line(canW/2,y, x,canH/2);
          p1.x = canW/2;
          p1.y = y;
          p2.x = x;
          p2.y = canH/2;

          tempLine = [p1,p2];
          lines.push(tempLine);

          points.push(p1,p2);
          //lines.push(canW/2, y, x, canH/2);
          x += step;
          y += step;
        }

        //Quadrant 4
        for (let i = 0; i <= canH/2; i += step ){
          line(canW/2,y, x,canH/2);
          p1.x = canW/2;
          p1.y = y;
          p2.x = x;
          p2.y = canH/2;

          tempLine = [p1,p2];
          lines.push(tempLine);

          points.push(p1,p2);
          //lines.push(canW/2, y, x, canH/2);
          x += step;
          y -= step;
        }

        //Quadrant 2
        for (let i = 0; i <= canH/2; i += step ){
          line(canW/2,y, x,canH/2);
          p1.x = canW/2;
          p1.y = y;
          p2.x = x;
          p2.y = canH/2;

          tempLine = [p1,p2];
          lines.push(tempLine);

          points.push(p1,p2);
          //lines.push(canW/2, y, x, canH/2);
          x -= step;
          y -= step;
        }
        //pop()
        pop()

        for(let i=2; i<lines.length; i += 2){
          //for(let j=0; j<lines.length; j+= 4){

            let point1 = lines[i][0] ; //line 1, point 1
            let point2  = lines[i][1] ; //line 1, point 2

            let point3  = lines[(i+1)][0] ; //line 2, point 1
            let point4  = lines[(i+1)][1] ; //line 2, point 2

            let interX =
            ((point4.x - point3.x) * (point1.y - point3.y) -
              (point4.y - point3.y) * (point1.x - point3.x))
              /
              ((point4.y - point3.y) * (point2.x - point1.x) -
              (point4.x - point3.x) * (point2.y - point1.y));

            let interY =
              ((point2.x - point1.x) * (point1.y - point3.y) -
              (point2.y - point1.y) * (point1.x - point3.x))
              /
              ((point4.y - point3.y) * (point2.x - point1.x) -
              (point4.x - point3.x) * (point2.y - point1.y));

              // let temp inter = [interX, interY];
              // intersections.push(inter);

              ellipse(interX,interY, 20,20);
            }//end inner for



}// end draw()






function keyPressed(){
  if(key=='s' || key=='S') {
    saveCanvas(gd.timestamp(),'png');
  }
}// End keyPressed
