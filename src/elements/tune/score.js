/* eslint-disable no-undef */
const noteLookup = { C: 60, D: 62, E: 64, F: 65, G: 67, A: 69, B: 71 }

function parseScoreString (scoreString) {
  return scoreString.split(/\s+/).filter(_ => _.length > 0)
}

function getNote (noteValue) {
  if (noteValue === '0') return 0
  let baseNote = noteLookup[noteValue[0]]
  if (noteValue[1] === '+') baseNote++
  if (noteValue[1] === '-') baseNote--
  const octaveOffset = (noteValue[noteValue.length - 1] - 4) * 12
  return midiToFreq(baseNote + octaveOffset)
}

const partA1 = parseScoreString(`
             D4   0
 G4 0 G4 A4  G4 F+4
 E4 0 E4  0  E4   0
 A4 0 A4 B4  A4  G4
F+4 0 D4  0  D4   0
 B4 0 B4 C5  B4  A4
 G4 0 E4  0  D4  D4
 E4 0 A4  0 F+4   0
 G4 0  0  0
`)

const partA2 = parseScoreString(`
         0 0
 B2 0 0 0 0 0
 C3 0 0 0 0 0
C+3 0 0 0 0 0
 D3 0 0 0 0 0
D+3 0 0 0 0 0
 E3 0 0 0 B2 0
 C3 0 0 0 D3 0
 G2 0 0 0
  `)

const partA3 = parseScoreString(`
           0 0
   0 0 0 0 0 0
   0 0 0 0 0 0
   0 0 0 0 0 0
   0 0 0 0 0 0
   0 0 0 0 0 0
   0 0 0 0 0 0
   C4 0 0 0 C4 0
   B3 0 0 0
    `)

const partB1 = parseScoreString(`
            D4 0
  G4 0 G4 0 G4 0
  F+4 0 0 0 F+4 0
  G4 0 F+4 0 E4 0
  D4 0 0 0 A4 0
  B4 0 A4 0 G4 0
  D5 0 D4 0 D4 D4
  E4 0 A4 0 F+4 0
  G4 0 0 0
  `)

const partB2 = parseScoreString(`
             0 0
     G2 0 0 0 0 0
     D3 0 0 0 0 0
     A2 0 0 0 G3 0
     F+3 0 0 0 0 0
     G3 0 C3 0 C+3 0
     D3 0 C3 0 B2 0
     A2 0 0 0 D3 0
     G3 0 0 0
      `)

const partB3 = parseScoreString(`
             0 0
     B3 0 0 0 0 0
     D4 0 0 0 0 0
     C-4 0 0 0 0 0
     C4 0 0 0 0 0
     D4 0 E4 0 0 0
     0 0 0 0 0 0
     C4 0 0 0 C4 0
     D4 0 0 0
      `)

export function getScore () {
  return {
    A: [
      partA1.map(getNote).concat(partB1.map(getNote)),
      partA2.map(getNote).concat(partB2.map(getNote)),
      partA3.map(getNote).concat(partB3.map(getNote)),
    ],
    B: [
      partB1.map(getNote),
      partB2.map(getNote),
      partB3.map(getNote),
    ],
  }
}
