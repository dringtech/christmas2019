/* eslint-disable no-undef */
import { snowstorm, createSnowstorm } from './snowstorm'

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

export function setup (width, height) {
  scene = createGraphics(width, height)
  const skyColor = color('#adeeff')
  createSnowstorm(100)
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
  snowstorm.forEach(flake => flake.animate())
  snowstorm.forEach(flake => flake.draw(paintedWindow))
  paintedWindow.strokeWeight(10)
  paintedWindow.stroke('black')
  paintedWindow.noFill()
  paintedWindow.rect(0, 0, paintedWindow.width, paintedWindow.height)
  push()
  translate(-paintedWindow.width / 2, -paintedWindow.height)
  image(paintedWindow, x, y)
  pop()
}
