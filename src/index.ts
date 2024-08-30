import { lmsysCoding } from "./mixes/lmsys-coding"
import { lmsysOverall } from "./mixes/lmsys-overall"
import { moaCoding } from "./mixes/moa-coding"
import { sealSpanish } from "./mixes/seal-spanish"

export * from "./types/mix-configs"
export const modelMixes = {
  lmsysCoding,
  lmsysOverall,
  moaCoding,
  sealSpanish
}
