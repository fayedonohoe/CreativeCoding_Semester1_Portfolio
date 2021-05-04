// FOR SKETCH 6/ Turn On The Light (HP Reference)
class LightDot{
    constructor(pos, c, radius){
      this.position = pos;
      this.brushH = radius;
      this.colour = c;
      this.lit = true;
    }

    render(){
        noStroke();
        if(this.lit){
            fill(this.colour);
        }
        else{
            fill(0);
            this.brushH = this.brushH * 1.5;
        }
        ellipse(this.position.x, this.position.y, this.brushH, this.brushH-1);
    }

    move(newPosX, newPosY){
        this.position.x = newPosX;
        this.position.y = newPosY;
    }
}

