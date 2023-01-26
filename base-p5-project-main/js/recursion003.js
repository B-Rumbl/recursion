let blue001, blue002, slider, speedSlide;//this sets several variables in shorthand rather than have 'let' for each one
// let fr;
let red1, red2;


function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);//this makes it much easier to understand rotations rather than the use of radians
    // noLoop(); //prevents the draw function from being called endlessly
    strokeJoin(ROUND);
    blue001 = color('#D2F6F3');
    blue002 = color('#A1F3F5');
    red1 = color('#FF0000');
    red2 = color('#992702')
    //angle amount slider
    slider = createSlider(5, 150, 77); // this creates the slider values and the default value as index 3
    slider.position(10, windowHeight - 40); //this sets the position of the slider in the window
    slider.style("width", "200px"); //this styles the slider
    slider.input(draw);
    //framerate slider
    speedSlide = createSlider(5, 60, 33);
    speedSlide.position(10, windowHeight - 60);
    speedSlide.style('width', '200px');
    speedSlide.input(frameRate);
    //left lightning position slider
    leftPosSlide = createSlider(0, windowHeight, windowHeight*0.5);
    leftPosSlide.position(windowWidth -300, windowHeight - 80);
    leftPosSlide.style('width', '200px');
    leftPosSlide.input(translate);
    //right lightning position slider
    rightPosSlide = createSlider(0, windowHeight, windowHeight*0.5);
    rightPosSlide.position(windowWidth - 300, windowHeight - 60);
    rightPosSlide.style('width', '200px');
    rightPosSlide.input(translate)
    //top lightning position slider
    topPosSlide = createSlider(0, windowWidth, windowWidth*0.5);
    topPosSlide.position(windowWidth - 300, windowHeight - 100);
    topPosSlide.style('width', '200px');
    topPosSlide.input(translate)
    //bottom lightning position slider
    BotPosSlide = createSlider(0, windowWidth, windowWidth*0.5);
    BotPosSlide.position(windowWidth - 300, windowHeight - 40);
    BotPosSlide.style('width', '200px');
    BotPosSlide.input(translate);
    //length of branches
    lengthSlider = createSlider(15, 45, 30);
    lengthSlider.position(10, windowHeight - 80);
    lengthSlider.style('width', '200px');
    lengthSlider.input(branch);

}

function draw() {//this is what will be animated on the screen when it begins to render
    frameRate(speedSlide.value());
    background(0);
    //Top Lightning
    translate(topPosSlide.value(), 0);//this sets the origin point to middle of the screen
    branch(lengthSlider.value());//this determines the length of the branch according to the function created below
    resetMatrix();//returns the state of the graphics to its original form (rotations and translations)
    //bottom Lightning
    translate(BotPosSlide.value(), height);
    rotate(180)
    branch(lengthSlider.value());
    resetMatrix();
    //right lightning
    translate(width, rightPosSlide.value());
    rotate(90);
    branch2(lengthSlider.value());
    resetMatrix();
    //left Lightning
    translate(0, leftPosSlide.value());
    rotate(-90)
    branch2(lengthSlider.value());
    resetMatrix();
}

function branch(l) { //length of branch to draw
    let maxAngle = slider.value();//this changes the value of the maxangle to that of the selective slider
    strokeWeight(map(l, 20, 200, 1, 15)); //this sets variable weights of the stroke through the use of 'map'
    stroke(lerpColor(blue001, blue002, random(1)));//lerpcolor blends two colours to a third in between them
    line(0, 0, 0, l);//this would normally be top left, but the translate above has moved this point, this is the only drawing instruction
    translate(0, l);//this ensures that the transformation goes to the end of the line, rather than 

    if (l > 15) {
        //branch 1
        push();//saves the current state and drawing context
        rotate(random(-maxAngle, maxAngle) * 0.33);
        branch(l * 0.99);
        pop();// resets back to previous state
        //branch 2
        push();
        rotate(random(-maxAngle, maxAngle) * 0.55);
        branch(l * 0.6);
        pop();

    }

}
function branch2(l) { //length of branch to draw
    let maxAngle = slider.value();//this changes the vaue of the maxangle ot that of the selective slider
    strokeWeight(map(l, 20, 200, 1, 15)); //this sets varible weights of the stroke through the use of 'map'
    stroke(lerpColor(red1, red2, random(1)));
    line(0, 0, 0, l);//this would normally be top left, but the translate above has moved this point, this is the only drawing instruction
    translate(0, l);
    if (l > 20) {
        //branch 1
        push();//saves the current state and drawing context
        rotate(random(-maxAngle, maxAngle) * 0.33);
        branch2(l * 0.99);
        pop();// resets back to previous state
        //branch 2
        push();
        rotate(random(-maxAngle, maxAngle) * 0.55);
        branch2(l * 0.6);
        pop();
    }
}
