let x = 100;
let y = 200;
let s = 0.8;

background(200, 200, 200);

//Backleg
push();
fill("#f2eeec");
beginShape();
vertex(x + 135 * s, y + 28 * s);
vertex(x + 162 * s, y + 54 * s);
bezierVertex(
  x + 156 * s,
  y + 74 * s,
  x + 144 * s,
  y + 81 * s,
  x + 134 * s,
  y + 84 * s
);
vertex(x + 104 * s, y + 60 * s);
endShape();
pop();

push();
fill("#8b553f");
beginShape();
vertex(x + 159 * s, y + 51 * s);
vertex(x + 167 * s, y + 59 * s);
bezierVertex(
  x + 165 * s,
  y + 72 * s,
  x + 153 * s,
  y + 84 * s,
  x + 141 * s,
  y + 90 * s
);
vertex(x + 132 * s, y + 82 * s);
bezierVertex(
  x + 144 * s,
  y + 76 * s,
  x + 154 * s,
  y + 66 * s,
  x + 159 * s,
  y + 51 * s
);
endShape();
pop();

//Frontleg Right
push();
fill("#f2eeec");
beginShape();
vertex(x + 116 * s, y + 69 * s);
vertex(x + 116 * s, y + 82 * s);
vertex(x + 119 * s, y + 82 * s);
vertex(x + 119 * s, y + 97 * s);
bezierVertex(
  x + 125 * s,
  y + 100 * s,
  x + 125 * s,
  y + 103 * s,
  x + 123 * s,
  y + 107 * s
);
vertex(x + 118 * s, y + 112 * s);
bezierVertex(
  x + 105 * s,
  y + 115 * s,
  x + 95 * s,
  y + 113 * s,
  x + 84 * s,
  y + 112 * s
);
vertex(x + 80 * s, y + 106 * s);
vertex(x + 79 * s, y + 75 * s);
endShape();
pop();

push();
fill("#8b553f");
beginShape();
vertex(x + 119 * s, y + 86 * s);
vertex(x + 122 * s, y + 95 * s);
bezierVertex(
  x + 115 * s,
  y + 103 * s,
  x + 95 * s,
  y + 105 * s,
  x + 80 * s,
  y + 105 * s
);
vertex(x + 77 * s, y + 96 * s);
bezierVertex(
  x + 92 * s,
  y + 94 * s,
  x + 105 * s,
  y + 95 * s,
  x + 119 * s,
  y + 86 * s
);
endShape();
pop();

line(x + 111 * s, y + 101 * s, x + 116 * s, y + 104 * s);
line(x + 119 * s, y + 82 * s, x + 112 * s, y + 85 * s);

//Frontleg Left
push();
fill("#f2eeec");
beginShape();
vertex(x + 15 * s, y + 87 * s);
vertex(x - 2 * s, y + 102 * s);
bezierVertex(
  x - 17 * s,
  y + 96 * s,
  x - 28 * s,
  y + 84 * s,
  x - 30 * s,
  y + 77 * s
);
bezierVertex(
  x - 34 * s,
  y + 67 * s,
  x - 25 * s,
  y + 67 * s,
  x - 18 * s,
  y + 72 * s
);
vertex(x - 13 * s, y + 60 * s);
endShape();
pop();

push();
fill("#8b553f");
beginShape();
vertex(x - 18 * s, y + 72 * s);
bezierVertex(
  x - 16 * s,
  y + 84 * s,
  x - 7 * s,
  y + 94 * s,
  x + 5 * s,
  y + 97 * s
);
vertex(x + 14 * s, y + 89 * s);
vertex(x - 16 * s, y + 61 * s);
vertex(x - 18 * s, y + 72 * s);
endShape();
pop();

line(x - 17 * s, y + 78 * s, x - 22 * s, y + 74 * s);

//Tail
push();
fill(0, 0, 0);
beginShape();
vertex(x + 140 * s, y - 35 * s);
bezierVertex(
  x + 143 * s,
  y - 55 * s,
  x + 160 * s,
  y - 31 * s,
  x + 175 * s,
  y - 72 * s
);
vertex(x + 179 * s, y - 86 * s);
vertex(x + 180 * s, y - 78 * s);
vertex(x + 183 * s, y - 90 * s);
vertex(x + 184 * s, y - 80 * s);
vertex(x + 190 * s, y - 84 * s);
vertex(x + 181 * s, y - 73 * s);
bezierVertex(
  x + 180 * s,
  y - 70 * s,
  x + 178 * s,
  y - 68 * s,
  x + 175 * s,
  y - 68 * s
);
bezierVertex(
  x + 164 * s,
  y - 63 * s,
  x + 158 * s,
  y - 56 * s,
  x + 148 * s,
  y - 32 * s
);
endShape();
pop();

//Autronaut Body
push();
fill("#f2eeec");
ellipse(x + 70 * s, y + 10 * s, 190 * s, 170 * s);
pop();
line(x + 104 * s, y + 69 * s, x + 140 * s, y + 45 * s);
line(x + 140 * s, y + 45 * s, x + 148 * s, y + 17 * s);
line(x + 148 * s, y + 17 * s, x + 149 * s, y - 6 * s);
line(x + 149 * s, y - 6 * s, x + 136 * s, y - 31 * s);
line(x + 136 * s, y - 31 * s, x + 64 * s, y - 63 * s);
line(x + 64 * s, y - 63 * s, x + 24 * s, y - 58 * s);

//Ear right
push();
fill("#252b56");
beginShape();
vertex(x + 111 * s, y - 12 * s);
bezierVertex(
  x - 2 * s,
  y - 23 * s,
  x + 86 * s,
  y - 33 * s,
  x + 75 * s,
  y - 50 * s
);
bezierVertex(
  x + 74 * s,
  y - 82 * s,
  x + 90 * s,
  y - 93 * s,
  x + 108 * s,
  y - 94 * s
);
bezierVertex(
  x + 140 * s,
  y - 89 * s,
  x + 159 * s,
  y - 62 * s,
  x + 154 * s,
  y - 44 * s
);
bezierVertex(
  x + 147 * s,
  y - 23 * s,
  x + 135 * s,
  y - 14 * s,
  x + 111 * s,
  y - 12 * s
);
endShape();
pop();

line(x + 92 * s, y - 49 * s, x + 94 * s, y - 65 * s);
line(x + 94 * s, y - 65 * s, x + 101 * s, y - 75 * s);
line(x + 101 * s, y - 75 * s, x + 116 * s, y - 74 * s);

//Ear left
push();
fill("#252b56");
beginShape();
vertex(x + 22 * s, y - 48 * s);
bezierVertex(
  x + 23 * s,
  y - 53 * s,
  x + 26 * s,
  y - 58 * s,
  x + 26 * s,
  y - 69 * s
);
bezierVertex(
  x + 16 * s,
  y - 87 * s,
  x - 4 * s,
  y - 87 * s,
  x - 17 * s,
  y - 87 * s
);
bezierVertex(
  x - 46 * s,
  y - 78 * s,
  x - 50 * s,
  y - 71 * s,
  x - 52 * s,
  y - 54 * s
);
bezierVertex(
  x - 52 * s,
  y - 30 * s,
  x - 38 * s,
  y - 16 * s,
  x - 21 * s,
  y - 15 * s
);
vertex(x + 22 * s, y - 48 * s);
endShape();
pop();

line(x + 9 * s, y - 54 * s, x + 8 * s, y - 70 * s);
line(x + 8 * s, y - 70 * s, x - 10 * s, y - 74 * s);
line(x - 10 * s, y - 74 * s, x - 23 * s, y - 67 * s);

//Inside Helmet
push();
fill("#b1988b");
ellipse(x + 45 * s, y + 26 * s, 152 * s, 144 * s);

beginShape();
vertex(x - 22 * s, y - 9 * s);
bezierVertex(
  x - 20 * s,
  y + 110 * s,
  x + 97 * s,
  y + 81 * s,
  x + 108 * s,
  y + 25 * s
);
endShape();
pop();

//Head
push();
fill("#252b56");
beginShape();
vertex(x + 24 * s, y - 39 * s);
bezierVertex(
  x - 3 * s,
  y - 12 * s,
  x - 8 * s,
  y + 20 * s,
  x + 8 * s,
  y + 49 * s
);
bezierVertex(
  x + 3 * s,
  y + 84 * s,
  x + 9 * s,
  y + 96 * s,
  x + 24 * s,
  y + 99 * s
);
bezierVertex(
  x + 50 * s,
  y + 102 * s,
  x + 64 * s,
  y + 92 * s,
  x + 77 * s,
  y + 48 * s
);
bezierVertex(
  x + 90 * s,
  y + 36 * s,
  x + 97 * s,
  y + 18 * s,
  x + 92 * s,
  y - 16 * s
);
vertex(x + 61 * s, y - 35 * s);
vertex(x + 31 * s, y - 42 * s);
endShape();
pop();

line(x + 8 * s, y + 49 * s, x + 12 * s, y + 54 * s);

//Eye left
push();
beginShape();
vertex(x + 22 * s, y - 17 * s);
bezierVertex(
  x + 10 * s,
  y - 10 * s,
  x + 9 * s,
  y + 8 * s,
  x + 15 * s,
  y + 12 * s
);
bezierVertex(
  x + 29 * s,
  y + 17 * s,
  x + 39 * s,
  y - 23 * s,
  x + 22 * s,
  y - 17 * s
);
endShape();
pop();

push();
fill(0, 0, 0);
beginShape();
vertex(x + 23 * s, y + 10 * s);
bezierVertex(
  x + 13 * s,
  y + 5 * s,
  x + 19 * s,
  y - 10 * s,
  x + 30 * s,
  y - 2 * s
);
bezierVertex(
  x + 29 * s,
  y + 4 * s,
  x + 26 * s,
  y + 7 * s,
  x + 23 * s,
  y + 10 * s
);
endShape();
pop();

//Eye right
beginShape();
vertex(x + 59 * s, y - 12 * s);
bezierVertex(
  x + 45 * s,
  y - 10 * s,
  x + 37 * s,
  y + 12 * s,
  x + 55 * s,
  y + 20 * s
);
bezierVertex(
  x + 75 * s,
  y + 21 * s,
  x + 76 * s,
  y - 12 * s,
  x + 59 * s,
  y - 12 * s
);
endShape();

push();
fill(0, 0, 0);
beginShape();
vertex(x + 59 * s, y + 19 * s);
bezierVertex(
  x + 42 * s,
  y + 8 * s,
  x + 65 * s,
  y - 9 * s,
  x + 69 * s,
  y + 10 * s
);
bezierVertex(
  x + 68 * s,
  y + 17 * s,
  x + 63 * s,
  y + 19 * s,
  x + 59 * s,
  y + 19 * s
);
endShape();
pop();

//Glas of Helmet
push();
noFill();
ellipse(x + 33 * s, y + 36 * s, 150 * s);
pop();

push();
fill("#7090a9");
beginShape();
vertex(x - 25 * s, y + 55 * s);
bezierVertex(
  x - 13 * s,
  y + 66 * s,
  x - 5 * s,
  y + 76 * s,
  x + 8 * s,
  y + 86 * s
);
bezierVertex(
  x + 2 * s,
  y + 96 * s,
  x - 30 * s,
  y + 63 * s,
  x - 25 * s,
  y + 55 * s
);
endShape();
pop();

//Attachment of Helmet
push();
fill("#f2eeec");
beginShape();
vertex(x + 82 * s, y + 92 * s);
bezierVertex(
  x + 105 * s,
  y + 70 * s,
  x + 119 * s,
  y + 56 * s,
  x + 127 * s,
  y + 35 * s
);
bezierVertex(
  x + 127 * s,
  y + 4 * s,
  x + 115 * s,
  y - 26 * s,
  x + 90 * s,
  y - 41 * s
);
bezierVertex(
  x + 77 * s,
  y - 46 * s,
  x + 65 * s,
  y - 50 * s,
  x + 58 * s,
  y - 53 * s
);
bezierVertex(
  x + 41 * s,
  y - 57 * s,
  x + 34 * s,
  y - 57 * s,
  x + 23 * s,
  y - 55 * s
);
bezierVertex(
  x + 11 * s,
  y - 51 * s,
  x + 5 * s,
  y - 48 * s,
  x - 4 * s,
  y - 42 * s
);
bezierVertex(
  x - 17 * s,
  y - 37 * s,
  x - 22 * s,
  y - 30 * s,
  x - 32 * s,
  y - 1 * s
);
bezierVertex(
  x - 19 * s,
  y - 21 * s,
  x - 1 * s,
  y - 33 * s,
  x + 10 * s,
  y - 35 * s
);
bezierVertex(
  x + 41 * s,
  y - 40 * s,
  x + 65 * s,
  y - 30 * s,
  x + 89 * s,
  y - 12 * s
);
bezierVertex(
  x + 108 * s,
  y + 12 * s,
  x + 110 * s,
  y + 33 * s,
  x + 100 * s,
  y + 56 * s
);
bezierVertex(
  x + 97 * s,
  y + 65 * s,
  x + 92 * s,
  y + 72 * s,
  x + 82 * s,
  y + 92 * s
);
endShape();
pop();
