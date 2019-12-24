import { gilesHead, beaHead, marthaHead, rebeccaHead } from '../sketch/preload';

import { Present } from './present';

export let presents;

export function makePresents() {
    presents = [
        { x: 2.6*width/5, y: height-150, size: 120, wrapping: '#62845c', ribbon: '#f9c013', face: gilesHead },
        { x: 3.4*width/5, y: height-140, size: 110, wrapping: '#c37fe2', ribbon: '#917fe2', face: rebeccaHead },
        { x: 2*width/5, y: height-100, size: 100, wrapping: '#63b3b7', face: marthaHead },
        { x: 4*width/5, y: height-110, size: 95, wrapping: '#c90404', ribbon: '#cbccef', face: beaHead },
    ].map(options => new Present(options));
}
