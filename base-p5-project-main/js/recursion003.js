let blue001, blue002, slider, speedSlide;//this sets several variables in shorthand rather than have 'let' for each one
let fr;
// let fr = 2;
let red1, red2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    // noLoop(); //prevents the draw function from being called endlessly
    strokeJoin(ROUND);
    blue001 = color('#D2F6F3');
    blue002 = color('#A1F3F5');
    red1 = color('#FF0000');
    red2 = color('#992702')
    slider = createSlider(21, 144, 89); // this creates the slider values and the default value as index 3
    slider.position(10, windowHeight - 40); //this sets the position of the slider in the window
    slider.style("width", "200px"); //this styles the slider
    slider.input(draw);
    speedSlide = createSlider(2, 30, 15);
    speedSlide.position(10, windowHeight -50);
    speedSlide.input(frameRate)
}

function draw() {
    frameRate(speedSlide.value());
    background(0);
    translate(width * 0.5, 0);//this sets the origin point to middle of the screen
    branch(50);//this determines the length of the branch
    resetMatrix();
    translate(width * 0.5, height);
    rotate(180)
    branch(50);
    resetMatrix();
    translate(width, height *0.5);
    rotate(90);
    branch2(50);
    resetMatrix();
    translate(0, height * 0.5);
    rotate(-90)
    branch2(50);
    resetMatrix();
}

function branch(l) { //length of branch to draw
    let maxAngle = slider.value();//this changes the vaue of the maxangle ot that of the selective slider
    strokeWeight(map(l, 20, 200, 1, 15)); //this sets varible weights of the stroke through the use of 'map'
    stroke(lerpColor(blue001, blue002, random(1)));
    line(0, 0, 0, l);//this would normally be top left, but the translate above has moved this point, this is the only drawing instruction
    translate(0, l);
    if (l > 20) {
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
