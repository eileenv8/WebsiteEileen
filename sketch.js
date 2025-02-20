let scrollPercent = 0;
let rotation = 0;
let brush;
let watercolorBrush;
let detailBrush;
let bookLink = 'https://eileenmargaret.substack.com/';
let bookWidth = 100;  // Adjust this to match your book size
let bookHeight = 100; // Adjust this to match your book size
let bookX = 180;      // Center X position from drawBooks
let bookY = 150;      // Center Y position from drawBooks

function mousePressed() {
    // Check if click is within book bounds
    if (mouseX > bookX - bookWidth/2 && mouseX < bookX + bookWidth/2 &&
        mouseY > bookY - bookHeight/2 && mouseY < bookY + bookHeight/2) {
        window.open(bookLink, '_blank');
    }
}


function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('p5-canvas');

    
}

function draw() {
    background(245, 240, 230);
    
    // Update scroll position and establish rotation of wheel
    scrollPercent = (window.pageYOffset) / (document.documentElement.scrollHeight - window.innerHeight);
    rotation += 0.005; //constant gentle wheel rotation

    // Center and scale everything
    push();
    translate(width/2, height/2);
    scale(1.5); // Scale up the figure a bit
    translate(-100, -100); // Center based on the figure's coordinates

     // Draw elements in order (back to front)
     drawBigWheel();   // Background

    // Add gentle sway based on scroll
    let sway = sin(scrollPercent * TWO_PI) * 5;
    rotate(radians(sway));
    
    drawFigure();
    drawLaptop();
    drawBooks();

    if (mouseX > 200 && mouseX < 300 && mouseY > 150 && mouseY < 250) {
        cursor(HAND);
    } else {
        cursor(ARROW);
    }

    pop();
}

function drawFigure() {
    noFill();
    stroke(0);
    strokeWeight(2);

    // Path 1 - Looks like a detail piece
    beginShape();
    vertex(77, 87.5);
    vertex(70.6024, 96.5);
    vertex(47.5, 129);
    vertex(56.5, 144);
    vertex(65.5, 137.5);
    vertex(56.5, 133.5);
    vertex(70.6024, 96.5);
    endShape(CLOSE);

    // Path 2 - Main dress body
    beginShape();
    vertex(130, 126);
    bezierVertex(163.5, 126, 166, 126, 174.5, 95);
    vertex(174.5, 64);
    bezierVertex(174.5, 62, 161.5, 51, 157, 54.5);
    bezierVertex(152.5, 58, 146.5, 47.5, 151, 76.5);
    bezierVertex(154.6, 99.7, 130.167, 92.5, 117.5, 86);
    bezierVertex(106.167, 82.1666, 82.4, 76.2, 78, 83);
    bezierVertex(73.6, 89.8, 68.5, 123.833, 66.5, 140);
    bezierVertex(66.5, 140, 71.8288, 149.884, 83.5, 149);
    bezierVertex(116.5, 146.5, 115.5, 158, 117.5, 158);
    bezierVertex(119.5, 158, 96.5, 126, 130, 126);
    endShape(CLOSE);

    // Path 3 - Dress fold or detail
    beginShape();
    vertex(75.092, 147);
    bezierVertex(72.7587, 152.667, 69.492, 166, 75.092, 174);
    bezierVertex(80.692, 182, 77.4254, 191, 75.092, 194.5);
    bezierVertex(78.4254, 195.167, 85.492, 194.6, 87.092, 187);
    bezierVertex(89.092, 177.5, 83.092, 182, 90.592, 170);
    bezierVertex(96.592, 160.4, 88.092, 161.667, 83.092, 163.5);
    vertex(87.092, 150.5);
    endShape();

    // Path 4 - Dress extension or fold
    beginShape();
    vertex(56, 145);
    vertex(1.5, 184.5);
    bezierVertex(4.83333, 186, 11.6, 188.1, 18, 184.5);
    bezierVertex(24.4, 180.9, 28, 188.5, 32, 184.5);
    bezierVertex(36, 180.5, 32, 174.5, 36, 170);
    bezierVertex(40, 165.5, 71.6, 159.7, 74, 148.5);
    endShape();

    // Path 5 - Upper body detail
    beginShape();
    vertex(184, 75.5);
    bezierVertex(197.2, 59.9, 186.833, 50, 180, 47);
    vertex(174.5, 65);
    bezierVertex(173.5, 72.7955, 164.2, 87.3092, 135, 83);
    bezierVertex(98.5, 77.6135, 117.5, 86.5, 141, 90.5);
    bezierVertex(164.5, 94.5, 167.5, 95, 184, 75.5);
    endShape(CLOSE);

    // Path 6 - Head and neck
    beginShape();
    vertex(191, 47);
    bezierVertex(193.8, 46.2, 192.167, 44, 191, 43);
    bezierVertex(189.333, 42.1667, 185.8, 41.6, 185, 46);
    bezierVertex(184, 51.5, 198, 60.5, 198, 36);
    bezierVertex(198, 16.4, 183.667, 4.5, 176.5, 1);
    vertex(151.5, 7);
    bezierVertex(149.333, 10.3333, 147.3, 18.9, 156.5, 26.5);
    bezierVertex(153.333, 27.1667, 150.5, 31.4, 164.5, 43);
    bezierVertex(167.345, 43.158, 173.427, 40.4085, 176.095, 28.526);
    endShape();

    // Path 7 - Hair
    beginShape();
    vertex(198.5, 33);
    bezierVertex(205.333, 43.5, 214.4, 65.9, 196, 71.5);
    bezierVertex(173, 78.5, 183.5, 98.5, 191, 95.5);
    bezierVertex(198.5, 92.5, 201, 86.5, 198.5, 84);
    bezierVertex(196.5, 82, 192.667, 84.8333, 191, 86.5);
    endShape();
}

function drawBigWheel() {
    push();
    translate(0, 15); // Position the wheel behind the figure
    rotate(rotation);
    
    // Wheel rim
    stroke(70);
    strokeWeight(3);
    noFill();
    circle(0, 0, 200);
    
    // Spokes
    for (let i = 0; i < 12; i++) {
        let angle = TWO_PI * i / 12;
        line(0, 0, cos(angle) * 100, sin(angle) * 100);
    }
    
    // Inner circles
    circle(0, 0, 160);
    circle(0, 0, 40);
    
    // Decorative elements
    for (let i = 0; i < 12; i++) {
        let angle = TWO_PI * i / 12;
        let x = cos(angle) * 80;
        let y = sin(angle) * 80;
        circle(x, y, 10);
    }
    pop();
}

function drawLaptop() {
    push();
    translate(100, 60); // Position on lap
    scale(0.8); // Adjust size as needed
    
    // Draw laptop using the SVG paths
    fill(0);
    noStroke();
    
    // Main body pieces
    beginShape();
    vertex(16.3767, 1);
    vertex(1, 1);
    vertex(6.6061, 18.7975);
    vertex(21.8526, 22.1093);
    vertex(16.3767, 1);
    endShape(CLOSE);
    
    beginShape();
    vertex(9.16888, 26.9335);
    vertex(23.104, 26.9335);
    vertex(21.8526, 22.1093);
    vertex(6.6061, 18.7975);
    vertex(9.16888, 26.9335);
    endShape(CLOSE);
    
    beginShape();
    vertex(44.247, 31.0015);
    vertex(37.0392, 25.408);
    vertex(21.8526, 22.1093);
    vertex(23.104, 26.9335);
    vertex(44.247, 31.0015);
    endShape(CLOSE);
    
    // Outline
    stroke(0);
    noFill();
    strokeWeight(1);
    beginShape();
    vertex(23.104, 26.9335);
    vertex(9.16888, 26.9335);
    vertex(6.6061, 18.7975);
    moveTo(23.104, 26.9335);
    vertex(44.247, 31.0015);
    vertex(37.0392, 25.408);
    vertex(21.8526, 22.1093);
    vertex(23.104, 26.9335);
    moveTo(21.8526, 22.1093);
    vertex(6.6061, 18.7975);
    vertex(1, 1);
    vertex(16.3767, 1);
    vertex(21.8526, 22.1093);
    endShape();
    pop();
}

function drawBooks() {
    push();
    translate(bookX, bookY);
    
    let bookSway = sin(frameCount * 0.02) * 0.5;
    
    // First book (bottom)
    push();
    rotate(radians(2 + bookSway));
    fill('#8B4513');
    stroke(0);
    strokeWeight(1);
    rect(-20, -15, 40, 16);
    // Aligned spine
    fill('#6B3410');
    quad(
        20, -15,      // Changed from -17 to -15
        24, -14,      // Changed from -19 to -15
        24, -0,        // Changed from -4 to 0
        20, 1         // Changed from -2 to 0
    );
    // Pages remain the same
    noStroke();
    for(let i = 0; i < 7; i++) {
        if (i % 2 === 0) {
            fill(255);
        } else {
            fill(0);
        }
        rect(-19, -12 + (i * 1.5), 38, 1);
    }
    pop();
    
    // Second book (middle)
    push();
    rotate(radians(1 + bookSway));
    fill('#A0522D');
    stroke(0);
    strokeWeight(1);
    rect(-17, -26, 35, 12);
    fill('#804020');
    quad(
        18, -26,      // Changed to match book top
        22, -26,      // Changed to match book top
        22, -15,      // Changed to match book bottom
        18, -14       // Changed to match book bottom
    );
    // Pages remain the same
    noStroke();
    for(let i = 0; i < 5; i++) {
        if (i % 2 === 0) {
            fill(255);
        } else {
            fill(0);
        }
        rect(-17, -23 + (i * 1.2), 34, 1);
    }
    pop();
    
    // Third book (top)
    push();
    rotate(radians(4 + bookSway));
    fill('#6B4423');
    stroke(0);
    strokeWeight(1);
    rect(-19, -41, 38, 14);
    fill('#4B3016');
    quad(
        19, -41,      // Changed to match book top
        23, -40,      // Changed to match book top
        23, -28,      // Changed to match book bottom
        19, -27       // Changed to match book bottom
    );
    // Pages remain the same
    noStroke();
    for(let i = 0; i < 7; i++) {
        if (i % 2 === 0) {
            fill(255);
        } else {
            fill(0);
        }
        rect(-18, -38 + (i * 1.2), 36, 1);
    }
    pop()
    
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}