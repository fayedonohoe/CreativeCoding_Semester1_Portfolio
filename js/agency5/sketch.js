let circles = [];
let enough = 500;

function setup() {
    createCanvas(800, 600);
    background(0);
    circles.push(new Circle() );
//    noLoop();
}

function draw() {
    
    frameRate(300);
    
    if(circles.length != enough){
        //Display Circles
        for (let i = 0; i < circles.length; i++) {
            circles[i].render();
        }

        for( let perFrame = 0; perFrame <= 10; perFrame++){
            let newest = new Circle();

            //Check against other circles to see if it would be overlapping
            for (let i = 0; i < circles.length; i++) {
                let distance = dist(newest.position.x, newest.position.y, circles[i].position.x, circles[i].position.y);
                //let distance = p5.Vector.sub(newest.position, circles[i].position);
                //console.log(distance);

                if (distance < (circles[i].radius) || distance < (newest.radius + circles[i].radius)  ){
                    newest = undefined;
                    break;
                }
            }
            if(newest){  
                //let shortestDist = 999;
                //let closestNeighbour = circles[0]; //Default

                newest.render();
                circles.push(newest);
            }
        }
        
    }
}


//function calculateDistanceBetween(newCircle, otherCircle){
//        let resultantV = p5.Vector.sub(newCircle.position, otherCircle.position)
//        let rHeading = resultantV.heading();
////        let rDist = resultantV.mag() - newCircle.radius;
//        let rDist = resultantV.mag() - newCircle.radius/1.25;
//        
//        return rDist;
//    }

function dockNew(newCircle, closestCircle){
        let resultantV = p5.Vector.sub(newCircle.position, closestCircle.position)
        let rHeading = resultantV.heading();
//        let rDist = resultantV.mag() - newCircle.radius;
        let rDist = resultantV.mag() - newCircle.radius/1.25;

        // Here we take away the calculated distance from the current position
        newCircle.position.x = newCircle.position.x - cos(rHeading) * rDist;
        newCircle.position.y = newCircle.position.y - sin(rHeading) * rDist;
    }

