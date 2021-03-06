/* eslint-disable no-undef */
import { presents } from '../components/presents';
import { bg } from '../components/background'
import { tree } from '../components/tree'
import * as windowView from '../components/window'

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
  windowView.draw(width/2, 50)
  image(tree, 50, 50)

  for (const p of presents) {
    p.draw()
  }
}
