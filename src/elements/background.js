/* eslint-disable no-undef */
import { font } from '../sketch/preload'

const floorColour = '#996633'

export let bg

export function makeBackground () {
  bg = createGraphics(windowWidth, windowHeight)
  var wallColour = color('#6600cc')
  var textColor = color('#ffcc00')
  bg.background(wallColour)
  bg.noStroke()
  bg.colorMode(HSB)

  // TODO: Make floor a shaded colour
  bg.fill(floorColour)
  bg.rect(-10, height - 200, width + 20, 210)

  bg.textAlign(CENTER)
  bg.textFont(font, 64)
  bg.fill(textColor)
  bg.text('Merry Christmas', width / 2, 60)
  bg.text('from The Drings', width / 2, 130)
}
