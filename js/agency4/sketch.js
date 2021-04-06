let station = [];
let maxDocked = 150;


function setup() {
    createCanvas(800, 600);
    station.push(new Ball (createVector(250,250)) );
//    noLoop();
}



function draw() {
    
    frameRate(5);
    
    if(station.length != maxDocked){
        //Display Docked Balls
        for (let i = 0; i < station.length; i++) {
            station[i].render();
        }


        let newest = new Ball();
        let shortestDist = 999;
        let closestDocked = station[0]; //Default

        for (let i = 1; i < station.length; i++) {

            let tempDist = calculateDistanceBetween(newest, station[i]);
            if ( calculateDistanceBetween(newest, station[i]) < calculateDistanceBetween(newest, closestDocked)){
                closestDocked = station[i];
            }
        }

        dockNew(newest, closestDocked);    

        newest.render();
        station.push(newest);
    }
}


function calculateDistanceBetween(newBall, dockedBall){
        let resultantV = p5.Vector.sub(newBall.position, dockedBall.position)
        let rHeading = resultantV.heading();
        let rDist = resultantV.mag() - newBall.radius;
        
        return rDist;
    }

function dockNew(newBall, closestBall){
        let resultantV = p5.Vector.sub(newBall.position, closestBall.position)
        let rHeading = resultantV.heading();
        let rDist = resultantV.mag() - newBall.radius;

        // Here we take away the calculated distance from the current position
        newBall.position.x = newBall.position.x - cos(rHeading) * rDist;
        newBall.position.y = newBall.position.y - sin(rHeading) * rDist;
    }

