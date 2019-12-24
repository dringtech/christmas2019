/* eslint-disable no-undef */
import { bg, makeBackground } from '../components/background';
import * as container from '../components/container';
import { makeTree } from '../components/tree';
import * as theWindow from '../components/window';
import { makePresents } from '../components/presents';

import { setupSound } from '../elements/tune/sound'
import { createButton } from '../elements/button'

export let soundButton

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
  makePresents();
  theWindow.setup(250, 200)
  image(bg, 0, 0)
}
