class Walker {

    constructor(_x, _y, _c) {
        this.circleXPos = _x;
        this.circleYPos = _y;
        this.stepSize = 12
//        this.optionsX = [-1, 0, 1]; // Make it rain....bows
        this.optionsX = [-1, -1, 0, 0,1, 1, 1, 1, 1];
        this.optionsY = [-1, -1, 0, 1, 1, 1];
        this.speed = 5;
        this.diam = 15;
        this.colour = _c;

    }
    
    render() {

        this.speed = map(mouseX, 0, width, 2, 30);
        this.diam = map(mouseY, 0, height, 2, 40);
        
        // For make it rain...bows
//        noStroke();
//        fill(this.colour);
        
        //
        noFill();
        strokeWeight(3);
        stroke(this.colour);
        
        ellipse(this.circleXPos, this.circleYPos, this.diam, this.diam);
    }


    step() {
        for (let i = 0; i < this.speed; i++) {
            let moveX = this.optionsX[floor(random(this.optionsX.length))] * this.stepSize;
            let moveY = this.optionsY[floor(random(this.optionsY.length))] * this.stepSize;

            this.circleXPos += moveX;
            this.circleYPos += moveY;

            if (this.circleXPos > width) {
                this.circleXPos = 0;
            } else if (this.circleXPos < 0) {
                this.circleXPos = width;
            }

            if (this.circleYPos > height) {
                this.circleYPos = 0;
            } else if (this.circleYPos < 0) {
                this.circleYPos = height;
            }
        }
    }//end step
    

}
