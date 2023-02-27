function setup() {
  window.createCanvas(800, 600);
  background("#000014");
}
function fireJetpack(x, y, s) {
  push();
  fill("#801100");
  beginShape();
  vertex(x + 35 * s, y + 58 * s);
  bezierVertex(
    x + 3 * s,
    y + 82 * s,
    x + 21 * s,
    y + 112 * s,
    x + 38 * s,
    y + 137 * s
  );
  bezierVertex(
    x + 58 * s,
    y + 112 * s,
    x + 69 * s,
    y + 76 * s,
    x + 53 * s,
    y + 54 * s
  );
  endShape();
  pop();

  push();
  fill("#FAC000");
  beginShape();
  vertex(x + 34 * s, y + 64 * s);
  bezierVertex(
    x + 19 * s,
    y + 85 * s,
    x + 26 * s,
    y + 102 * s,
    x + 39 * s,
    y + 118 * s
  );
  bezierVertex(
    x + 49 * s,
    y + 97 * s,
    x + 53 * s,
    y + 75 * s,
    x + 46 * s,
    y + 58 * s
  );
  endShape();
  pop();
}
function maus(x, y, s) {
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
}
function elefant(x, y, s) {
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
  fill(255, 255, 255);
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
  push();
  fill(255, 255, 255);
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
  pop();

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
  fill(255, 255, 255, 10);
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
}

function startScreen() {
  //moon
  noStroke();
  fill(229, 229, 229);
  ellipse(100, 500, 358);

  fill(201, 201, 201);
  ellipse(80, 380, 45);
  ellipse(160, 430, 60);
  ellipse(20, 480, 70);
  ellipse(130, 540, 80);

  beginShape();
  vertex(268, 440);
  bezierVertex(247, 454, 247, 507, 278, 505);
  bezierVertex(281, 478, 273, 457, 268, 440);
  endShape();

  //steamy things
  noStroke();
  fill(147, 33, 145, 160);
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

  fill(225, 115, 39, 190);
  push();
  beginShape();
  vertex(0, 40);
  bezierVertex(10, 40, 30, 20, 28, 0);
  vertex(255, 0);
  bezierVertex(240, 30, 220, 40, 195, 30);
  bezierVertex(168, 18, 148, 25, 140, 40);
  bezierVertex(120, 65, 95, 60, 70, 50);
  bezierVertex(40, 45, 25, 50, 0, 90);
  endShape();
  pop();

  fill(147, 33, 145, 160);
  push();
  beginShape();
  vertex(800, 600);
  vertex(800, 530);
  bezierVertex(790, 540, 770, 530, 750, 550);
  bezierVertex(730, 570, 680, 550, 670, 550);
  bezierVertex(630, 540, 570, 560, 520, 600);
  endShape();
  pop();

  fill(225, 115, 39, 190);
  push();
  beginShape();
  vertex(580, 600);
  bezierVertex(587, 580, 610, 570, 650, 578);
  bezierVertex(676, 582, 700, 585, 721, 574);
  bezierVertex(728, 570, 752, 565, 765, 580);
  bezierVertex(770, 580, 792, 580, 800, 560);
  vertex(800, 600);
  endShape();
  pop();

  //headline
  textSize(60);
  fill(229, 229, 229);
  text("Maus Mission", 400, 300);

  textSize(20);
  textStyle(ITALIC);
  text("Hit space to start the the game!", 400, 350);

  //creator name
  textSize(15);
  text("Made by Schmokes", 340, 570);
}

function gameScreen() {
  //scenery
  stroke(0.5);
  background("#000014");
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

  if (keyIsDown(32)) {
    fireJetpack(410, mausY, 0.5);
  }
  maus(410, mausY, 0.5);
  elefant(elefantX, 300, 0.4);
}

function winScreen() {
  //mission accomplished
  fill(299, 299, 299);
  textSize(60);
  text("Mission Accomplished!", 100, 120);
  textSize(20);
  textStyle(ITALIC);
  text("To restart the Mission press R", 235, 200);
  maus(380, 400, 1.1);
}

function loseScreen() {
  //mission failed
  fill(299, 299, 299);
  textSize(60);
  text("Mission Failed!", 170, 120);
  textSize(20);
  textStyle(ITALIC);
  text("To restart the Mission press R", 235, 200);
  elefant(300, 360, 1.1);
}

let state = "start";
//elefant movement
let elefantX = 50;
let elefantDirection = "forward";
//maus movement
let mausY = 100;
let velocity = 1;
let acceleration = 0.1;
//game status
let isGameActive = true;

//changing the screens
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "win") {
    winScreen();
  } else if (state === "lose") {
    loseScreen();
  }

  //maus and elefant movement
  if (isGameActive) {
    if (elefantDirection === "forward") {
      if (elefantX < 730) {
        elefantX = elefantX + 3;
      } else {
        elefantDirection = "backwards";
      }
    } else if (elefantDirection === "backwards") {
      if (elefantX > 50) {
        elefantX = elefantX - 3;
      } else {
        elefantDirection = "forward";
      }
    }
    mausY = mausY + velocity;
    velocity = velocity + acceleration;
  }
  //jetpack power
  if (keyIsDown(32)) {
    velocity = velocity - 0.2;
  }
  if (mausY > 460) {
    isGameActive = false;
  }

  //changing of screens with space
  if (keyIsDown(32) && state === "start") {
    state = "game";
  } else if (keyIsDown(82) && (state === "lose" || state === "win")) {
    state = "game";
  }
}
