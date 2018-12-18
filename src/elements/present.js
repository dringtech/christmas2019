export class Present {
  constructor (x, y, size = 100) {
    const image = createGraphics(size, size)
    image.fill('red')
    image.rect(0, 0, size, size)
    this.image = image
    this.x = x;
    this.y = y;
  }
  draw () {
    push()
    translate(this.x, this.y)
    image(this.image, 0, 0)
    pop()
  }
}