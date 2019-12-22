/* eslint-disable no-undef */
import { createSnowstorm } from './snowstorm'

function mountains (canvas, mountainTop, mountainHeight) {
  var bumpiness = 0.005
  canvas.beginShape(); canvas.vertex(0, windowHeight)
  for (var x = 0; x < windowWidth; x++) {
    canvas.vertex(x, noise(mountainTop + x * bumpiness) * mountainHeight + mountainTop)
  }
  canvas.vertex(windowWidth, windowHeight); canvas.endShape()
}

function colourRange (point) {
  return lerpColor(color('#e5e5ff'), color('#ffffff'), point)
}

let scene
let paintedWindow
let snowstorm;

export function setup (w, h) {
  scene = createGraphics(w, h);
  const skyColor = color('#adeeff')
  const density = 4000;
  const numFlakes = round(scene.width*scene.height/density);
  snowstorm = createSnowstorm(numFlakes, scene.width, scene.height+20);
  scene.background(skyColor)
  scene.noStroke()
  scene.colorMode(HSB)

  scene.fill(colourRange(0)); mountains(scene, scene.height * 0.1, 100)
  scene.fill(colourRange(0.33)); mountains(scene, scene.height * 0.3, 100)
  scene.fill(colourRange(1)); mountains(scene, scene.height / 2, 25)

  paintedWindow = createGraphics(scene.width, scene.height);
}

export function draw (x, y) {
  paintedWindow.image(scene, 0, 0)
  snowstorm.forEach(flake => {
    flake.animate();
    flake.draw(paintedWindow);
  })
  paintedWindow.strokeWeight(10)
  paintedWindow.stroke('black')
  paintedWindow.noFill();
  paintedWindow.rect(5, 5, paintedWindow.width-10, paintedWindow.height-10);
  paintedWindow.line(0, paintedWindow.height/2, paintedWindow.width, paintedWindow.height/2);
  paintedWindow.line(paintedWindow.width/2, 0, paintedWindow.width/2, paintedWindow.height);
  push()
  image(paintedWindow, x, y)
  pop()
}
