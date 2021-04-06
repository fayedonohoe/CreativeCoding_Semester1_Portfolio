let walkers = [];
let numOfWalkers = 7;

let startingX = 100;
let transparency = 50;
let colours = [];
let colour1;
let colour2;
let colour3;
let colour4;
let colour5;
let colour6;
let colour7;


function setup() {
    createCanvas(1400, 800);
    background(0);
    
    colour1 = color(255, 0, 0, transparency);
    colour2 = color(255, 127, 0, transparency);
    colour3 = color(255, 255, 0, transparency);
    colour4 = color(0, 255, 0, transparency);
    colour5 = color(0, 0, 255, transparency);
    colour6 = color(75, 0, 130, transparency);
    colour7 = color(145, 0, 255, transparency);
    
//    let startColour = color(0, 100, 100);
//    let endColour = color(240, 100, 100); 
    
    let startColour = color(255, 127, 0, transparency);
    let endColour = color(130, 0, 255, transparency);
      

    
    colours.push(colour1, colour2, colour3, colour4, colour5, colour6, colour7);

    for (let i = 0; i < numOfWalkers; i++) {
        
        startingX = width/numOfWalkers;
        let x = startingX; //x pos start
//        walkers.push(new Walker(x * i, 0, colours[i]));
        walkers.push(new Walker(x * i, 0, (lerpColor(startColour, endColour, i / 7))) );
        // += 50;

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
