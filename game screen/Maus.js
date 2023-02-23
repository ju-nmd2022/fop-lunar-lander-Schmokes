let x = 200;
let y = 200;
let s = 0.8;

//Ear left
push();
fill(133, 86, 53, 255);
beginShape();
vertex(x + 25 * s, y - 75 * s);
vertex(x + 30 * s, y - 105 * s);
vertex(x + 50 * s, y - 110 * s);
vertex(x + 60 * s, y - 100 * s);
vertex(x + 59 * s, y - 93 * s);
vertex(x + 40 * s, y - 70 * s);
endShape();
pop();

//Ear right
push();
fill(133, 86, 53, 255);
beginShape();
vertex(x + 35 * s, y - 70 * s);
vertex(x + 50 * s, y - 94 * s);
vertex(x + 70 * s, y - 93 * s);
vertex(x + 72 * s, y - 78 * s);
vertex(x + 63 * s, y - 67 * s);
vertex(x + 42 * s, y - 63 * s);
endShape();
pop();

//Wiskers top
line(x - 66 * s, y - 75 * s, x - 71 * s, y - 97 * s);
line(x - 63 * s, y - 74 * s, x - 60 * s, y - 103 * s);
line(x - 56 * s, y - 75 * s, x - 53 * s, y - 101 * s);

//Head
push();
fill(234, 113, 50, 255);
beginShape();
vertex(x - 41 * s, y - 35 * s);
vertex(x - 38 * s, y - 5 * s);
vertex(x + 42 * s, y - 2 * s);
bezierVertex(
  x + 50 * s,
  y - 70 * s,
  x + 40 * s,
  y - 90 * s,
  x - 5 * s,
  y - 85 * s
);
bezierVertex(
  x - 23 * s,
  y - 82 * s,
  x - 50 * s,
  y - 80 * s,
  x - 70 * s,
  y - 76 * s
);
bezierVertex(
  x - 74 * s,
  y - 76 * s,
  x - 80 * s,
  y - 65 * s,
  x - 67 * s,
  y - 53 * s
);
bezierVertex(
  x - 40 * s,
  y - 30 * s,
  x - 20 * s,
  y - 22 * s,
  x - 10 * s,
  y - 30 * s
);
endShape();
pop();

//Nose
push();
fill(0, 0, 0);
beginShape();
vertex(x - 66 * s, y - 76 * s);
bezierVertex(
  x - 74 * s,
  y - 78 * s,
  x - 80 * s,
  y - 65 * s,
  x - 67 * s,
  y - 53 * s
);
bezierVertex(
  x - 63 * s,
  y - 60 * s,
  x - 63 * s,
  y - 67 * s,
  x - 66 * s,
  y - 76 * s
);
endShape();
pop();

//Eye left
push();
fill(255, 255, 255);
beginShape();
vertex(x - 20 * s, y - 84 * s);
bezierVertex(
  x - 15 * s,
  y - 83 * s,
  x - 4 * s,
  y - 90 * s,
  x + 10 * s,
  y - 85 * s
);
vertex(x + 12 * s, y - 82 * s);
bezierVertex(x + 8 * s, y - 77 * s, x, y - 74 * s, x - 15 * s, y - 74 * s);
bezierVertex(
  x - 21 * s,
  y - 76 * s,
  x - 24 * s,
  y - 78 * s,
  x - 20 * s,
  y - 84 * s
);
endShape();
pop();

push();
fill(0, 0, 0);
beginShape();
vertex(x + 2 * s, y - 76 * s);
vertex(x - 9 * s, y - 74 * s);
bezierVertex(
  x - 13 * s,
  y - 78 * s,
  x - 12 * s,
  y - 81 * s,
  x - 8 * s,
  y - 83 * s
);
endShape();
pop();

push();
fill(234, 113, 50, 255);
beginShape();
vertex(x - 12 * s, y - 86 * s);
vertex(x + 2 * s, y - 76 * s);
vertex(x + 11 * s, y - 79 * s);
vertex(x + 12 * s, y - 85 * s);
bezierVertex(
  x + 3 * s,
  y - 88 * s,
  x - 1 * s,
  y - 86 * s,
  x - 12 * s,
  y - 86 * s
);
endShape();
pop();

//Eye right
push();
fill(255, 255, 255);
beginShape();
vertex(x + 20 * s, y - 67 * s);
bezierVertex(
  x + 25 * s,
  y - 60 * s,
  x + 25 * s,
  y - 55 * s,
  x + 12 * s,
  y - 49 * s
);
bezierVertex(x, y - 50 * s, x - 5 * s, y - 59 * s, x - 1 * s, y - 65 * s);
bezierVertex(
  x + 6 * s,
  y - 68 * s,
  x + 11 * s,
  y - 70 * s,
  x + 20 * s,
  y - 67 * s
);
endShape();
pop();

push();
fill(0, 0, 0);
beginShape();
vertex(x + 9 * s, y - 50 * s);
bezierVertex(
  x + 6 * s,
  y - 57 * s,
  x + 7 * s,
  y - 61 * s,
  x + 14 * s,
  y - 62 * s
);
vertex(x + 19 * s, y - 53 * s);
bezierVertex(
  x + 16 * s,
  y - 49 * s,
  x + 13 * s,
  y - 48 * s,
  x + 9 * s,
  y - 50 * s
);
endShape();
pop();

push();
fill(234, 113, 50, 255);
beginShape();
vertex(x + 4 * s, y - 70 * s);
bezierVertex(
  x + 13 * s,
  y - 65 * s,
  x + 18 * s,
  y - 60 * s,
  x + 18 * s,
  y - 51 * s
);
vertex(x + 27 * s, y - 60 * s);
bezierVertex(
  x + 32 * s,
  y - 69 * s,
  x + 27 * s,
  y - 74 * s,
  x + 4 * s,
  y - 70 * s
);
endShape();
pop();

//Wiskers down
line(x - 62 * s, y - 54 * s, x - 66 * s, y - 34 * s);
line(x - 57 * s, y - 50 * s, x - 60 * s, y - 27 * s);
line(x - 52 * s, y - 53 * s, x - 51 * s, y - 30 * s);

//Jetpack
push();
fill(234, 113, 50, 255);
beginShape();
vertex(x + 49 * s, y - 9 * s);
vertex(x + 60 * s, y - 4 * s);
bezierVertex(
  x + 56 * s,
  y + 20 * s,
  x + 55 * s,
  y + 43 * s,
  x + 57 * s,
  y + 57 * s
);
bezierVertex(
  x + 52 * s,
  y + 67 * s,
  x + 45 * s,
  y + 67 * s,
  x + 37 * s,
  y + 64 * s
);
vertex(x + 37 * s, y - 2 * s);
vertex(x + 49 * s, y - 9 * s);
endShape();
pop();

//Tail
push();
fill(0, 0, 0);
beginShape();
vertex(x + 23 * s, y + 79 * s);
bezierVertex(
  x + 40 * s,
  y + 86 * s,
  x + 51 * s,
  y + 88 * s,
  x + 71 * s,
  y + 85 * s
);
bezierVertex(
  x + 88 * s,
  y + 87 * s,
  x + 99 * s,
  y + 96 * s,
  x + 114 * s,
  y + 95 * s
);
bezierVertex(
  x + 117 * s,
  y + 95 * s,
  x + 117 * s,
  y + 96 * s,
  x + 114 * s,
  y + 98 * s
);
bezierVertex(
  x + 99 * s,
  y + 97 * s,
  x + 88 * s,
  y + 96 * s,
  x + 74 * s,
  y + 93 * s
);
bezierVertex(
  x + 50 * s,
  y + 94 * s,
  x + 30 * s,
  y + 97 * s,
  x + 12 * s,
  y + 84 * s
);
endShape();
pop();

//Helmet
push();
fill(255, 255, 255, 10);
beginShape();
vertex(x - 58 * s, y - 22 * s);
bezierVertex(
  x - 190 * s,
  y - 180 * s,
  x + 180 * s,
  y - 180 * s,
  x + 51 * s,
  y - 17 * s
);
endShape();
pop();

push();
fill(255, 255, 255, 200);
beginShape();
vertex(x - 16 * s, y - 125 * s);
bezierVertex(
  x - 28 * s,
  y - 125 * s,
  x - 41 * s,
  y - 123 * s,
  x - 53 * s,
  y - 117 * s
);
bezierVertex(
  x - 59 * s,
  y - 115 * s,
  x - 60 * s,
  y - 118 * s,
  x - 57 * s,
  y - 123 * s
);
bezierVertex(
  x - 50 * s,
  y - 129 * s,
  x - 32 * s,
  y - 132 * s,
  x - 20 * s,
  y - 132 * s
);
bezierVertex(
  x - 12 * s,
  y - 132 * s,
  x - 8 * s,
  y - 127 * s,
  x - 16 * s,
  y - 125 * s
);
endShape();
pop();

//Left Arm
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x - 109 * s, y - 7 * s);
bezierVertex(
  x - 109 * s,
  y - 17 * s,
  x - 112 * s,
  y - 19 * s,
  x - 115 * s,
  y - 19 * s
);
bezierVertex(
  x - 134 * s,
  y - 20 * s,
  x - 130 * s,
  y + 8 * s,
  x - 111 * s,
  y + 9 * s
);
bezierVertex(
  x - 112 * s,
  y + 13 * s,
  x - 93 * s,
  y + 4 * s,
  x - 79 * s,
  y + 12 * s
);
bezierVertex(
  x - 71 * s,
  y + 11 * s,
  x - 65 * s,
  y + 15 * s,
  x - 61 * s,
  y + 16 * s
);
vertex(x - 50 * s, y - 2 * s);
vertex(x - 56 * s, y - 15 * s);
bezierVertex(
  x - 77 * s,
  y - 11 * s,
  x - 96 * s,
  y - 8 * s,
  x - 110 * s,
  y - 14 * s
);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(x - 102 * s, y - 12 * s);
bezierVertex(
  x - 102 * s,
  y - 16 * s,
  x - 98 * s,
  y - 13 * s,
  x - 95 * s,
  y - 11 * s
);
bezierVertex(
  x - 93 * s,
  y - 15 * s,
  x - 86 * s,
  y - 15 * s,
  x - 84 * s,
  y - 12 * s
);
bezierVertex(
  x - 78 * s,
  y - 5 * s,
  x - 79 * s,
  y + 4 * s,
  x - 84 * s,
  y + 10 * s
);
bezierVertex(
  x - 91 * s,
  y + 11 * s,
  x - 98 * s,
  y + 10 * s,
  x - 107 * s,
  y + 9 * s
);
bezierVertex(
  x - 106 * s,
  y + 3 * s,
  x - 107 * s,
  y - 7 * s,
  x - 102 * s,
  y - 12 * s
);
endShape();
pop();

line(x - 116 * s, y - 7 * s, x - 115 * s, y - 4 * s);
line(x - 115 * s, y - 4 * s, x - 116 * s, y + 3 * s);
line(x - 116 * s, y + 3 * s, x - 118 * s, y + 5 * s);

line(x - 88 * s, y - 8 * s, x - 86 * s, y - 2 * s);
line(x - 86 * s, y - 2 * s, x - 86 * s, y + 4 * s);

line(x - 61 * s, y + 5 * s, x - 61 * s, y - 3 * s);
line(x - 61 * s, y - 3 * s, x - 58 * s, y - 9 * s);

//Left Leg
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x - 36 * s, y + 83 * s);
vertex(x - 41 * s, y + 94 * s);
vertex(x - 40 * s, y + 98 * s);
vertex(x - 44 * s, y + 98 * s);
vertex(x - 44 * s, y + 120 * s);
bezierVertex(
  x - 53 * s,
  y + 128 * s,
  x - 70 * s,
  y + 123 * s,
  x - 73 * s,
  y + 120 * s
);
bezierVertex(
  x - 75 * s,
  y + 117 * s,
  x - 72 * s,
  y + 110 * s,
  x - 65 * s,
  y + 109 * s
);
vertex(x - 65 * s, y + 100 * s);
bezierVertex(
  x - 72 * s,
  y + 90 * s,
  x - 70 * s,
  y + 90 * s,
  x - 66 * s,
  y + 83 * s
);
bezierVertex(
  x - 62 * s,
  y + 78 * s,
  x - 61 * s,
  y + 74 * s,
  x - 57 * s,
  y + 72 * s
);
endShape();
pop();

push();
fill(53, 62, 59, 255);
beginShape();
vertex(x - 65 * s, y + 107 * s);
vertex(x - 55 * s, y + 111 * s);
vertex(x - 58 * s, y + 116 * s);
vertex(x - 70 * s, y + 112 * s);
vertex(x - 65 * s, y + 107 * s);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(x - 44 * s, y + 98 * s);
bezierVertex(
  x - 51 * s,
  y + 97 * s,
  x - 59 * s,
  y + 97 * s,
  x - 68 * s,
  y + 95 * s
);
bezierVertex(
  x - 70 * s,
  y + 99 * s,
  x - 69 * s,
  y + 102 * s,
  x - 66 * s,
  y + 104 * s
);
bezierVertex(
  x - 69 * s,
  y + 106 * s,
  x - 68 * s,
  y + 108 * s,
  x - 64 * s,
  y + 109 * s
);
vertex(x - 45 * s, y + 109 * s);
bezierVertex(
  x - 42 * s,
  y + 105 * s,
  x - 43 * s,
  y + 101 * s,
  x - 44 * s,
  y + 98 * s
);
endShape();
pop();

line(x - 66 * s, y + 104 * s, x - 60 * s, y + 104 * s);
line(x - 67 * s, y + 89 * s, x - 60 * s, y + 91 * s);

//Astronaut Body
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x - 60 * s, y - 22 * s);
bezierVertex(
  x - 14 * s,
  y - 10 * s,
  x + 21 * s,
  y - 9 * s,
  x + 53 * s,
  y - 18 * s
);
bezierVertex(
  x + 43 * s,
  y + 15 * s,
  x + 37 * s,
  y + 30 * s,
  x + 40 * s,
  y + 70 * s
);
bezierVertex(
  x + 5 * s,
  y + 100 * s,
  x - 40 * s,
  y + 90 * s,
  x - 63 * s,
  y + 70 * s
);
bezierVertex(x - 80 * s, y + 30 * s, x - 55 * s, y, x - 56 * s, y - 5 * s);
vertex(x - 57 * s, y - 10 * s);
vertex(x - 60 * s, y - 23 * s);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(x - 56 * s, y - 5 * s);
bezierVertex(x - 22 * s, y + 7 * s, x + 16 * s, y + 9 * s, x + 47 * s, y);
vertex(x + 50 * s, y - 8 * s);
bezierVertex(x + 18 * s, y, x - 22 * s, y - 1 * s, x - 57 * s, y - 14 * s);
bezierVertex(
  x - 59 * s,
  y - 11 * s,
  x - 58 * s,
  y - 8 * s,
  x - 56 * s,
  y - 5 * s
);
endShape();
pop();

//Zipper
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x - 38 * s, y + 85 * s);
bezierVertex(
  x - 39 * s,
  y + 49 * s,
  x - 34 * s,
  y + 30 * s,
  x - 30 * s,
  y + 13 * s
);
endShape();
pop();

push();
strokeWeight(1.3);
fill(110, 104, 103, 255);
beginShape();
vertex(x - 30 * s, y + 13 * s);
vertex(x - 27 * s, y + 24 * s);
vertex(x - 38 * s, y + 21 * s);
vertex(x - 30 * s, y + 13 * s);
endShape();
pop();

line(x - 36 * s, y + 11 * s, x - 24 * s, y + 14 * s);
line(x - 39 * s, y + 31 * s, x - 28 * s, y + 34 * s);
line(x - 41 * s, y + 41 * s, x - 30 * s, y + 44 * s);
line(x - 42 * s, y + 51 * s, x - 31 * s, y + 54 * s);
line(x - 44 * s, y + 60 * s, x - 31 * s, y + 63 * s);
line(x - 44 * s, y + 71 * s, x - 31 * s, y + 74 * s);

//Rigth Arm
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x + 38 * s, y + 31 * s);
vertex(x + 29 * s, y + 28 * s);
bezierVertex(
  x + 27 * s,
  y + 15 * s,
  x + 31 * s,
  y + 6 * s,
  x + 34 * s,
  y + 3 * s
);
vertex(x + 40 * s, y + 2 * s);
endShape();
pop();

push();
fill(233, 226, 210, 255);
beginShape();
vertex(x + 76 * s, y + 18 * s);
bezierVertex(
  x + 75 * s,
  y + 14 * s,
  x + 81 * s,
  y + 4 * s,
  x + 87 * s,
  y + 6 * s
);
bezierVertex(
  x + 103 * s,
  y + 10 * s,
  x + 97 * s,
  y + 37 * s,
  x + 77 * s,
  y + 35 * s
);
bezierVertex(
  x + 65 * s,
  y + 31 * s,
  x + 59 * s,
  y + 30 * s,
  x + 53 * s,
  y + 30 * s
);
bezierVertex(
  x + 43 * s,
  y + 32 * s,
  x + 38 * s,
  y + 31 * s,
  x + 34 * s,
  y + 29 * s
);
bezierVertex(
  x + 34 * s,
  y + 17 * s,
  x + 36 * s,
  y + 4 * s,
  x + 43 * s,
  y + 2 * s
);
bezierVertex(
  x + 62 * s,
  y + 9 * s,
  x + 70 * s,
  y + 10 * s,
  x + 78 * s,
  y + 9 * s
);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(x + 54 * s, y + 30 * s);
bezierVertex(
  x + 53 * s,
  y + 22 * s,
  x + 53 * s,
  y + 15 * s,
  x + 58 * s,
  y + 7 * s
);
bezierVertex(
  x + 61 * s,
  y + 4 * s,
  x + 59 * s,
  y + 6 * s,
  x + 72 * s,
  y + 9 * s
);
bezierVertex(
  x + 67 * s,
  y + 17 * s,
  x + 65 * s,
  y + 23 * s,
  x + 67 * s,
  y + 32 * s
);
bezierVertex(
  x + 61 * s,
  y + 31 * s,
  x + 59 * s,
  y + 30 * s,
  x + 54 * s,
  y + 30 * s
);
endShape();
pop();

line(x + 61 * s, y + 10 * s, x + 59 * s, y + 16 * s);

line(x + 85 * s, y + 12 * s, x + 83 * s, y + 17 * s);
line(x + 83 * s, y + 17 * s, x + 83 * s, y + 25 * s);

//Rigth Leg
push();
fill(233, 226, 210, 255);
beginShape();
vertex(x + 22 * s, y + 82 * s);
vertex(x + 18 * s, y + 108 * s);
vertex(x + 17 * s, y + 127 * s);
bezierVertex(
  x + 11 * s,
  y + 132 * s,
  x - 7 * s,
  y + 131 * s,
  x - 14 * s,
  y + 127 * s
);
bezierVertex(
  x - 14 * s,
  y + 123 * s,
  x - 9 * s,
  y + 119 * s,
  x - 6 * s,
  y + 118 * s
);
vertex(x - 6 * s, y + 110 * s);
vertex(x - 10 * s, y + 97 * s);
vertex(x - 8 * s, y + 85 * s);
vertex(x + 22 * s, y + 82 * s);
endShape();
pop();

push();
fill(233, 226, 210, 255);
beginShape();
vertex(x + 21 * s, y + 85 * s);
bezierVertex(
  x + 11 * s,
  y + 83 * s,
  x + 8 * s,
  y + 81 * s,
  x - 10 * s,
  y + 89 * s
);
bezierVertex(
  x - 10 * s,
  y + 86 * s,
  x - 9 * s,
  y + 84 * s,
  x - 7 * s,
  y + 83 * s
);
bezierVertex(
  x + 8 * s,
  y + 77 * s,
  x + 14 * s,
  y + 79 * s,
  x + 22 * s,
  y + 81 * s
);
bezierVertex(
  x + 24 * s,
  y + 83 * s,
  x + 24 * s,
  y + 87 * s,
  x + 21 * s,
  y + 85 * s
);
endShape();
pop();

push();
fill(133, 86, 53, 255);
beginShape();
vertex(x - 9 * s, y + 100 * s);
vertex(x - 8 * s, y + 111 * s);
bezierVertex(
  x - 2 * s,
  y + 113 * s,
  x + 11 * s,
  y + 113 * s,
  x + 18 * s,
  y + 110 * s
);
vertex(x + 20 * s, y + 99 * s);
bezierVertex(
  x + 11 * s,
  y + 99 * s,
  x - 1 * s,
  y + 102 * s,
  x - 9 * s,
  y + 100 * s
);
endShape();
pop();

push();
fill(53, 62, 59, 255);
beginShape();
vertex(x - 6 * s, y + 117 * s);
vertex(x + 3 * s, y + 119 * s);
vertex(x, y + 123 * s);
vertex(x - 11 * s, y + 120 * s);
vertex(x - 6 * s, y + 117 * s);
endShape();
pop();

line(x - 7 * s, y + 97 * s, x - 2 * s, y + 97 * s);
line(x - 8 * s, y + 103 * s, x - 3 * s, y + 104 * s);
