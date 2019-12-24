function getPoissonRandom(mean) {
  const L = Math.exp(-1.0*mean);
  let k = 0;
  let p = 1.0;
  do {
      p = p * Math.random();
      k++;
  } while (p > L);
  return k - 1;
}

export class Present {
  constructor (options = {}) {
    const {
      x,
      y,
      size = 100,
      wrapping = 'red',
      ribbon = 'yellow',
      face,
    } = options;
    this.x = x;
    this.y = y;
    this.size = size;
    this.wrapping = wrapping;
    this.ribbon = ribbon;
    this.face = face;
    this.face.resize(0, this.size*0.8);
    this.offset = 0;
    this.makeImage();
    this.prime();
    this.timer = undefined;
  }

  makeImage() {
    const s = this.size;
    this.parcel = createGraphics(this.size+20, this.size+20);
    this.parcel.noStroke();
    this.parcel.fill(this.wrapping);
    this.parcel.translate(10, 10);
    this.parcel.rect(0, 0, this.size, this.size);
    this.parcel.strokeCap(SQUARE);
    this.parcel.stroke(this.ribbon);
    this.parcel.strokeWeight(20);
    this.parcel.line(-2, s/2, s+2, s/2);
    this.parcel.line(s/2, -2, s/2, s+2);
  }

  drawAnimation() {
    if (this.active === true) {
      this.offset = min(this.offset + 15, this.size);
    } else {
      this.offset = max(this.offset - 2, 0);
    }
    if (this.offset === 0) {
      if (!this.primed) this.prime();
      return;
    }

    push();
    translate(0, -this.offset);
    translate(-this.face.width/2, -this.face.height/2)
    image(this.face, 0, 0);
    pop();
  }

  explode() {
    this.primed = false;
    this.active = true;
    const present = this;
    this.timer = setTimeout(() => present.active = false, 1000);
  }

  prime() {
    this.primed = true;
    const present = this;
    const timeout = getPoissonRandom(5)*1000;
    this.timer = setTimeout(() => present.explode(), timeout);
  }

  draw () {
    push()
    translate(this.x, this.y)
    this.drawAnimation();
    image(this.parcel, -(this.size/2 + 10), -(this.size/2 + 10));
    pop()
  }
}