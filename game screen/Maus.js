background(0, 150, 255);
/* 
translate(200,200); */

//HEAD
//Ear left
push();
beginShape();
vertex(225, 125);
vertex(230, 95);
vertex(250, 90);
vertex(260, 100);
vertex(259, 107);
vertex(240, 130);
endShape();
pop();

//Ear right
push();
beginShape();
vertex(235, 130);
vertex(250, 106);
vertex(270, 107);
vertex(272, 122);
vertex(263, 133);
vertex(242, 137);
endShape();
pop();

//Wiskers top
line(134, 125, 129, 103);
line(137, 126, 140, 97);
line(144, 125, 147, 99);

//Head
push();
beginShape();
vertex(160, 165);
vertex(162, 195);
vertex(242, 198);
bezierVertex(250, 130, 240, 110, 195, 115);
bezierVertex(177, 118, 150, 120, 130, 124);
bezierVertex(126, 124, 120, 135, 133, 147);
bezierVertex(160, 170, 180, 178, 190, 170);
endShape();
pop();

//Nose
push();
fill(0, 0, 0);
beginShape();
vertex(134, 124);
bezierVertex(126, 124, 120, 135, 133, 147);
bezierVertex(137, 140, 137, 135, 134, 124);
endShape();
pop();

//Eye left
push();
beginShape();
vertex(180, 116);
bezierVertex(185, 117, 196, 110, 210, 115);
vertex(212, 118);
bezierVertex(208, 123, 200, 126, 185, 126);
bezierVertex(179, 124, 176, 122, 180, 116);
endShape();
pop();

push();
fill(0, 0, 0);
beginShape();
vertex(202, 124);
vertex(191, 126);
bezierVertex(187, 122, 188, 119, 191, 117);
endShape();
pop();

push();
beginShape();
vertex(188, 114);
vertex(202, 124);
vertex(211, 118);
vertex(209, 115);
bezierVertex(203, 112, 199, 114, 188, 114);
endShape();
pop();

//Eye right
push();
beginShape();
vertex(220, 133);
bezierVertex(225, 140, 225, 145, 212, 151);
bezierVertex(200, 150, 195, 141, 201, 135);
bezierVertex(206, 132, 211, 130, 220, 133);
endShape();
pop();

push();
fill(0, 0, 0);
beginShape();
vertex(209, 150);
bezierVertex(206, 143, 207, 139, 214, 138);
vertex(219, 147);
bezierVertex(216, 151, 213, 152, 209, 150);
endShape();
pop();

push();
beginShape();
vertex(204, 130);
bezierVertex(213, 135, 218, 140, 218, 149);
vertex(227, 140);
bezierVertex(232, 131, 227, 126, 204, 130);
endShape();
pop();

//Wiskers down
line(138, 146, 134, 167);
line(143, 150, 140, 175);
line(148, 147, 149, 170);

//Jetpack
push();
beginShape();
vertex(249, 191);
vertex(260, 196);
bezierVertex(256, 220, 255, 243, 257, 257);
bezierVertex(252, 267, 245, 267, 237, 264);
vertex(237, 198);
vertex(249, 191);
endShape();
pop();

//Tail
push();
beginShape();
vertex(223, 279);
bezierVertex(240, 286, 251, 288, 271, 285);
bezierVertex(288, 287, 299, 296, 314, 295);
bezierVertex(317, 295, 317, 296, 314, 298);
bezierVertex(299, 297, 288, 296, 274, 293);
bezierVertex(250, 294, 230, 297, 212, 284);
endShape();
pop();

//Helmet
push();
noFill();
beginShape();
vertex(142, 178);
bezierVertex(10, 20, 380, 20, 251, 183);
endShape();
pop();

push();
beginShape();
vertex(184, 75);
bezierVertex(172, 75, 159, 77, 147, 83);
bezierVertex(141, 85, 140, 82, 143, 77);
bezierVertex(150, 71, 168, 68, 180, 68);
bezierVertex(188, 68, 192, 73, 184, 75);
endShape();
pop();

//Astronaut Body
//Body
push();
beginShape();
vertex(140, 178);
bezierVertex(186, 190, 221, 191, 253, 182);
bezierVertex(243, 215, 237, 230, 240, 270);
bezierVertex(205, 300, 160, 290, 137, 270);
bezierVertex(120, 230, 145, 200, 144, 195);
vertex(143, 190);
vertex(140, 177);
endShape();
pop();

//Brown detail
push();
beginShape();
vertex(144, 195);
bezierVertex(178, 207, 216, 209, 247, 200);
vertex(250, 192);
bezierVertex(218, 200, 178, 199, 143, 186);
bezierVertex(141, 189, 142, 192, 144, 195);
endShape();
pop();

//Zipper
push();
beginShape();
vertex(162, 285);
bezierVertex(161, 249, 166, 230, 170, 213);
endShape();
pop();

push();
beginShape();
vertex(170, 213);
vertex(173, 224);
vertex(162, 221);
vertex(170, 213);
endShape();
pop();

line(164, 211, 176, 214);
line(161, 231, 172, 234);
line(159, 241, 170, 244);
line(158, 251, 169, 254);
line(156, 260, 169, 263);
line(156, 271, 169, 274);
