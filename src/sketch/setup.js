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

  canvas.parent(container.id);

  makeBackground()
  makeTree();
  makePresents();
  theWindow.setup(250, 200)
  image(bg, 0, 0)
}
