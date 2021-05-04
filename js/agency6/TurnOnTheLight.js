/*
    Title: Scripting Agents - CC CA2
    Description: Using generative agency to create a scripting animation
    Author: Faye Donohoe - N00174001
    Date: March 2021

    Harry Potter Reference
*/

let font;
let fontPath;
let path;
let letter;
let c = 0;
let bg;
// let myString = "happiness";
let myString = "happiness can be found even in the darkest of times, if one only remembers to turn on the light";

//To be an array of Letter Objects
let sentence = [];
let wordCounter = 0;
let letterCounter = 0;
let wordCounter2 = 0;
let letterCounter2 = 0;
let brush1;

let dots = [];
let brushColour;

let finished = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    frameRate(100);
    bg = color(0);
    background(bg)
    noLoop();
    opentype.load('data/DancingScript.otf', function(err,f){
    // opentype.load('data/DTCShiplapSketch.otf', function(err,f){
    
        if(err){
            console.log(err);
        }else{
            font = f;
            loop();
            generatePath();
        }
    })
    brushColour = color(255, 205, 69);
}

function draw(){
    if(!font) return
    
    //Attempt to separate to new line
    //if(wordCounter < 71)
    translate(20, 200);
    // else
    // translate(20, 300);

    write();

    //Set delay
    if(wordCounter > sentence.length*0.1)
    erase();

    //Set Flag
    if (wordCounter2 == dots.length-1){
        finished = true;    
    }

    if (finished){
        //console.log("finished");

        //Check if user Mouse X is within a certain range of each objects position
        // If so, "relight"
        for(let i=0; i<dots.length; i++){
            for(let j = 0; j<dots[i].length; j++){
                let tempMin = mouseX - 5;
                let tempMax = mouseX + 5;
                let tempX = dots[i][j].position.x;
                if (tempX >= tempMin && tempX <= tempMax){
                    dots[i][j].lit = true;
                    dots[i][j].render();
                }
            }
        }
    }

}//end draw()

function generatePath(){
    // x offset, y offset, font size
    fontPath = font.getPath(myString, 0, 0, 40);
    path = new g.Path(fontPath.commands);
    path = g.resampleByLength(path, 1); // control space between dots - more even finish

    sentence = sortLetters(path);

    //create dots
    for(let i = 0; i < sentence.length; i++){
        let tempArray = [];
        for(let j = 0; j < sentence[i].length; j++){
            tempArray.push(new LightDot( createVector(sentence[i][j].x, sentence[i][j].y),brushColour, 3));
        }
        dots.push(tempArray);
    }
}
    
function write(){
    //iterates though the string, moving the brush object to the new coordinates
    if (wordCounter != sentence.length ){
        if (letterCounter != sentence[wordCounter].length-1 ){
            dots[wordCounter][letterCounter].render();
            letterCounter++;
        }
        else{
            letterCounter = 0;
            wordCounter++;
        }
    }
}
function erase(){
    if (wordCounter2 != sentence.length ){
        if (letterCounter2 != sentence[wordCounter2].length-1 ){
            //dots[wordCounter][letterCounter].remove();
            //dots.splice();
            dots[wordCounter2][letterCounter2].lit = false;
            dots[wordCounter2][letterCounter2].render();
            letterCounter2++;
        }
        else{
            letterCounter2 = 0;
            wordCounter2++;
        }
    }
}

function sortLetters(p){
    let tempLetter = [];
    let tempSentence = [];    

    for(let i = 0; i < p.commands.length; i++){
        
        if(p.commands[i].type == 'M'){
            tempLetter = [];
            tempLetter.push(p.commands[i]);
        }
        else if(p.commands[i].type == 'Z'){
            tempSentence.push(tempLetter);
        }
        else{
            tempLetter.push(p.commands[i]);
        }
    }
    return (tempSentence);
}

function keyPressed() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}