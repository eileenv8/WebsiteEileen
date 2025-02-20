let scrollPercent = 0;
let rotation = 0;
let bookLink = 'https://eileenmargaret.substack.com/';
let bookWidth = 100;
let bookHeight = 100;
let bookX = 180;
let bookY = 150;

// Interactive elements tracking
let interactiveElements = {
    books: {
        isHovered: false,
        baseX: bookX,
        baseY: bookY,
        width: bookWidth,
        height: bookHeight,
        checkHover: function(px, py) {
            // Convert mouse coordinates to local space
            px = (px - width/2) / 1.5 + 100;
            py = (py - height/2) / 1.5 + 100;
            return px > this.baseX - this.width/2 && 
                   px < this.baseX + this.width/2 &&
                   py > this.baseY - this.height/2 && 
                   py < this.baseY + this.height/2;
        }
    },
    dress: {
        isHovered: false,
        checkHover: function(px, py) {
            px = (px - width/2) / 1.5 + 100;
            py = (py - height/2) / 1.5 + 100;
            return px > 66 && px < 175 && 
                   py > 64 && py < 194;
        }
    },
    laptop: {
        isHovered: false,
        checkHover: function(px, py) {
            px = (px - width/2) / 1.5 + 100;
            py = (py - height/2) / 1.5 + 100;
            let adjustedX = (px - 100) / 0.8;
            let adjustedY = (py - 60) / 0.8;
            return adjustedX > 1 && adjustedX < 45 && 
                   adjustedY > 1 && adjustedY < 32;
        }
    }
};

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('p5-canvas');
}

function draw() {
    background(245, 240, 230);
    
    // Update scroll position and rotation
    scrollPercent = (window.pageYOffset) / (document.documentElement.scrollHeight - window.innerHeight);
    rotation += 0.005;

    // Check hover states
    for (let elemName in interactiveElements) {
        interactiveElements[elemName].isHovered = interactiveElements[elemName].checkHover(mouseX, mouseY);
    }

    // Update cursor based on hover state
    if (Object.values(interactiveElements).some(elem => elem.isHovered)) {
        cursor(HAND);
    } else {
        cursor(ARROW);
    }

    // Center and scale everything
    push();
    translate(width/2, height/2);
    scale(1.5);
    translate(-100, -100);

    // Draw elements in order
    drawBigWheel();

    let sway = sin(scrollPercent * TWO_PI) * 5;
    rotate(radians(sway));
    
    drawFigure();
    drawLaptop();
    drawBooks();

    pop();

    // Draw hover information if needed
    let hoveredElem = Object.entries(interactiveElements).find(([_, elem]) => elem.isHovered);
    if (hoveredElem) {
        push();
        fill(0);
        noStroke();
        textAlign(CENTER);
        textSize(16);
        if (hoveredElem[0] === 'books') {
            text('read my writing on Substack', width/2, height - 30);
        }
        pop();
    }
}

function drawFigure() {
    noFill();
    stroke(0);
    strokeWeight(2);

    if (interactiveElements.dress.isHovered) {
        fill(255, 182, 193, 100); // Light pink with transparency
    }

    // Path 1 - Detail piece
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

function drawLaptop() {
    push();
    translate(100, 60);
    scale(0.8);
    
    if (interactiveElements.laptop.isHovered) {
        fill(105, 105, 105); // Darker gray when hovered
    } else {
        fill(0);
    }
    
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
    
    let bookSway = sin(frameCount * 0.02) * (interactiveElements.books.isHovered ? 1 : 0.5);
    
    // First book (bottom)
    push();
    rotate(radians(2 + bookSway));
    fill(interactiveElements.books.isHovered ? '#A0522D' : '#8B4513');
    stroke(0);
    strokeWeight(1);
    rect(-20, -15, 40, 16);
    fill(interactiveElements.books.isHovered ? '#804020' : '#6B3410');
    quad(
        20, -15,
        24, -14,
        24, -0,
        20, 1
    );
    noStroke();
    for(let i = 0; i < 7; i++) {
        fill(i % 2 === 0 ? 255 : 220);
        rect(-19, -12 + (i * 1.5), 38, 1);
    }
    pop();
    
    // Second book (middle)
    push();
    rotate(radians(1 + bookSway));
    fill(interactiveElements.books.isHovered ? '#B8860B' : '#A0522D');
    stroke(0);
    strokeWeight(1);
    rect(-17, -26, 35, 12);
    fill(interactiveElements.books.isHovered ? '#956B08' : '#804020');
    quad(
        18, -26,
        22, -26,
        22, -15,
        18, -14
    );
    noStroke();
    for(let i = 0; i < 5; i++) {
        fill(i % 2 === 0 ? 255 : 220);
        rect(-17, -23 + (i * 1.2), 34, 1);
    }
    pop();
    
    // Third book (top)
    push();
    rotate(radians(4 + bookSway));
    fill(interactiveElements.books.isHovered ? '#8B4513' : '#6B4423');
    stroke(0);
    strokeWeight(1);
    rect(-19, -41, 38, 14);
    fill(interactiveElements.books.isHovered ? '#6B3410' : '#4B3016');
    quad(
        19, -41,
        23, -40,
        23, -28,
        19, -27
    );
    noStroke();
    for(let i = 0; i < 7; i++) {
        fill(i % 2 === 0 ? 255 : 220);
        rect(-18, -38 + (i * 1.2), 36, 1);
    }
    pop();
    
    pop();
}

function drawBigWheel() {
    push();
    translate(0, 15);
    rotate(rotation);
    
    stroke(70);
    strokeWeight(3);
    noFill();
    circle(0, 0, 200);
    
    for (let i = 0; i < 12; i++) {
        let angle = TWO_PI * i / 12;
        line(0, 0, cos(angle) * 100, sin(angle) * 100);
    }
    
    circle(0, 0, 160);
    circle(0, 0, 40);
    
    for (let i = 0; i < 12; i++) {
        let angle = TWO_PI * i / 12;
        let x = cos(angle) * 80;
        let y = sin(angle) * 80;
        circle(x, y, 10);
    }
    pop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
    // Check if books are clicked
    if (interactiveElements.books.isHovered) {
        window.open(bookLink, '_blank');
    }
}

