let testBrush;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('p5-canvas');
    
    // Test brush setup
    testBrush = createBrush();
    testBrush.strokeWeight(3);
}

function draw() {
    background(245, 240, 230);
    
    // Test brush drawing
    testBrush.stroke(0);
    testBrush.noFill();
    testBrush.beginShape();
    testBrush.vertex(100, 100);
    testBrush.vertex(300, 300);
    testBrush.endShape();
}