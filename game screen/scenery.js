createCanvas(800, 600);

fill(145, 163, 176);
beginShape();
vertex(620, 485);
bezierVertex(680, 439, 717, 431, 725, 409);
bezierVertex(750, 384, 783, 375, 800, 384);
vertex(800, 485);
vertex(731, 503);
endShape();

fill(299, 299, 299);
beginShape();
vertex(721, 486);
bezierVertex(721, 452, 734, 435, 753, 431);
bezierVertex(749, 379, 764, 354, 800, 318);
vertex(800, 383);
bezierVertex(797, 388, 782, 403, 787, 413);
bezierVertex(788, 430, 781, 454, 757, 455);
bezierVertex(749, 469, 764, 472, 755, 487);
endShape();

fill(220, 220, 220);
beginShape();
vertex(0, 416);
bezierVertex(8, 400, 19, 409, 29, 419);
bezierVertex(53, 468, 145, 493, 186, 488);
bezierVertex(210, 499, 234, 501, 262, 488);
bezierVertex(265, 478, 322, 485, 379, 501);
bezierVertex(420, 513, 533, 516, 592, 497);
bezierVertex(621, 466, 675, 462, 724, 486);
bezierVertex(753, 491, 766, 467, 800, 476);
vertex(800, 600);
vertex(0, 600);
endShape();

fill(145, 163, 176);
beginShape();
vertex(612, 570);
bezierVertex(653, 546, 721, 537, 746, 549);
bezierVertex(758, 552, 764, 537, 776, 530);
bezierVertex(783, 553, 793, 553, 800, 522);
vertex(800, 600);
vertex(612, 600);
endShape();

fill(299, 299, 299);
beginShape();
vertex(112, 538);
bezierVertex(195, 523, 247, 525, 289, 537);
bezierVertex(315, 555, 392, 552, 448, 540);
bezierVertex(473, 525, 533, 538, 575, 559);
bezierVertex(622, 555, 676, 576, 699, 600);
vertex(112, 600);
endShape();

fill(145, 163, 176);
beginShape();
vertex(0, 431);
bezierVertex(4, 431, 14, 430, 22, 440);
bezierVertex(37, 487, 74, 513, 101, 525);
bezierVertex(137, 551, 178, 530, 226, 570);
bezierVertex(254, 569, 287, 581, 300, 600);
vertex(0, 600);
endShape();

fill(299, 299, 299);
beginShape();
vertex(0, 528);
bezierVertex(22, 537, 34, 555, 66, 564);
bezierVertex(107, 569, 142, 570, 190, 600);
vertex(0, 600);
endShape();

//landing space
fill(75, 75, 75);
rect(357, 544, 15, 20);
rect(426, 546, 15, 20);

push();
fill(130, 130, 130);
beginShape();
vertex(335, 522);
vertex(335, 547);
bezierVertex(368, 562, 428, 562, 465, 547);
vertex(465, 522);
endShape();

fill(250, 250, 250);
ellipse(400, 520, 130, 30);
fill(153, 0, 0);
ellipse(400, 520, 110, 20);
pop();

beginShape();
vertex(343, 533);
vertex(343, 543);
vertex(334, 549);
vertex(334, 568);
vertex(324, 568);
vertex(324, 543);
vertex(335, 533);
vertex(343, 533);
endShape();

beginShape();
vertex(458, 533);
vertex(458, 543);
vertex(468, 549);
vertex(468, 568);
vertex(478, 568);
vertex(478, 543);
vertex(466, 533);
vertex(458, 533);
endShape();

beginShape();
vertex(386, 547);
vertex(411, 547);
vertex(411, 580);
vertex(386, 580);
vertex(386, 547);
endShape();

line(386, 561, 403, 561);
line(324, 543, 329, 547);
line(478, 543, 472, 547);
