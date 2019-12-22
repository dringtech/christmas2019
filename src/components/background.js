/* eslint-disable no-undef */
const wallColour = '#431175';
const floorColour = '#51361b';

export let bg

export function makeBackground () {
  bg = createGraphics(width, height)
  bg.background(wallColour)
  bg.noStroke()
  bg.colorMode(HSB)

  // TODO: Make floor a shaded colour
  bg.fill(floorColour)
  bg.rect(-10, height - 200, width + 20, 210)
}
