/* eslint-disable no-undef */
import * as container from '../components/container';
import { bg, makeBackground } from '../components/background'
import { makePresents } from '../components/presents';

export function windowResized () {
  const { containerWidth, containerHeight } = container.getSize();
  resizeCanvas(containerWidth, containerHeight);

  if (bg !== undefined) bg.remove()
  makeBackground()
  makePresents();
}
