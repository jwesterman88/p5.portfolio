let threeDpanner;
let noiz;
let listener;
let fft;
let innerR;
let outerR;
let stars = [];

function setup() {
  createCanvas(innerWidth, innerHeight, WEBGL);
  innerR = 20;
  outerR = 10;
  noiz = new p5.Noise('pink');
  angleMode(DEGREES);
  noCursor();
  noiz.amp(0.1);
  noiz.disconnect();
  noiz.start();

  threeDpanner = new p5.Panner3D;
  threeDpanner.process(noiz);

  listener = p5.soundOut.audiocontext.listener;
  // print(listener);
  // print(threeDpanner);

  fft = new p5.FFT(0.9, 32);
  fft.setInput(noiz);

  envelope = new p5.Env();
  envelope.setRange(1, 0);
  envelope.setADSR(0.001, 2.5, 1, 2);
  envelope.play(noiz, 0, 0.1);

}

function draw() {
  background(0);
  let spectrum = fft.analyze();
  //stroke(255);
//  strokeWeight(10);
  push();
  translate(mouseX-width/2, mouseY-height/2, 0);
  for (var i = 0; i < spectrum.length; i++) {
    push();
    //pointLight(map(spectrum[i], 0, 150, 0, 255), innerR, outerR);
    //ambientLight(map(spectrum[i], 0, 150, 0, 255), innerR, outerR);
    rotateX(i*width/spectrum.length+outerR);
    rotateY(i*height/spectrum.length+mouseY*.00001);
    rotateZ(mouseX*0.01+innerR);
    translate(spectrum[i]/1.7, spectrum[i]/1.5, spectrum[i]/1.8 );
    plane(i*noise(atan2(i)));
    pop();
  //  stroke(255)
    fill(spectrum[i]/random(1),spectrum[i]/random(1),spectrum[i]/random(1))
  }
  pop();

  let correctedMouseX = 2*(mouseX-width/2)*360/width;
  let correctedMouseY = -1*(mouseY-height/2)*360/width;
  threeDpanner.set(correctedMouseX, correctedMouseY, 100, 0.05);

}

function mousePressed() {
  envelope.play(noiz, 0, 0.1);
  innerR = random(255);
  outerR = random(255);
}
