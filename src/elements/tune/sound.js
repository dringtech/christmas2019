/* eslint-disable no-undef */
import { getScore } from './score'

export let tune
let synth

function makeSound (time, note) {
  synth.play(note, 0.1, time, 0.2)
}

export function setupSound () {
  masterVolume(0.3)
  synth = new p5.PolySynth(p5.MonoSynth, 4)
  synth.setADSR(0.2, 1, 0.7, 1)

  const score = getScore()
  const partA = new p5.Part()
  score.A.forEach((phrase, i) => {
    partA.addPhrase(new p5.Phrase(`A${i}`, makeSound, phrase))
  })
  tune = partA
  tune.setBPM(70)
}

export function playTune () {
  tune.loop()
}

export function stopTune () {
  tune.stop()
}
