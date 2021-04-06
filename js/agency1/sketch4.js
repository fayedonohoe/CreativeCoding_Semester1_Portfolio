let walkers = [];
let numOfWalkers = 3;

let startingX = 200;
let colours = [];
let colour1;
let colour2;
let colour3;


function setup() {
    createCanvas(800, 800);
    background(0);
    
    colour1 = color(48, 255, 248, 40);
    colour2 = color(236, 245, 66, 40);
    colour3 = color(255, 87, 235, 40);
    
    colours.push(colour1, colour2, colour3)

    for (let i = 0; i < numOfWalkers; i++) {
        
        let x = startingX; //x pos start
        
        walkers.push(new Walker(400, 0, colours[i]));
        x += 200;

    }

}
function draw() {

    walkers.forEach(function (walker) {
        walker.step();     
        walker.render();
//        console.log("TOAST");
    });
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
