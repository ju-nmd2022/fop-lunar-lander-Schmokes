background(0, 150, 255);
/* 
translate(200,200); */

//HEAD
//Ear left
push();
fill(133, 86, 53, 255);
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
fill(133, 86, 53, 255);
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
fill(234, 113, 50, 255);
beginShape();
vertex(159, 165);
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
fill(255, 255, 255);
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
bezierVertex(187, 122, 188, 119, 192, 117);
endShape();
pop();

push();
fill(234, 113, 50, 255);
beginShape();
vertex(188, 114);
vertex(202, 124);
vertex(211, 121);
vertex(212, 115);
bezierVertex(203, 112, 199, 114, 188, 114);
endShape();
pop();

//Eye right
push();
fill(255, 255, 255);
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
fill(234, 113, 50, 255);
beginShape();
vertex(204, 130);
bezierVertex(213, 135, 218, 140, 218, 149);
vertex(227, 140);
bezierVertex(232, 131, 227, 126, 204, 130);
endShape();
pop();

//Wiskers down
line(138, 146, 134, 166);
line(143, 150, 140, 173);
line(148, 147, 149, 170);

//Jetpack
push();
fill(234, 113, 50, 255);
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
fill(0, 0, 0);
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
fill(207, 235, 238, 255);
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

//Left Arm
push();
fill(233, 226, 210, 255);
beginShape();
vertex(91, 193);
bezierVertex(91, 183, 88, 181, 85, 181);
bezierVertex(66, 180, 70, 208, 89, 209);
bezierVertex(88, 213, 107, 204, 121, 212);
bezierVertex(129, 211, 135, 215, 139, 216);
vertex(150, 198);
vertex(144, 185);
bezierVertex(123, 189, 104, 192, 90, 186);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(98, 188);
bezierVertex(98, 184, 102, 187, 105, 189);
bezierVertex(107, 185, 114, 185, 116, 188);
bezierVertex(122, 195, 121, 204, 116, 210);
bezierVertex(109, 211, 102, 210, 93, 209);
bezierVertex(94, 203, 93, 193, 98, 188);
endShape();
pop();

line(84, 193, 85, 196);
line(85, 196, 84, 203);
line(84, 203, 82, 205);

line(112, 192, 114, 198);
line(114, 198, 114, 204);

line(139, 205, 139, 197);
line(139, 197, 142, 191);

//Left Leg
push();
fill(233, 226, 210, 255);
beginShape();
vertex(164, 283);
vertex(159, 294);
vertex(160, 298);
vertex(156, 298);
vertex(156, 320);
bezierVertex(147, 328, 130, 323, 127, 320);
bezierVertex(125, 317, 128, 310, 135, 309);
vertex(135, 300);
bezierVertex(128, 290, 130, 290, 134, 283);
bezierVertex(138, 278, 139, 274, 143, 272);
endShape();
pop();

push();
fill(53, 62, 59, 255);
beginShape();
vertex(135, 307);
vertex(145, 311);
vertex(142, 316);
vertex(130, 312);
vertex(135, 307);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(156, 298);
bezierVertex(149, 297, 141, 297, 132, 295);
bezierVertex(130, 299, 131, 302, 134, 304);
bezierVertex(131, 306, 132, 308, 136, 309);
vertex(155, 309);
bezierVertex(158, 305, 157, 301, 156, 298);
endShape();
pop();

line(134, 304, 140, 304);
line(133, 289, 140, 291);

//Astronaut Body
push();
fill(233, 226, 210, 255);
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

push();
fill(133, 86, 53, 255);
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
fill(233, 226, 210, 255);
beginShape();
vertex(162, 285);
bezierVertex(161, 249, 166, 230, 170, 213);
endShape();
pop();

push();
strokeWeight(1.3);
fill(110, 104, 103, 255);
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

//Rigth Arm
push();
fill(233, 226, 210, 255);
beginShape();
vertex(238, 231);
vertex(229, 228);
bezierVertex(227, 215, 231, 206, 234, 203);
vertex(240, 202);
endShape();
pop();

push();
fill(233, 226, 210, 255);
beginShape();
vertex(276, 218);
bezierVertex(275, 214, 281, 204, 287, 206);
bezierVertex(303, 210, 297, 237, 277, 235);
bezierVertex(265, 231, 259, 230, 253, 230);
bezierVertex(243, 232, 238, 231, 234, 229);
bezierVertex(234, 217, 236, 204, 243, 202);
bezierVertex(262, 209, 270, 210, 278, 209);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(254, 230);
bezierVertex(253, 222, 253, 215, 258, 207);
bezierVertex(261, 204, 259, 206, 272, 209);
bezierVertex(267, 217, 265, 223, 267, 232);
bezierVertex(261, 231, 259, 230, 254, 230);
endShape();
pop();

line(261, 210, 259, 216);

line(285, 212, 283, 217);
line(283, 217, 283, 225);

//Rigth Leg
push();
fill(233, 226, 210, 255);
beginShape();
vertex(222, 282);
vertex(218, 308);
vertex(217, 327);
bezierVertex(211, 332, 193, 331, 186, 327);
bezierVertex(186, 323, 191, 319, 194, 318);
vertex(194, 310);
vertex(190, 297);
vertex(192, 285);
vertex(222, 282);
endShape();
pop();

push();
fill(233, 226, 210, 255);
beginShape();
vertex(221, 285);
bezierVertex(211, 283, 208, 281, 190, 289);
bezierVertex(190, 286, 191, 284, 193, 283);
bezierVertex(208, 277, 214, 279, 222, 281);
bezierVertex(224, 283, 224, 287, 221, 285);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(191, 300);
vertex(192, 311);
bezierVertex(198, 313, 211, 313, 218, 310);
vertex(220, 299);
bezierVertex(211, 299, 199, 302, 191, 300);
endShape();
pop();

push();
fill(53, 62, 59, 255);
beginShape();
vertex(194, 317);
vertex(203, 319);
vertex(200, 323);
vertex(189, 320);
vertex(194, 317);
endShape();
pop();

line(193, 297, 198, 297);
line(192, 303, 197, 304);
