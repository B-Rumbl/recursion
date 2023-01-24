let brown001, brown002, slider;//this sets several variables in shorthand rather than have 'let' for each one

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(ROUND);
    brown001 = color('#9C7F65');
    brown002 = color('#4F4023');
    slider = createSlider(21, 144, 89); // this creates the slider values and the default value as index 3
    slider.position(10, windowHeight - 40); //this sets the position of the slider in the window
    slider.style("width", "200px"); //this styles the slider
    slider.input(draw);
}

function draw() {
    background(0);
    translate(width * 0.5, height);//this sets the origin point to middle of the screen
    branch(250);//this determines the length of the branch
    resetMatrix();

}

function branch(l) { //length of branch to draw
    let maxAngle = slider.value();
    strokeWeight(map(l, 20, 200, 1, 10)); //this sets varible weights of the stroke
    stroke(lerpColor(brown001, brown002, random(1)));
    line(0, 0, 0, -l);//this would normally be top left, but the tranlsate above has moved this point, this is the only drawing instruction
    translate(0, -l);
    if (l > 20) {
        if (l < 50) {
            //adds basic leaves once the length is less than 50, constrained random colour
            let r = 200 + random(-20,20); //180 through to 220
            let g = 255 - random(80);
            let b = 40 + random (-20, 20);
            fill(r, g, b, random(50, 100));
            let size = 15 + random(15);
            noStroke();
            // triangle(-size*0.5, 0, size *0.5, 0, 0, -size*0.9)
            beginShape();//this is to make a complex custom shape
            let rad = random(10,30);
            for(let i = 45; i < 135; i++){//this will set a series of i values between 45 and 135
                let x = rad * cos(i);
                let y = rad * sin(i);
                vertex(x, y);//this draws the point

            }
            for (let i = 135; i > 45; i--){
                let x = rad * cos(i);
                let y = rad * sin(-i);//making this minus essentially mirrors the above
                vertex(x, y);

            }
            endShape(CLOSE);//this closes the shape
        } else {
            //branch 1
            push();//saves the current state and drawing context
            rotate(random(-maxAngle, maxAngle) * 0.618);
            branch(l * 0.33);
            pop();// resets back to previous state
            //branch 2
            push();
            rotate(random(-maxAngle, maxAngle) * 0.618);
            branch(l * 0.6);
            pop();
            //branch 3
            push();
            rotate(random(-maxAngle, maxAngle) * 0.618);
            branch(l * 0.7);
            pop();
            //branch 4
            push();
            rotate(random(-maxAngle, maxAngle) * 0.618);
            branch(l * 0.8);
            pop();
        }
    }
}