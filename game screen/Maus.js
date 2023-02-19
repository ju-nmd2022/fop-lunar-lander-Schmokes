background(0, 150, 255);
let x = 100;
let y = 150;

translate(x, y);

//HEAD
//Ear left
push();
fill(133, 86, 53, 255);
beginShape();
vertex(x + 25, y - 75);
vertex(x + 30, y - 105);
vertex(x + 50, y - 110);
vertex(x + 60, y - 100);
vertex(x + 59, y - 93);
vertex(x + 40, y - 70);
endShape();
pop();

//Ear right
push();
fill(133, 86, 53, 255);
beginShape();
vertex(x + 35, y - 70);
vertex(x + 50, y - 94);
vertex(x + 70, y - 93);
vertex(x + 72, y - 78);
vertex(x + 63, y - 67);
vertex(x + 42, y - 63);
endShape();
pop();

//Wiskers top
line(x - 66, y - 75, x - 71, y - 97);
line(x - 63, y - 74, x - 60, y - 103);
line(x - 56, y - 75, x - 53, y - 101);

//Head
push();
fill(234, 113, 50, 255);
beginShape();
vertex(x - 41, y - 35);
vertex(x - 38, y - 5);
vertex(x + 42, y - 2);
bezierVertex(x + 50, y - 70, x + 40, y - 90, x - 5, y - 85);
bezierVertex(x - 23, y - 82, x - 50, y - 80, x - 70, y - 76);
bezierVertex(x - 74, y - 76, x - 80, y - 65, x - 67, y - 53);
bezierVertex(x - 40, y - 30, x - 20, y - 22, x - 10, y - 30);
endShape();
pop();

//Nose
push();
fill(0, 0, 0);
beginShape();
vertex(x - 66, y - 76);
bezierVertex(x - 74, y - 78, x - 80, y - 65, x - 67, y - 53);
bezierVertex(x - 63, y - 60, x - 63, y - 67, x - 66, y - 76);
endShape();
pop();

//Eye left
push();
fill(255, 255, 255);
beginShape();
vertex(x - 20, y - 84);
bezierVertex(x - 15, y - 83, x - 4, y - 90, x + 10, y - 85);
vertex(x + 12, y - 82);
bezierVertex(x + 8, y - 77, x, y - 74, x - 15, y - 74);
bezierVertex(x - 21, y - 76, x - 24, y - 78, x - 20, y - 84);
endShape();
pop();

push();
fill(0, 0, 0);
beginShape();
vertex(x + 2, y - 76);
vertex(x - 9, y - 74);
bezierVertex(x - 13, y - 78, x - 12, y - 81, x - 8, y - 83);
endShape();
pop();

push();
fill(234, 113, 50, 255);
beginShape();
vertex(x - 12, y - 86);
vertex(x + 2, y - 76);
vertex(x + 11, y - 79);
vertex(x + 12, y - 85);
bezierVertex(x + 3, y - 88, x - 1, y - 86, x - 12, y - 86);
endShape();
pop();

//Eye right
push();
fill(255, 255, 255);
beginShape();
vertex(x + 20, y - 67);
bezierVertex(x + 25, y - 60, x + 25, y - 55, x + 12, y - 49);
bezierVertex(x, y - 50, x - 5, y - 59, x - 1, y - 65);
bezierVertex(x + 6, y - 68, x + 11, y - 70, x + 20, y - 67);
endShape();
pop();

push();
fill(0, 0, 0);
beginShape();
vertex(x + 9, y - 50);
bezierVertex(x + 6, y - 57, x + 7, y - 61, x + 14, y - 62);
vertex(x + 19, y - 53);
bezierVertex(x + 16, y - 49, x + 13, y - 48, x + 9, y - 50);
endShape();
pop();

push();
fill(234, 113, 50, 255);
beginShape();
vertex(x + 4, y - 70);
bezierVertex(x + 13, y - 65, x + 18, y - 60, x + 18, y - 51);
vertex(x + 27, y - 60);
bezierVertex(x + 32, y - 69, x + 27, y - 74, x + 4, y - 70);
endShape();
pop();

//Wiskers down
line(x - 62, y - 54, x - 66, y - 34);
line(x - 57, y - 50, x - 60, y - 27);
line(x - 52, y - 53, x - 51, y - 30);

//Jetpack
push();
fill(234, 113, 50, 255);
beginShape();
vertex(x + 49, y - 9);
vertex(x + 60, y - 4);
bezierVertex(x + 56, y + 20, x + 55, y + 43, x + 57, y + 57);
bezierVertex(x + 52, y + 67, x + 45, y + 67, x + 37, y + 64);
vertex(x + 37, y - 2);
vertex(x + 49, y - 9);
endShape();
pop();

//Tail
push();
fill(0, 0, 0);
beginShape();
vertex(x + 23, y + 79);
bezierVertex(x + 40, y + 86, x + 51, y + 88, x + 71, y + 85);
bezierVertex(x + 88, y + 87, x + 99, y + 96, x + 114, y + 95);
bezierVertex(x + 117, y + 95, x + 117, y + 96, x + 114, y + 98);
bezierVertex(x + 99, y + 97, x + 88, y + 96, x + 74, y + 93);
bezierVertex(x + 50, y + 94, x + 30, y + 97, x + 12, y + 84);
endShape();
pop();

//Helmet
push();
fill(207, 235, 238, 255);
noFill();
beginShape();
vertex(x - 58, y - 22);
bezierVertex(x - 190, y - 180, x + 180, y - 180, x + 51, y - 17);
endShape();
pop();

push();
beginShape();
vertex(x - 16, y - 125);
bezierVertex(x - 28, y - 125, x - 41, y - 123, x - 53, y - 117);
bezierVertex(x - 59, y - 115, x - 60, y - 118, x - 57, y - 123);
bezierVertex(x - 50, y - 129, x - 32, y - 132, x - 20, y - 132);
bezierVertex(x - 12, y - 132, x - 8, y - 127, x - 16, y - 125);
endShape();
pop();

//Left Arm
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x - 109, y - 7);
bezierVertex(x - 109, y - 17, x - 112, y - 19, x - 115, y - 19);
bezierVertex(x - 134, y - 20, x - 130, y + 8, x - 111, y + 9);
bezierVertex(x - 112, y + 13, x - 93, y + 4, x - 79, y + 12);
bezierVertex(x - 71, y + 11, x - 65, y + 15, x - 61, y + 16);
vertex(x - 50, y - 2);
vertex(x - 56, y - 15);
bezierVertex(x - 77, y - 11, x - 96, y - 8, x - 110, y - 14);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(x - 102, y - 12);
bezierVertex(x - 102, y - 16, x - 98, y - 13, x - 95, y - 11);
bezierVertex(x - 93, y - 15, x - 86, y - 15, x - 84, y - 12);
bezierVertex(x - 78, y - 5, x - 79, y + 4, x - 84, y + 10);
bezierVertex(x - 91, y + 11, x - 98, y + 10, x - 107, y + 9);
bezierVertex(x - 106, y + 3, x - 107, y - 7, x - 102, y - 12);
endShape();
pop();

line(x - 116, y - 7, x - 115, y - 4);
line(x - 115, y - 4, x - 116, y + 3);
line(x - 116, y + 3, x - 118, y + 5);

line(x - 88, y - 8, x - 86, y - 2);
line(x - 86, y - 2, x - 86, y + 4);

line(x - 61, y + 5, x - 61, y - 3);
line(x - 61, y - 3, x - 58, y - 9);

//Left Leg
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x - 36, y + 83);
vertex(x - 41, y + 94);
vertex(x - 40, y + 98);
vertex(x - 44, y + 98);
vertex(x - 44, y + 120);
bezierVertex(x - 53, y + 128, x - 70, y + 123, x - 73, y + 120);
bezierVertex(x - 75, y + 117, x - 72, y + 110, x - 65, y + 109);
vertex(x - 65, y + 100);
bezierVertex(x - 72, y + 90, x - 70, y + 90, x - 66, y + 83);
bezierVertex(x - 62, y + 78, x - 61, y + 74, x - 57, y + 72);
endShape();
pop();

push();
fill(53, 62, 59, 255);
beginShape();
vertex(x - 65, y + 107);
vertex(x - 55, y + 111);
vertex(x - 58, y + 116);
vertex(x - 70, y + 112);
vertex(x - 65, y + 107);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(x - 44, y + 98);
bezierVertex(x - 51, y + 97, x - 59, y + 97, x - 68, y + 95);
bezierVertex(x - 70, y + 99, x - 69, y + 102, x - 66, y + 104);
bezierVertex(x - 69, y + 106, x - 68, y + 108, x - 64, y + 109);
vertex(x - 45, y + 109);
bezierVertex(x - 42, y + 105, x - 43, y + 101, x - 44, y + 98);
endShape();
pop();

line(x - 66, y + 104, x - 60, y + 104);
line(x - 67, y + 89, x - 60, y + 91);

//Astronaut Body
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x - 60, y - 22);
bezierVertex(x - 14, y - 10, x + 21, y - 9, x + 53, y - 18);
bezierVertex(x + 43, y + 15, x + 37, y + 30, x + 40, y + 70);
bezierVertex(x + 05, y + 100, x - 40, y + 90, x - 63, y + 70);
bezierVertex(x - 80, y + 30, x - 55, y, x - 56, y - 5);
vertex(x - 57, y - 10);
vertex(x - 60, y - 23);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(x - 56, y - 5);
bezierVertex(x - 22, y + 7, x + 16, y + 9, x + 47, y);
vertex(x + 50, y - 8);
bezierVertex(x + 18, y, x - 22, y - 1, x - 57, y - 14);
bezierVertex(x - 59, y - 11, x - 58, y - 8, x - 56, y - 5);
endShape();
pop();

//Zipper
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x - 38, y + 85);
bezierVertex(x - 39, y + 49, x - 34, y + 30, x - 30, y + 13);
endShape();
pop();

push();
strokeWeight(1.3);
fill(110, 104, 103, 255);
beginShape();
vertex(x - 30, y + 13);
vertex(x - 27, y + 24);
vertex(x - 38, y + 21);
vertex(x - 30, y + 13);
endShape();
pop();

line(x - 36, y + 11, x - 24, y + 14);
line(x - 39, y + 31, x - 28, y + 34);
line(x - 41, y + 41, x - 30, y + 44);
line(x - 42, y + 51, x - 31, y + 54);
line(x - 44, y + 60, x - 31, y + 63);
line(x - 44, y + 71, x - 31, y + 74);

//Rigth Arm
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x + 38, y + 31);
vertex(x + 29, y + 28);
bezierVertex(x + 27, y + 15, x + 31, y + 6, x + 34, y + 3);
vertex(x + 40, y + 2);
endShape();
pop();

push();
fill(233, 226, 210, 255);
beginShape();
vertex(x + 76, y + 18);
bezierVertex(x + 75, y + 14, x + 81, y + 4, x + 87, y + 6);
bezierVertex(x + 103, y + 10, x + 97, y + 37, x + 77, y + 35);
bezierVertex(x + 65, y + 31, x + 59, y + 30, x + 53, y + 30);
bezierVertex(x + 43, y + 32, x + 38, y + 31, x + 34, y + 29);
bezierVertex(x + 34, y + 17, x + 36, y + 4, x + 43, y + 2);
bezierVertex(x + 62, y + 9, x + 70, y + 10, x + 78, y + 9);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(x + 54, y + 30);
bezierVertex(x + 53, y + 22, x + 53, y + 15, x + 58, y + 7);
bezierVertex(x + 61, y + 4, x + 59, y + 6, x + 72, y + 9);
bezierVertex(x + 67, y + 17, x + 65, y + 23, x + 67, y + 32);
bezierVertex(x + 61, y + 31, x + 59, y + 30, x + 54, y + 30);
endShape();
pop();

line(x + 61, y + 10, x + 59, y + 16);

line(x + 85, y + 12, x + 83, y + 17);
line(x + 83, y + 17, x + 83, y + 25);

//Rigth Leg
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x + 22, y + 82);
vertex(x + 18, y + 108);
vertex(x + 17, y + 127);
bezierVertex(x + 11, y + 132, x - 7, y + 131, x - 14, y + 127);
bezierVertex(x - 14, y + 123, x - 9, y + 119, x - 6, y + 118);
vertex(x - 6, y + 110);
vertex(x - 10, y + 97);
vertex(x - 8, y + 85);
vertex(x + 22, y + 82);
endShape();
pop();

push();
fill(233, 226, 210, 255);
beginShape();
vertex(x + 21, y + 85);
bezierVertex(x + 11, y + 83, x + 08, y + 81, x - 10, y + 89);
bezierVertex(x - 10, y + 86, x - 9, y + 84, x - 7, y + 83);
bezierVertex(x + 08, y + 77, x + 14, y + 79, x + 22, y + 81);
bezierVertex(x + 24, y + 83, x + 24, y + 87, x + 21, y + 85);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(x - 9, y + 100);
vertex(x - 8, y + 111);
bezierVertex(x - 2, y + 113, x + 11, y + 113, x + 18, y + 110);
vertex(x + 20, y + 99);
bezierVertex(x + 11, y + 99, x - 1, y + 102, x - 9, y + 100);
endShape();
pop();

push();
fill(53, 62, 59, 255);
beginShape();
vertex(x - 6, y + 117);
vertex(x + 3, y + 119);
vertex(x, y + 123);
vertex(x - 11, y + 120);
vertex(x - 6, y + 117);
endShape();
pop();

line(x - 7, y + 97, x - 2, y + 97);
line(x - 8, y + 103, x - 3, y + 104);
