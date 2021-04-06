let canvasW = 500;
let canvasH = 500;

let x = 250;
let y = 250;

//let steps = [-2,-1,1,2];
//let stepsY = [];
let stepSize = 5;

let optionsX = [-1, -1, 1, 1, 1];
let optionsY = [-1, -1, 0, 1, 1];

function setup() {
    createCanvas(canvasW, canvasH);
    background(0);
    //noLoop();
}


function draw() {

    //frameRate(30);
    let speed = map(mouseX, 0, width, 2, 40);
    let diam = map(mouseY, 0, height, 3, 10);

    //ellipse(x, y, diam, diam);

    //noFill();
    //stroke(120, 214, 203)
    for (let x = 0; x < speed; x++) {

        //let rand = round(random(-1,1));
        let stepX = optionsX[floor(random(optionsX.length))] * stepSize;
        let stepY = optionsY[floor(random(optionsY.length))] * stepSize;

        x += stepX;
        y += stepY;


        if (x > width) {
            x = 0;
        }
        if (x < 0) {
            x = width;
        }
        
        if (y > height) {
            y = 0;
        }
        if (y < 0) {
            y = height;
        }

        //x > width ? 

        noStroke();
        fill(120, 214, 203, 20);
        //ellipse(x, y, 20, 20);
        ellipse(x, y, diam, diam);
    }

} // end draw()



function keyPressed() {
    if (key == 's' || key == 'S') {
        saveCanvas(gd.timestamp(), 'png');
    }

    if (key == '1') {
        drawMode = 1;
        stepSize = 1;
        diam = 1;
    }
    if (key == '2') {
        drawMode = 2;
        stepSize = 1;
        diam = 1;
    }
    if (key == '3') {
        drawMode = 3;
        stepSize = 10;
        diam = 5;
    }


} // End keyPressed
