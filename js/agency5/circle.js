class Circle{
  constructor(){
//    this.position = createVector( random(0+50, width-50), random(0+50, height-50) );
    this.position = createVector( random(0+10, width-10), random(0+10, height-10) );
    this.radius = random(5, 300);
    this.colour = color(0, 150, 250);
    this.sWeight = 2;
    this.op = random(0, 0.8);
  }

    render(){
        noFill();
//        fill(0, 255, 250, this.op);
        //this.sWeight = map(this.sWeight, 0, height, 1, 10);
        
        strokeWeight(this.sWeight);
        stroke(this.colour); 
        ellipse(this.position.x, this.position.y, this.radius*2, this.radius*2)

    }
    
//    calculateDistanceBetween(dockedCircle){
//        let resultantV = p5.Vector.sub(this.position, dockedCircle)
//        let rHeading = resultantV.heading();
//        let rDist = resultantV.mag() - this.radius;
//        
//        return rDist;
//    }
    
//    dock(dockedCircle){
//        let resultantV = p5.Vector.sub(this.position, dockedCircle)
//        let rHeading = resultantV.heading();
//        let rDist = resultantV.mag() - this.radius;
//
//        // Here we take away the calculated distance from the current position
//        this.position.x = this.position.x - cos(rHeading) * rDist;
//        this.position.y = this.position.y - sin(rHeading) * rDist;
//    }
    
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}