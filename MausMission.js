/* function setup() {
        window.createCanvas(800, 600);
        background("#000014");
     } */
function startScreen() {
  /*     function moon() {
        noStroke();
        fill(229,229,229);
        ellipse(100,500, 358);
    
        fill(201,201,201);
        ellipse(80, 380, 45);
        ellipse(160, 430, 60);
        ellipse(20, 480, 70);
        ellipse(130, 540, 80);
    
        beginShape();
        vertex(268,440);
        bezierVertex(247,454, 247, 507, 278,505);
        bezierVertex(281, 478, 273, 457, 268,440);
        endShape();
    }
    function steamyThings() {
        noStroke();
        fill(147, 33, 145, 160);
        push();
        beginShape();
        vertex(0, 0);
        vertex(430, 0);
        bezierVertex(400, 60, 340, 70, 300, 60);
        bezierVertex(270, 50, 250, 50, 220, 80);
        bezierVertex(200, 100, 180, 100, 140, 90);
        bezierVertex(100, 80, 50, 90, 0, 120);
        endShape();
        pop();
    
        fill(225, 115, 39, 190);
        push();
        beginShape();
        vertex(0, 40);
        bezierVertex(10, 40, 30, 20, 28, 0);
        vertex(255, 0);
        bezierVertex(240,30, 220, 40, 195, 30);
        bezierVertex(168,18,148, 25,140, 40);
        bezierVertex(120, 65, 95,60,70, 50);
        bezierVertex(40, 45, 25, 50, 0, 90);
        endShape();
        pop(); 
    
        fill(147, 33, 145, 160);
        push();
        beginShape();
        vertex(800, 600);
        vertex(800, 530);
        bezierVertex(790, 540, 770, 530, 750, 550);
        bezierVertex(730, 570, 680, 550, 670, 550);
        bezierVertex(630, 540, 570, 560, 520, 600);
        endShape();
        pop();
    
        fill(225, 115, 39, 190);
        push();
        beginShape();
        vertex(580, 600);
        bezierVertex(587, 580, 610, 570, 650, 578);
        bezierVertex(676, 582, 700, 585, 721, 574);
        bezierVertex(728, 570, 752, 565, 765, 580);
        bezierVertex(770, 580, 792, 580, 800, 560);
        vertex(800, 600);
        endShape();
        pop();
    }
    function nightSky() {
        let stars = [];
    
    for (let i = 0; i < 100; i++) {
      const star = {
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        alpha: Math.random()
      };
    
      stars.push(star);
    }
    
    function draw() {
      noStroke();
      background(0, 0, 0);
    
      for (let star of stars) {
        fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 255);
        ellipse(star.x, star.y, 2);
        star.alpha = star.alpha + 0.02;
      }
    }
    }
    function headline() {
        textSize(60);
        fill(229,229,229);
        text("Maus Mission", 400, 300);
    
        textSize(20);
        textStyle(ITALIC);
        text("Hit space to start the the game!", 400, 350);
    }
    function creatorName() {
        textSize(15);
        text("Made by Schmokes", 340, 570);
    }  */
  background(0, 0, 255);
}

function gameScreen() {
  background(255, 0, 0);
}

function resultScreen() {
  background(0, 255, 0);
}

let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  }
}

function keyPressed() {
  if (state === "start" && key === "32") {
    state = "game";
  }
}
