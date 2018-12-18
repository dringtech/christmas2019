/* eslint-disable no-undef */
import { skaters, presents } from './setup'
import { bg } from '../elements/background'
import tree from '../elements/tree'
import * as windowView from '../elements/window'

export function draw () {
  // Object.keys(skaters)
  //   .forEach(_ => skaters[_].animate())
  // // snowstorm.forEach(_ => _.animate())
  // image(bg, 0, 0)
  // Object.keys(skaters)
  //   .sort((a, b) => skaters[a].y > skaters[b].y)
  //   .forEach(_ => skaters[_].draw())
  // snowstorm.forEach(_ => _.draw())

  image(bg, 0, 0)
  windowView.draw(width/2 + 100, height - 280)
  tree(width/2 - 200, height - 150)
  for (const p of presents) {
    p.draw()
  }
}
