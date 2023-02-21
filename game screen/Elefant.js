let x = 100;
let y = 200;
let s = 0.8;

background(200, 200, 200);

//Backleg
push();
fill("#f2eeec");
beginShape();
vertex(x + 135, y + 28);
vertex(x + 162, y + 54);
bezierVertex(x + 156, y + 74, x + 144, y + 81, x + 134, y + 84);
vertex(x + 104, y + 60);
endShape();
pop();

push();
fill("#8b553f");
beginShape();
vertex(x + 159, y + 51);
vertex(x + 167, y + 59);
bezierVertex(x + 165, y + 72, x + 153, y + 84, x + 141, y + 90);
vertex(x + 132, y + 82);
bezierVertex(x + 144, y + 76, x + 154, y + 66, x + 159, y + 51);
endShape();
pop();

//Frontleg Right
push();
fill("#f2eeec");
beginShape();
vertex(x + 116, y + 69);
vertex(x + 116, y + 82);
vertex(x + 119, y + 82);
vertex(x + 119, y + 97);
bezierVertex(x + 125, y + 100, x + 125, y + 103, x + 123, y + 107);
vertex(x + 118, y + 112);
bezierVertex(x + 105, y + 115, x + 95, y + 113, x + 84, y + 112);
vertex(x + 80, y + 106);
vertex(x + 79, y + 75);
endShape();
pop();

push();
fill("#8b553f");
beginShape();
vertex(x + 119, y + 86);
vertex(x + 122, y + 95);
bezierVertex(x + 115, y + 103, x + 95, y + 105, x + 80, y + 105);
vertex(x + 77, y + 96);
bezierVertex(x + 92, y + 94, x + 105, y + 95, x + 119, y + 86);
endShape();
pop();

line(x + 111, y + 101, x + 116, y + 104);
line(x + 119, y + 82, x + 112, y + 85);

//Frontleg Left
push();
fill("#f2eeec");
beginShape();
vertex(x + 15, y + 87);
vertex(x - 2, y + 102);
bezierVertex(x - 17, y + 96, x - 28, y + 84, x - 30, y + 77);
bezierVertex(x - 34, y + 67, x - 25, y + 67, x - 18, y + 72);
vertex(x - 13, y + 60);
endShape();
pop();

push();
fill("#8b553f");
beginShape();
vertex(x - 18, y + 72);
bezierVertex(x - 16, y + 84, x - 7, y + 94, x + 5, y + 97);
vertex(x + 14, y + 89);
vertex(x - 16, y + 61);
vertex(x - 18, y + 72);
endShape();
pop();

line(x - 17, y + 78, x - 22, y + 74);

//Tail
push();
fill(0, 0, 0);
beginShape();
vertex(x + 140, y - 35);
bezierVertex(x + 143, y - 55, x + 160, y - 31, x + 175, y - 72);
vertex(x + 179, y - 86);
vertex(x + 180, y - 78);
vertex(x + 183, y - 90);
vertex(x + 184, y - 80);
vertex(x + 190, y - 84);
vertex(x + 181, y - 73);
bezierVertex(x + 180, y - 70, x + 178, y - 68, x + 175, y - 68);
bezierVertex(x + 164, y - 63, x + 158, y - 56, x + 148, y - 32);
endShape();
pop();

//Autronaut Body
push();
fill("#f2eeec");
ellipse(x + 70, y + 10, 190, 170);
pop();
line(x + 104, y + 69, x + 140, y + 45);
line(x + 140, y + 45, x + 148, y + 17);
line(x + 148, y + 17, x + 149, y - 6);
line(x + 149, y - 6, x + 136, y - 31);
line(x + 136, y - 31, x + 64, y - 63);
line(x + 64, y - 63, x + 24, y - 58);

//Ear right
push();
fill("#252b56");
beginShape();
vertex(x + 111, y - 12);
bezierVertex(x - 2, y - 23, x + 86, y - 33, x + 75, y - 50);
bezierVertex(x + 74, y - 82, x + 90, y - 93, x + 108, y - 94);
bezierVertex(x + 140, y - 89, x + 159, y - 62, x + 154, y - 44);
bezierVertex(x + 147, y - 23, x + 135, y - 14, x + 111, y - 12);
endShape();
pop();

line(x + 92, y - 49, x + 94, y - 65);
line(x + 94, y - 65, x + 101, y - 75);
line(x + 101, y - 75, x + 116, y - 74);

//Ear left
push();
fill("#252b56");
beginShape();
vertex(x + 22, y - 48);
bezierVertex(x + 23, y - 53, x + 26, y - 58, x + 26, y - 69);
bezierVertex(x + 16, y - 87, x - 4, y - 87, x - 17, y - 87);
bezierVertex(x - 46, y - 78, x - 50, y - 71, x - 52, y - 54);
bezierVertex(x - 52, y - 30, x - 38, y - 16, x - 21, y - 15);
vertex(x + 22, y - 48);
endShape();
pop();

line(x + 9, y - 54, x + 8, y - 70);
line(x + 8, y - 70, x - 10, y - 74);
line(x - 10, y - 74, x - 23, y - 67);

//Inside Helmet
push();
fill("#b1988b");
ellipse(x + 45, y + 26, 152, 144);

beginShape();
vertex(x - 22, y - 9);
bezierVertex(x - 20, y + 110, x + 97, y + 81, x + 108, y + 25);
endShape();
pop();

//Head
push();
fill("#252b56");
beginShape();
vertex(x + 24, y - 39);
bezierVertex(x - 3, y - 12, x - 8, y + 20, x + 8, y + 49);
bezierVertex(x + 3, y + 84, x + 9, y + 96, x + 24, y + 99);
bezierVertex(x + 50, y + 102, x + 64, y + 92, x + 77, y + 48);
bezierVertex(x + 90, y + 36, x + 97, y + 18, x + 92, y - 16);
vertex(x + 61, y - 35);
vertex(x + 31, y - 42);
endShape();
pop();

line(x + 8, y + 49, x + 12, y + 54);

//Eye left
push();
beginShape();
vertex(x + 22, y - 17);
bezierVertex(x + 10, y - 10, x + 9, y + 8, x + 15, y + 12);
bezierVertex(x + 29, y + 17, x + 39, y - 23, x + 22, y - 17);
endShape();
pop();

push();
fill(0, 0, 0);
beginShape();
vertex(x + 23, y + 10);
bezierVertex(x + 13, y + 5, x + 19, y - 10, x + 30, y - 2);
bezierVertex(x + 29, y + 4, x + 26, y + 7, x + 23, y + 10);
endShape();
pop();

//Eye right
beginShape();
vertex(x + 59, y - 12);
bezierVertex(x + 45, y - 10, x + 37, y + 12, x + 55, y + 20);
bezierVertex(x + 75, y + 21, x + 76, y - 12, x + 59, y - 12);
endShape();

push();
fill(0, 0, 0);
beginShape();
vertex(x + 59, y + 19);
bezierVertex(x + 42, y + 8, x + 65, y - 9, x + 69, y + 10);
bezierVertex(x + 68, y + 17, x + 63, y + 19, x + 59, y + 19);
endShape();
pop();

//Glas of Helmet
push();
noFill();
ellipse(x + 33, y + 36, 150);
pop();

push();
fill("#7090a9");
beginShape();
vertex(x - 25, y + 55);
bezierVertex(x - 13, y + 66, x - 5, y + 76, x + 8, y + 86);
bezierVertex(x + 2, y + 96, x - 30, y + 63, x - 25, y + 55);
endShape();
pop();

//Attachment of Helmet
push();
fill("#f2eeec");
beginShape();
vertex(x + 82, y + 92);
bezierVertex(x + 105, y + 70, x + 119, y + 56, x + 127, y + 35);
bezierVertex(x + 127, y + 4, x + 115, y - 26, x + 90, y - 41);
bezierVertex(x + 77, y - 46, x + 65, y - 50, x + 58, y - 53);
bezierVertex(x + 41, y - 57, x + 34, y - 57, x + 23, y - 55);
bezierVertex(x + 11, y - 51, x + 5, y - 48, x - 4, y - 42);
bezierVertex(x - 17, y - 37, x - 22, y - 30, x - 32, y - 1);
bezierVertex(x - 19, y - 21, x - 1, y - 33, x + 10, y - 35);
bezierVertex(x + 41, y - 40, x + 65, y - 30, x + 89, y - 12);
bezierVertex(x + 108, y + 12, x + 110, y + 33, x + 100, y + 56);
bezierVertex(x + 97, y + 65, x + 92, y + 72, x + 82, y + 92);
endShape();
pop();
