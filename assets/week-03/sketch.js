let weather = [
  { cloud: 11, wind: 3.1, code: 1 },
  { cloud: 18, wind: 5.9, code: 1 },
  { cloud: 25, wind: 6.4, code: 1 },
  { cloud: 15, wind: 6.4, code: 1 },
  { cloud: 35, wind: 7.9, code: 1 },
  { cloud: 55, wind: 7.0, code: 1 },
  { cloud: 100, wind: 4.3, code: 3 },
  { cloud: 100, wind: 5.0, code: 3 },
  { cloud: 10, wind: 4.0, code: 1 },
  { cloud: 29, wind: 3.2, code: 2 },
  { cloud: 49, wind: 3.4, code: 2 },
  { cloud: 84, wind: 4.8, code: 3 },
  { cloud: 100, wind: 4.3, code: 3 },
  { cloud: 65, wind: 5.2, code: 2 },
  { cloud: 94, wind: 4.7, code: 3 },
  { cloud: 93, wind: 7.1, code: 61 },
  { cloud: 69, wind: 7.2, code: 2 },
  { cloud: 90, wind: 9.1, code: 3 },
  { cloud: 81, wind: 8.8, code: 2 },
  { cloud: 41, wind: 5.8, code: 2 }
];

let index = 0;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(245, 240, 242);

  let d = weather[index];

  let symmetry = int(map(d.cloud, 0, 100, 6, 18));
  let petalLength = map(d.wind, 0, 12, 80, 220);
  let petalWidth = map(d.code, 0, 61, 12, 55);

  let r = map(d.cloud, 0, 100, 255, 180);
  let g = map(d.wind, 0, 12, 210, 120);
  let b = map(d.code, 0, 61, 230, 170);

  translate(width / 2, height / 2);

  noFill();
  stroke(r, g, b, 160);
  strokeWeight(2);

  for (let i = 0; i < symmetry; i++) {
    rotate(360 / symmetry);
    ellipse(petalLength / 2, 0, petalLength, petalWidth);
    line(0, 0, petalLength, 0);
  }

  resetMatrix();

  fill(60);
  noStroke();
  textSize(22);
  text("Weather Data Visualisation", width / 2, 35);

  textSize(16);
  text("Cloud cover: " + d.cloud + "%", width / 2, height - 75);
  text("Wind speed: " + d.wind + " km/h", width / 2, height - 50);
  text("Weather code: " + d.code, width / 2, height - 25);

  textSize(14);
  text("Click to move through data points", width / 2, 65);
}

function mousePressed() {
  index = (index + 1) % weather.length;
}