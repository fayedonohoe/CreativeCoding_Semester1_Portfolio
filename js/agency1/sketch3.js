let circle1XPos = 200;
let circle1YPos = 200;
let stepSize = 5;
let optionsX = [-1, -1, 0, 1, 1];
let optionsY = [-1, -1, 1, 1, 1];

function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {

    let speed = map(mouseX, 0, width, 2, 40);
    let diam = map(mouseY, 0, height, 2, 12);

    for (let i = 0; i < speed; i++) {
        let moveX = optionsX[floor(random(optionsX.length))] * stepSize;
        let moveY = optionsY[floor(random(optionsY.length))] * stepSize;

        circle1XPos += moveX;
        circle1YPos += moveY;

        if (circle1XPos > width) {
            circle1XPos = 0;
        } else if (circle1XPos < 0) {
            circle1XPos = width;
        }

        if (circle1YPos > height) {
            circle1YPos = 0;
        } else if (circle1YPos < 0) {
            circle1YPos = height;
        }

        //noStroke();
        //fill(255, 40);
        noFill();
        stroke(48, 255, 248, 40); //blue
        ellipse(circle1XPos, circle1YPos, diam, diam);
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
