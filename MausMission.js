function setup() {
  window.createCanvas(800, 600);
  background("#000014");
}
function startScreen() {
  //moon
  noStroke();
  fill(229, 229, 229);
  ellipse(100, 500, 358);

  fill(201, 201, 201);
  ellipse(80, 380, 45);
  ellipse(160, 430, 60);
  ellipse(20, 480, 70);
  ellipse(130, 540, 80);

  beginShape();
  vertex(268, 440);
  bezierVertex(247, 454, 247, 507, 278, 505);
  bezierVertex(281, 478, 273, 457, 268, 440);
  endShape();

  //steamy things
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
  bezierVertex(240, 30, 220, 40, 195, 30);
  bezierVertex(168, 18, 148, 25, 140, 40);
  bezierVertex(120, 65, 95, 60, 70, 50);
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

  //headline
  textSize(60);
  fill(229, 229, 229);
  text("Maus Mission", 400, 300);

  textSize(20);
  textStyle(ITALIC);
  text("Hit space to start the the game!", 400, 350);

  //creator name
  textSize(15);
  text("Made by Schmokes", 340, 570);
}

function gameScreen() {
  background(255, 0, 0);
}

function winScreen() {
  //mission accomplished
  fill(299, 299, 299);
  textSize(60);
  text("Mission Accomplished!", 100, 120);
  textSize(20);
  textStyle(ITALIC);
  text("To restart the Mission press R", 235, 200);
}

function loseScreen() {
  //mission failed
  fill(299, 299, 299);
  textSize(60);
  text("Mission Failed!", 170, 120);
  textSize(20);
  textStyle(ITALIC);
  text("To restart the Mission press R", 235, 200);
}

function draw() {
  missionFailed();
  elefant(300, 360, 1.1);
}

let state = "win";

//changing the screens
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "win") {
    winScreen();
  } else if (state === "lose") {
    loseScreen();
  }

  //changing of screens with space
  if (keyIsDown(32) && state === "start") {
    state = "game";
  } else if (keyIsDown(32) && (state === "lose" || state === "win")) {
    state = "game";
  }
}
