const green = '#009900'

let tree

const baubleColours = ['red', 'yellow']

function bauble (x, y) {
  const colorIndex = Math.random(baubleColours.length - 1).toFixed(0)
  console.log(colorIndex)
  tree.fill(baubleColours[colorIndex])
  tree.noStroke()
  tree.ellipse(x, y, 3, 3)
}

export default function (x, y) {
  if (!tree) {
    const scaleFactor = 6;
    tree = createGraphics(40 * scaleFactor, 60 * scaleFactor)
    tree.strokeWeight(4)
    tree.scale(scaleFactor)
    tree.push()
    tree.translate(20, 5)
    tree.stroke('Brown')
    tree.line(0, 0, 0, 50)
    tree.stroke(green)
    tree.fill(green)
    tree.triangle(0, 0, 5, 10, -5, 10)
    tree.translate(0, 10)
    tree.triangle(0, 0, 10, 15, -10, 15)
    tree.translate(0, 10)
    tree.triangle(0, 0, 15, 20, -15, 20)
    tree.pop()
    const whereAreTheBaubles = [
      [18, 10], [24, 23], [15, 34], [30, 42],
      [16, 25], [25, 36], [10, 40]
    ]
    for (const i of whereAreTheBaubles) {
      bauble(...i)
    }
  }
  push()
  translate(x, y)
  console.log(tree.width)
  image(tree, -tree.width/2, -tree.height)
  pop()
};