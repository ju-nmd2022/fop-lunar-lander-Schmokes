createCanvas(800,600);
background(0,0,0);

//Moon
noStroke();
fill(229,229,229);
ellipse(130,570, 368);

fill(201,201,201);
ellipse(70, 440, 45);
ellipse(170, 480, 90);
ellipse(40, 560, 70);
ellipse(180, 590, 70);

beginShape();
vertex(285,473);
bezierVertex(264, 496, 276, 543, 310, 530);
bezierVertex(305, 509, 296, 484, 285, 473);

endShape();