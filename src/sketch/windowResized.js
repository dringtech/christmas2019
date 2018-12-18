/* eslint-disable no-undef */
import { bg, makeBackground } from '../elements/background'
import { createSnowstorm } from '../elements/snowstorm'

export function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
  if (bg !== undefined) bg.remove()
  // createSnowstorm()
  makeBackground()
}
