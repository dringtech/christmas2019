/* eslint-disable no-undef */
import skaterPng from '../assets/skating-base.png'
import fontPath from '../assets/GreatVibes-Regular.otf'
import gilesHeadPng from '../assets/giles-head.png'
import beaHeadPng from '../assets/bea.png'
import marthaHeadPng from '../assets/martha.png'
import rebeccaHeadPng from '../assets/rebecca-head.png'

export let skaterIcon
export let font
export let beaHead
export let gilesHead
export let marthaHead
export let rebeccaHead

export function preload () {
  skaterIcon = loadImage(skaterPng)
  font = loadFont(fontPath)
  beaHead = loadImage(beaHeadPng)
  gilesHead = loadImage(gilesHeadPng)
  marthaHead = loadImage(marthaHeadPng)
  rebeccaHead = loadImage(rebeccaHeadPng)
}
