let circles = [];
let enough = 150;

function setup() {
    createCanvas(800, 600);
    background(50);
    circles.push(new Circle() );
//    noLoop();
}

function draw() {
    
    frameRate(10);
    
    if(circles.length != enough){
        //Display Circles
        for (let i = 0; i < circles.length; i++) {
            circles[i].render();
        }

        let newest = new Circle();
        let shortestDist = 999;
        let closestNeighbour = circles[0]; //Default

        for (let i = 1; i < circles.length; i++) {

            let tempDist = calculateDistanceBetween(newest, circles[i]);
            if ( calculateDistanceBetween(newest, circles[i]) < calculateDistanceBetween(newest, closestNeighbour)){
                closestNeighbour = circles[i];
            }
        }

        dockNew(newest, closestNeighbour);    

        newest.render();
        circles.push(newest);
    }
}


function calculateDistanceBetween(newCircle, dockedCircle){
        let resultantV = p5.Vector.sub(newCircle.position, dockedCircle.position)
        let rHeading = resultantV.heading();
//        let rDist = resultantV.mag() - newCircle.radius;
        let rDist = resultantV.mag() - newCircle.radius/1.25;
        
        return rDist;
    }

function dockNew(newCircle, closestCircle){
        let resultantV = p5.Vector.sub(newCircle.position, closestCircle.position)
        let rHeading = resultantV.heading();
//        let rDist = resultantV.mag() - newCircle.radius;
        let rDist = resultantV.mag() - newCircle.radius/1.25;

        // Here we take away the calculated distance from the current position
        newCircle.position.x = newCircle.position.x - cos(rHeading) * rDist;
        newCircle.position.y = newCircle.position.y - sin(rHeading) * rDist;
    }

