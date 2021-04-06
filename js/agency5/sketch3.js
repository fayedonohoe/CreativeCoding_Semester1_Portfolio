let circles = [];
let enough = 100;

function setup() {
    createCanvas(800, 600);
    background(50);
    circles.push(new Circle() );
//    noLoop();
}

function draw() {
    
    //frameRate(10);
    
    if(circles.length != enough){
        //Display Circles
        for (let i = 0; i < circles.length; i++) {
            circles[i].render();
        }

        for( let perFrame = 0; perFrame <= 5; perFrame++){
            let newest = new Circle();
        //let shortestDist = 999;
        //let closestNeighbour = circles[0]; //Default

        //Check against other circles to see if it would be overlapping
        for (let i = 0; i < circles.length; i++) {
            let distance = dist(newest.position.x, newest.position.y, circles[i].position.x, circles[i].position.y);
//            let distance = p5.Vector.sub(newest.position, circles[i].position);
//            console.log(distance);
            
            if (distance < (circles[i].radius) || distance+1 < (newest.radius + circles[i].radius)  ){
                newest = undefined;
                break;
            }
        }
            
        if(newest){  
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
        
    }
}


function calculateDistanceBetween(newCircle, otherCircle){
        let resultantV = p5.Vector.sub(newCircle.position, otherCircle.position)
        let rHeading = resultantV.heading();
        let rDist = resultantV.mag() - newCircle.radius;
        
        return rDist;
    }

function dockNew(newCircle, closestCircle){
        let resultantV = p5.Vector.sub(newCircle.position, closestCircle.position)
        let rHeading = resultantV.heading();
        let rDist = resultantV.mag() - newCircle.radius;

        // Here we take away the calculated distance from the current position
        newCircle.position.x = newCircle.position.x - cos(rHeading) * rDist;
        newCircle.position.y = newCircle.position.y - sin(rHeading) * rDist;
    }

