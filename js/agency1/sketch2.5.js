let circleXPos = 400;
let circleYPos = 400;
let stepSize = 5;
let optionsX = [-1, -1, 1, 1, 1];
let optionsY = [-1, -1, 0, 1, 1];

function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {

    let speed = map(mouseX, 0, width, 2, 40);
    let diam = map(mouseY, 0, height, 1, 10);

    for (let x = 0; x < speed; x++) {
        let moveX = optionsX[floor(random(0, optionsX.length))] * stepSize;
        let moveY = optionsY[floor(random(0, optionsY.length))] * stepSize;
        //let moveY = directionY * stepSize;

        circleXPos += moveX;
        circleYPos += moveY;

        if (circleXPos > width) {
            circleXPos = 0;
        } else if (circleXPos < 0) {
            circleXPos = width;
        }

        if (circleYPos > height) {
            circleYPos = 0;
        } else if (circleYPos < 0) {
            circleYPos = height;
        }

        noStroke();
        fill(255, 40);
        ellipse(circleXPos, circleYPos, diam, diam);

    }
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    if (key == '1') {
        stepSize = 1;
        diam = 1;
    }
    if (key == '2') {
        stepSize = 2;
        diam = 2;
    }
    if (key == '3') {
        stepSize = 5;
        diam = 3;
    }
}
