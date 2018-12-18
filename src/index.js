import './style.css'
import { preload } from './sketch/preload'
import { setup } from './sketch/setup'
import { windowResized } from './sketch/windowResized'
import { draw } from './sketch/draw'

global.preload = preload
global.setup = setup
global.windowResized = windowResized
global.draw = draw
