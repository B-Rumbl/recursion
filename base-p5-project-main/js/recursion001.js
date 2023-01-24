const MAX_LEVEL = 8;
const MIN_LEVEL = 0;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0)
    stroke(0, 255, 0);
    strokeWeight(2);
    noFill();
    noLoop();
    drawCircle(width*0.5, height*0.5, width*0.25, MAX_LEVEL)
}
function drawCircle(x, y, d, count){
    ellipse(x, y, d);
    // the -- in the statement below will check against the min level first before taking one away. Placing -- in front of the count would take one away before checking against the MIN
    if(count-- > MIN_LEVEL){ 
        drawCircle(x + d*0.5, y, d*0.5, count);       
        drawCircle(x - d*0.5, y, d*0.5, count); //changing the plus and minus of x and y will alter where the iterations of the circle appears
        drawCircle(x, y + d*0.5, d*0.5, count);
    }

}