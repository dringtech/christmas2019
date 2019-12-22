import { createSnowflake } from './snowflake'

export function createSnowstorm (numFlakes, stormWidth = width, stormHeight = height) {
  let snowstorm = []
  for (let i = 0; i < numFlakes; i++) snowstorm[i] = createSnowflake(stormWidth, stormHeight);
  return snowstorm;
}
