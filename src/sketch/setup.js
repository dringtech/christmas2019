/* eslint-disable no-undef */
import { bg, makeBackground } from '../components/background';
import * as container from '../components/container';
import { makeTree } from '../components/tree';
import * as theWindow from '../components/window'

import { skaterIcon, gilesHead, beaHead, marthaHead, rebeccaHead } from './preload'
import { createSkater } from '../elements/skater'
import { setupSound } from '../elements/tune/sound'
import { createButton } from '../elements/button'
import { Present } from '../elements/present'

export const skaters = {}
export let soundButton
export const presents = []

export function setup () {
  // setupSound()
  // soundButton = createButton()

  const { containerHeight, containerWidth } = container.getSize();

  const canvas = createCanvas(containerWidth, containerHeight);
  // skaters.bea = createSkater({ image: skaterIcon, face: beaHead, x: -50, y: windowHeight / 2, faceScale: 4 })
  // skaters.martha = createSkater({ image: skaterIcon, face: marthaHead, x: -50, y: windowHeight / 2, faceScale: 4 })
  // skaters.rebecca = createSkater({ image: skaterIcon, face: rebeccaHead, x: -50, y: windowHeight / 2, faceScale: 4 })
  // skaters.giles = createSkater({ image: skaterIcon, face: gilesHead, x: -50, y: windowHeight / 2, faceScale: 4 })
  // createSnowstorm()

  canvas.parent(container.id);

  makeBackground()
  makeTree();

  presents.push(new Present(200, height - 150))
  presents.push(new Present(width / 2 - 200, height - 120))
  presents.push(new Present(600, height - 150))
  presents.push(new Present(800, height - 150))
  theWindow.setup(250, 200)
  image(bg, 0, 0)
}
