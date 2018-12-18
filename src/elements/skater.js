/* eslint-disable no-undef */
const boundaryMargin = 105
const purlinDelta = 0.003
const friction = 0.2

function offLeft () {
  if (this.x < -boundaryMargin) {
    this.direction *= -1
    this.boundaryTest = offRight
    this.createSprite()
  }
}
function offRight () {
  if (this.x > windowWidth + boundaryMargin) {
    this.direction *= -1
    this.boundaryTest = offLeft
    this.createSprite()
  }
}
function setSpeed () {
  return random(2, 10)
}

class Skater {
  constructor (params) {
    this.faceScale = params.faceScale ? params.faceScale : 1
    this.x = params.x; this.y = params.y
    this.direction = random([1, -1])
    this.speed = setSpeed()
    this.boundaryTest = this.direction > 0 ? offRight : offLeft
    this.image = params.image
    this.face = params.face
    this.createSprite()
    this.purlinCursor = random(10000)
  }
  createSprite () {
    if (this.sprite != null) this.sprite.remove()
    this.sprite = createGraphics(100, 100)
    if (this.DEBUG) {
      this.sprite.stroke('red')
      this.sprite.strokeWeight(2)
      this.sprite.noFill()
      this.sprite.rectMode(CORNERS)
      this.sprite.rect(1, 1, 98, 98)
    }
    this.sprite.imageMode(CENTER)
    this.sprite.push()
    this.sprite.applyMatrix(
      1 / this.faceScale, 0,
      0, 1 / this.faceScale,
      this.sprite.width * (0.5 + this.direction * 0.08), this.sprite.height * 0.29)
    this.sprite.image(this.face, 0, 0)
    this.sprite.pop()
    this.sprite.push()
    this.sprite.applyMatrix(
      this.direction, 0,
      0, 1,
      this.sprite.width / 2, this.sprite.height / 2)
    this.sprite.image(this.image, 0, 0)
    this.sprite.pop()
  }
  draw () {
    push()
    imageMode(CENTER)
    translate(this.x, this.y)
    scale(1.5, 1.5)
    image(this.sprite, 0, 0, this.sprite.width, this.sprite.height)
    pop()
  }
  animate () {
    this.x = this.x + this.speed * this.direction
    this.y = noise(this.purlinCursor += purlinDelta) * (windowHeight - this.sprite.height) / 2 + windowHeight / 2
    this.boundaryTest(this)
    this.speed -= friction * 1 / this.speed
    if (this.speed < 1.0) this.speed = setSpeed()
  }
}

export function createSkater (params) {
  return new Skater(params)
}
