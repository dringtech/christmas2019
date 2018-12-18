/* eslint-disable no-undef */
import volumeOffSvg from '@fortawesome/fontawesome-free/svgs/solid/volume-mute.svg'
import volumeOnSvg from '@fortawesome/fontawesome-free/svgs/solid/volume-up.svg'

import { playTune, stopTune } from '../elements/tune/sound'

let button
let soundOn = false

function labelButton () {
  const icon = soundOn ? volumeOnSvg : volumeOffSvg
  if (button.pressed === true) {
    button.addClass('active')
  } else {
    button.removeClass('active')
  }
  button.html(`Sound ${icon}`)
}

function toggleState () {
  button.pressed = true
  soundOn = !soundOn
  if (soundOn) {
    getAudioContext().resume()
    playTune()
  } else {
    stopTune()
  }
  labelButton()
}

function deactivate () {
  button.pressed = false
  labelButton()
}

export function createButton () {
  button = createDiv()
  button.pressed = false
  soundOn = false
  labelButton()
  button.class('button')
  button.mousePressed(toggleState)
  button.mouseReleased(deactivate)
  return button
}
