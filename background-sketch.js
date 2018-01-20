let agents, stepSize, numAgents, agentSize, noiseScale

function setup() {
  createCanvas(1280,720)

  numAgents = 800
  frameRate(30)
  agents = []

  agentSize = 10

  noiseScale = .0225

  for(let i = 0; i < numAgents; i += 1) {
    agents[i] = {
      x: random(width),
      y: random(height),
      colorR: random(255),
      colorG: random(255),
      colorB: random(255)
    }
  }

  stepSize = 1
  noStroke()
  background(255)
}

function draw() {
  background(0, 5)

  update()


  for(let i = 0; i < numAgents; i += 1) {
    ellipse(agents[i].x, agents[i].y, agentSize, agentSize)
    fill(random(200), random(255), random(20))
  }
}
function update() {
  for(let i = 0; i < numAgents; i += 1) {
    let angle = noise(agents[i].x * noiseScale, agents[i].y * noiseScale) * TWO_PI

    agents[i].x += sin(angle) * stepSize
    agents[i].y += cos(angle) * stepSize

    if((agents[i].x > width) || (agents[i].x < 0) || (agents[i].y <0) || (agents[i].y > height)){
      agents[i].x = random(width)
      agents[i].y = random(height)
    }
  }
}
