/* eslint-disable no-undef */
class Snowflake {
  constructor (w = width, h = height) {
    this.x = random(w)
    this.y = random(h)
    this.maxY = h;
    this.speed = random(1, 4) / 2
    this.noiseSeed = random(10000)
    this.offsetRadius = 100
    this.turbulence = 0.01
    const flake = createGraphics(30, 30)
    const drawFlake = () => {
      flake.push()
      flake.strokeWeight(2)
      for (let i = 0; i < 6; i++) {
        flake.line(0, 0, 0, 8)
        flake.line(0, 5, 2, 7)
        flake.line(0, 5, -2, 7)
        flake.rotate(PI / 3)
      }
      flake.pop()
    }
    flake.translate(15, 15)
    flake.push()
    flake.stroke('blue')
    flake.strokeWeight(4);
    drawFlake()
    // flake.filter(BLUR, 1)
    flake.pop()
    flake.stroke('white')
    drawFlake()

    this.flake = flake
  }

  animate () {
    this.y += this.speed
    if (this.y > this.maxY + 10) this.y = -10
    this.noiseSeed += this.turbulence
  }

  draw (gfx) {
    const xOff = (2 * noise(this.noiseSeed, 0) - 1) * this.offsetRadius / 2
    const yOff = (2 * noise(0, this.noiseSeed) - 1) * this.offsetRadius / 2
    const rotation = (20 * noise(0, this.noiseSeed))
    gfx.push()
    gfx.imageMode(CENTER)
    gfx.translate(this.x + xOff, this.y + yOff)
    // gfx.scale(2)
    gfx.rotate(rotation)
    gfx.image(this.flake, 0, 0)
    gfx.pop()
  }
}

export function createSnowflake (w = width, h = height) {
  return new Snowflake(w, h)
}
