import { createSnowflake } from './snowflake'

export let snowstorm = []

export function createSnowstorm (numFlakes) {
  for (let i = 0; i < numFlakes; i++) snowstorm[i] = createSnowflake()
  return snowstorm
}
