let xPos = 400;
let yPos = 400;
let stepSize = 1;
let angle = 45;

let angleCount = 3;
let angles = [];
let startAngle;
let stepAngle;

let tempArray = [];
let positions = []; // contains positions of where the point was, and where its going. x1y1, x2y2 -> x2y2, x3y3 etc

function setup() {
    createCanvas(800, 800);
    background(0);
    
    angles = [];
    tempArray = [xPos, yPos];
    positions.push(tempArray);
    stepAngle = 90 / angleCount;
    startAngle = stepAngle/2;
    
        
    for(let i = startAngle; i < 90; i += stepAngle){
        angles.push(i);
    }
}

function draw() {

    let speed = map(mouseX, 0, width, 2, 40);

    for (let x = 0; x < 10; x++) {
        stroke(255);
        strokeWeight(5);
        point(xPos, yPos);

        xPos += cos(radians(angle) * stepSize);
        yPos += sin(radians(angle) * stepSize);

        if (xPos < 0 || xPos > width || yPos < 0 || yPos > height) {
            
            tempArray = [floor(xPos), floor(yPos)];
            positions.push(tempArray);
            
            angle = deflectAngle(xPos, yPos, angles, positions);
            console.log(angle);
        }

    }
    
    
}

function deflectAngle(_x, _y, _angles, _positions) {
    
    let randomNum = floor(random(_angles.length));
    let randomAngle = _angles[randomNum];
//    console.log(randomAngle);
    
    let option = floor(random(0, 1));
    
    if(option = 0){
        randomAngle = randomAngle * -1;
    }
    
    //return randomAngle;
    
    if (_x > width) {
        return randomAngle + 90;
    } else if (_x < 0) {
        return randomAngle + 270;
    }

    if (_y > height) {
        return randomAngle + 180;

    } else if (_y < 0) {
        return randomAngle;
    }
    
    for(let i = 0; i < _positions.length; i++){
        let dist = getDistance(_positions[i], _positions[i+1], _positions[i+2], _positions[i+3])
        console.log("Distance: " + dist);
    }

}

function getDistance(_x1, _y1, _x2, _y2){
    
    let d = floor(dist(_x1, _y1, _x2, _y2));
    return d;

}


function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
