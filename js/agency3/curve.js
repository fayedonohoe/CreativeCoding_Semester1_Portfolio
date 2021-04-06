class Curve{
  constructor(points_){
    this.points = points_;
  }

render(){

    noFill();
    stroke(255);
    beginShape();

    curveVertex(this.points[this.points.length - 1].x, this.points[this.points.length - 1].y);   // First Control Point
    
    //Actual this.points
    for(let i = 0; i < this.points.length-1; i++) {
        curveVertex(this.points[i].x, this.points[i].y);
        ellipse(this.points[i].x, this.points[i].y, 10,10);
    }
    
    curveVertex(this.points[0].x, this.points[0].y); // Second Control Point

    endShape();
    
  }
}