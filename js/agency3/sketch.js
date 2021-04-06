let points = [];
let curves = [];
let numOfSegments = 16;
let radius = 60;

let numOfCurves = 6;

function setup() {
    createCanvas(500, 500);
    background(0);

    for(let j = 0; j< numOfCurves; j++){
        
        points = [];
        let angle = radians(360 / numOfSegments);
        for (let i = 0; i < numOfSegments; i++) {
            let xPos = cos(angle * i) * radius*j;
            let yPos = sin(angle * i) * radius*j;
            points.push(createVector(xPos, yPos));
        }
        curves.push(new Curve(points));
        
    }

}//end setup

function draw() {
    push();
    translate(width/2, height/2);

    curves.forEach(function (curve) {
        curve.render();
    });
}


function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
