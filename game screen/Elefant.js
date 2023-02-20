background(200, 200, 200);

//Backleg
/* push();
beginShape();
vertex(335, 228);
vertex(362, 254);
bezierVertex(356, 274, 344, 281, 334, 284);
vertex(304, 260);
endShape();
pop();

push();
beginShape();
vertex(359, 251);
vertex(367, 259);
bezierVertex(365, 272, 353, 284, 341, 290);
vertex(332, 282);
bezierVertex(344, 276, 354, 266, 359, 251);
endShape();
pop(); */

//Frontleg
push();
beginShape();
vertex(316, 269);
vertex(316, 282);
vertex(319, 282);
vertex(319, 297);
bezierVertex(325, 300, 325, 303, 323, 307);
vertex(318, 312);
bezierVertex(305, 315, 295, 313, 284, 312);
vertex(280, 306);
vertex(279, 275);
endShape();
pop();

push();
beginShape();
vertex(319, 286);
vertex(322, 295);
bezierVertex(315, 303, 295, 305, 280, 305);
vertex(277, 296);
bezierVertex(292, 294, 305, 295, 319, 286);
endShape();
pop();

line(311, 301, 316, 304);
line(319, 282, 312, 285);

//Autronaut Body
ellipse(270, 210, 190, 170);

//Ear right
push();
beginShape();
vertex(311, 188);
bezierVertex(298, 177, 286, 167, 275, 150);
bezierVertex(274, 118, 290, 107, 308, 106);
bezierVertex(340, 111, 359, 138, 354, 156);
bezierVertex(347, 177, 335, 186, 311, 188);
endShape();
pop();

line(292, 151, 294, 135);
line(294, 135, 301, 125);
line(301, 125, 316, 126);

//Ear left
push();
beginShape();
vertex(222, 152);
bezierVertex(223, 147, 226, 142, 226, 131);
bezierVertex(216, 113, 196, 113, 183, 113);
bezierVertex(154, 122, 150, 129, 148, 146);
bezierVertex(148, 170, 162, 184, 179, 185);
vertex(222, 152);
endShape();
pop();

line(209, 146, 208, 130);
line(208, 130, 190, 126);
line(190, 126, 177, 133);

//Inside Helmet
ellipse(245, 226, 152, 144);

//Head
push();
beginShape();
vertex();
endShape();
pop();

//Eye left

//Eye right

//Glas of Helmet
push();
noFill();
ellipse(233, 236, 150);
pop();

//Attachment of Helmet
push();
beginShape();
vertex(282, 292);
bezierVertex(305, 270, 319, 256, 327, 235);
bezierVertex(327, 204, 315, 174, 290, 159);
bezierVertex(277, 154, 265, 150, 258, 147);
bezierVertex(241, 143, 234, 143, 223, 145);
bezierVertex(211, 149, 205, 152, 196, 158);
bezierVertex(183, 163, 178, 170, 168, 199);
bezierVertex(181, 179, 199, 167, 210, 165);
bezierVertex(241, 160, 265, 170, 289, 188);
bezierVertex(308, 212, 310, 233, 300, 256);
bezierVertex(297, 265, 292, 272, 282, 292);
endShape();
pop();
