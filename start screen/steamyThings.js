noStroke();
fill("purple");
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

fill("darkorange");
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