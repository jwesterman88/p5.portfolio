// Where is the circle
var x, y;

function setup() {
  createCanvas(1280, 720);
  // Starts in the middle
  x = width / 2;
  y = height;
  colorMode (HSB, 100)
}

function draw() {
  background(0, 0, 0);
  //HSB (position on wheel or hue, saturation, brightness)

  for(let i = 0; i < 1500; i += 1) {
  noStroke()//i maybe = number of objects
  //fill(map(i, 0, 10, 0, 255), map(i, 0, 10, 0, 100), map(mouseX, 0, width, 0, 255));
  let angle = noise(i*frameCount,i*frameCount) * TWO_PI

  fill(angle, map(i, 0, 100, 0, 100), map(i, 0, 10, 0, 100))
  ellipse(cos(frameCount*100+i)*100+200, tan(frameCount*9+i)*50+150, sin(angle)*10, cos(angle)*100);
    //first horizontal
  fill(map(mouseY, 0, height, 0, 50), map(i, 0, 100, 0, 100), map(i, 0, 10, 0, 100))
  ellipse(cos(frameCount*99.99+i)*100+200, cos(frameCount*12.1+i)*24+500, sin(angle)*10, cos(angle)*100);
    //second horizontal
  fill(angle, map(i, 0, 100, 0, 50), map(i, 0, 10, 0, 100))
  ellipse(cos(frameCount*100+i)*100+600, cos(frameCount*12+i)*24+150, sin(angle)*10, cos(angle)*100);
      //first horizontal
  fill(map(mouseY, 0, height, 0, 100), map(i, 0, 100, 0, 100), map(i, 0, 10, 0, 100))
  ellipse(cos(frameCount*99.99+i)*100+600, tan(frameCount*9+i)*50+500, radians(angle)*10, cos(angle)*100);

  fill(angle, map(i, 0, 100, 0, 100), map(i, 0, 10, 0, 100))
  ellipse(cos(frameCount*100+i)*100+1000, tan(frameCount*9+i)*50+150, sin(angle)*10, cos(angle)*100);
      //first horizontal
  fill(map(mouseY, 0, height, 0, 50), map(i, 0, 100, 0, 100), map(i, 0, 10, 0, 100))
  ellipse(cos(frameCount*99.99+i)*100+1000, cos(frameCount*11.9+i)*24+500, sin(angle)*10, cos(angle)*100);
}

//HSB colors
  // Jiggling randomly on the horizontal axis
//  // Moving up at a constant speed
//  y = y - 1;

  // Reset to the bottom
//  if (y < 0) {
//    y = height;
//  }
}
